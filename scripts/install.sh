#!/usr/bin/env bash
# Copyright 2025 ScriptDB contributors. All rights reserved. MIT license.
# Installation script for ScriptDB - inspired by Bun's installer

set -e

# Detect OS and architecture
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    OS="linux"
elif [[ "$OSTYPE" == "darwin"* ]]; then
    OS="darwin"
else
    echo "Error: Unsupported OS: $OSTYPE"
    exit 1
fi

ARCH=$(uname -m)
case $ARCH in
    x86_64)
        ARCH="x64"
        ;;
    aarch64|arm64)
        ARCH="arm64"
        ;;
    *)
        echo "Error: Unsupported architecture: $ARCH"
        exit 1
        ;;
esac

# Detect musl on Linux
LIBC=""
if [[ "$OS" == "linux" ]]; then
    if ldd --version 2>&1 | grep -q musl; then
        LIBC="-musl"
    fi
fi

# Determine binary name
BINARY_NAME="scriptdb-${OS}-${ARCH}${LIBC}"

# GitHub release URL (change this to your actual release URL)
GITHUB_REPO="https://github.com/yourusername/scriptdb"
VERSION="${SCRIPTDB_VERSION:-latest}"

if [[ "$VERSION" == "latest" ]]; then
    DOWNLOAD_URL="${GITHUB_REPO}/releases/latest/download/${BINARY_NAME}"
else
    DOWNLOAD_URL="${GITHUB_REPO}/releases/download/${VERSION}/${BINARY_NAME}"
fi

# Installation directory
INSTALL_DIR="${SCRIPTDB_INSTALL:-$HOME/.scriptdb}"
BIN_DIR="$INSTALL_DIR/bin"

echo "Installing ScriptDB..."
echo "  OS: $OS"
echo "  Arch: $ARCH"
echo "  Binary: $BINARY_NAME"
echo "  Install to: $BIN_DIR"
echo ""

# Create installation directory
mkdir -p "$BIN_DIR"

# Download binary
echo "Downloading from $DOWNLOAD_URL..."
if command -v curl &> /dev/null; then
    curl -fsSL "$DOWNLOAD_URL" -o "$BIN_DIR/scriptdb"
elif command -v wget &> /dev/null; then
    wget -q "$DOWNLOAD_URL" -O "$BIN_DIR/scriptdb"
else
    echo "Error: curl or wget is required"
    exit 1
fi

# Make executable
chmod +x "$BIN_DIR/scriptdb"

echo ""
echo "✓ ScriptDB installed successfully!"
echo ""

# Add to PATH instructions
SHELL_NAME=$(basename "$SHELL")
PROFILE_FILE=""

case $SHELL_NAME in
    bash)
        if [[ "$OS" == "darwin" ]]; then
            PROFILE_FILE="$HOME/.bash_profile"
        else
            PROFILE_FILE="$HOME/.bashrc"
        fi
        ;;
    zsh)
        PROFILE_FILE="$HOME/.zshrc"
        ;;
    fish)
        PROFILE_FILE="$HOME/.config/fish/config.fish"
        ;;
esac

# Check if already in PATH
if [[ ":$PATH:" != *":$BIN_DIR:"* ]]; then
    echo "To add ScriptDB to your PATH, run:"
    echo ""

    if [[ -n "$PROFILE_FILE" ]]; then
        echo "  echo 'export PATH=\"\$PATH:$BIN_DIR\"' >> $PROFILE_FILE"
        echo "  source $PROFILE_FILE"
    else
        echo "  export PATH=\"\$PATH:$BIN_DIR\""
    fi

    echo ""
    echo "Or add this to your shell configuration file:"
    echo "  export PATH=\"\$PATH:$BIN_DIR\""
    echo ""
else
    echo "ScriptDB is already in your PATH!"
fi

echo "Initializing ScriptDB..."
echo ""

# Run initialization
if "$BINARY_PATH" --help > /dev/null 2>&1; then
    echo "✓ ScriptDB initialized successfully!"
else
    echo "Warning: Could not initialize ScriptDB"
fi

echo ""
echo "Verify installation:"
echo "  scriptdb --help"
echo ""
echo "Start ScriptDB server:"
echo "  scriptdb start"
echo ""
echo "To uninstall, run:"
echo "  curl -fsSL https://raw.githubusercontent.com/yourusername/scriptdb/main/apps/server/scripts/uninstall.sh | bash"
