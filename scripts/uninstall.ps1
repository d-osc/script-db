# Copyright 2025 ScriptDB contributors. All rights reserved. MIT license.
# Uninstallation script for ScriptDB

$ErrorActionPreference = 'Stop'

# Installation directory
$InstallDir = if ($env:SCRIPTDB_INSTALL) { $env:SCRIPTDB_INSTALL } else { "$env:USERPROFILE\.scriptdb" }
$BinDir = "$InstallDir\bin"
$BinaryPath = "$BinDir\scriptdb.exe"

Write-Host "Uninstalling ScriptDB..." -ForegroundColor Cyan
Write-Host "  Install directory: $InstallDir"
Write-Host ""

# Check if installed
if (-not (Test-Path $InstallDir) -and -not (Test-Path $BinaryPath)) {
    Write-Host "ScriptDB is not installed at $InstallDir" -ForegroundColor Yellow
    exit 0
}

# Remove installation directory
if (Test-Path $InstallDir) {
    Write-Host "Removing $InstallDir..." -ForegroundColor Yellow
    try {
        Remove-Item -Recurse -Force $InstallDir
        Write-Host "✓ Removed installation directory" -ForegroundColor Green
    } catch {
        Write-Host "Error: Could not remove installation directory" -ForegroundColor Red
        Write-Host $_.Exception.Message -ForegroundColor Red
        exit 1
    }
}

Write-Host ""
Write-Host "✓ ScriptDB uninstalled successfully!" -ForegroundColor Green
Write-Host ""

# Check if PATH needs cleanup
$CurrentPath = [Environment]::GetEnvironmentVariable("Path", "User")

if ($CurrentPath -like "*$BinDir*") {
    Write-Host "Removing from PATH..." -ForegroundColor Yellow

    try {
        # Remove from user PATH
        $NewPath = ($CurrentPath.Split(';') | Where-Object { $_ -ne $BinDir }) -join ';'

        [Environment]::SetEnvironmentVariable(
            "Path",
            $NewPath,
            "User"
        )

        Write-Host "✓ Removed from PATH successfully!" -ForegroundColor Green
        Write-Host ""
        Write-Host "Restart your terminal for changes to take effect." -ForegroundColor Cyan
    } catch {
        Write-Host ""
        Write-Host "Warning: Could not automatically remove from PATH" -ForegroundColor Yellow
        Write-Host "You may want to manually remove:" -ForegroundColor Yellow
        Write-Host "  $BinDir" -ForegroundColor White
    }
}

Write-Host ""
Write-Host "To reinstall, run:" -ForegroundColor Cyan
Write-Host "  irm https://raw.githubusercontent.com/yourusername/scriptdb/main/apps/server/scripts/install.ps1 | iex" -ForegroundColor White
Write-Host ""
