# Copyright 2025 ScriptDB contributors. All rights reserved. MIT license.
# Installation script for ScriptDB - inspired by Bun's installer

$ErrorActionPreference = 'Stop'

# Detect architecture
$Arch = if ([Environment]::Is64BitOperatingSystem) { "x64" } else { "x86" }

# Binary name for Windows
$BinaryName = "scriptdb-windows-$Arch.exe"

# GitHub release URL (change this to your actual release URL)
$GitHubRepo = "https://github.com/d-osc/script-db"
$Version = if ($env:SCRIPTDB_VERSION) { $env:SCRIPTDB_VERSION } else { "latest" }

if ($Version -eq "latest") {
    $DownloadUrl = "$GitHubRepo/releases/latest/download/$BinaryName"
} else {
    $DownloadUrl = "$GitHubRepo/releases/download/$Version/$BinaryName"
}

# Installation directory
$InstallDir = if ($env:SCRIPTDB_INSTALL) { $env:SCRIPTDB_INSTALL } else { "$env:USERPROFILE\.scriptdb" }
$BinDir = "$InstallDir\bin"

Write-Host "Installing ScriptDB..." -ForegroundColor Cyan
Write-Host "  Arch: $Arch"
Write-Host "  Binary: $BinaryName"
Write-Host "  Install to: $BinDir"
Write-Host ""

# Create installation directory
New-Item -ItemType Directory -Force -Path $BinDir | Out-Null

# Download binary
Write-Host "Downloading from $DownloadUrl..." -ForegroundColor Yellow

$ExePath = "$BinDir\scriptdb.exe"

try {
    Invoke-WebRequest -Uri $DownloadUrl -OutFile $ExePath -UseBasicParsing
} catch {
    Write-Host ""
    Write-Host "Error: Failed to download ScriptDB" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "✓ ScriptDB installed successfully!" -ForegroundColor Green
Write-Host ""

# Add to PATH
$CurrentPath = [Environment]::GetEnvironmentVariable("Path", "User")

if ($CurrentPath -notlike "*$BinDir*") {
    Write-Host "Adding ScriptDB to PATH..." -ForegroundColor Yellow

    try {
        # Add to user PATH
        [Environment]::SetEnvironmentVariable(
            "Path",
            "$CurrentPath;$BinDir",
            "User"
        )

        # Update current session PATH
        $env:Path = "$env:Path;$BinDir"

        Write-Host "✓ Added to PATH successfully!" -ForegroundColor Green
        Write-Host ""
        Write-Host "Restart your terminal or run:" -ForegroundColor Cyan
        Write-Host "  refreshenv" -ForegroundColor White
        Write-Host ""
    } catch {
        Write-Host ""
        Write-Host "Warning: Could not automatically add to PATH" -ForegroundColor Yellow
        Write-Host "Please add manually:" -ForegroundColor Yellow
        Write-Host "  $BinDir" -ForegroundColor White
        Write-Host ""
    }
} else {
    Write-Host "ScriptDB is already in your PATH!" -ForegroundColor Green
    Write-Host ""
}

Write-Host "Initializing ScriptDB..." -ForegroundColor Cyan
Write-Host ""

# Run initialization
try {
    & $ExePath --help | Out-Null
    Write-Host "✓ ScriptDB initialized successfully!" -ForegroundColor Green
} catch {
    Write-Host "Warning: Could not initialize ScriptDB" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Verify installation:" -ForegroundColor Cyan
Write-Host "  scriptdb --help" -ForegroundColor White
Write-Host ""
Write-Host "Start ScriptDB server:" -ForegroundColor Cyan
Write-Host "  scriptdb start" -ForegroundColor White
Write-Host ""
Write-Host "To uninstall, run:" -ForegroundColor Cyan
Write-Host "  irm https://raw.githubusercontent.com/d-osc/script-db/main/apps/server/scripts/uninstall.ps1 | iex" -ForegroundColor White
Write-Host ""
