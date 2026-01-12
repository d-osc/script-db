#!/usr/bin/env bash
# Copyright 2025 ScriptDB contributors. All rights reserved. MIT license.
# Uninstallation script for ScriptDB

set -e

# Installation directory
INSTALL_DIR="${SCRIPTDB_INSTALL:-$HOME/.scriptdb}"
BIN_DIR="$INSTALL_DIR/bin"
BINARY_PATH="$BIN_DIR/scriptdb"

echo "Uninstalling ScriptDB..."
echo "  Install directory: $INSTALL_DIR"
echo ""

# Check if installed
if [[ ! -d "$INSTALL_DIR" ]] && [[ ! -f "$BINARY_PATH" ]]; then
    echo "ScriptDB is not installed at $INSTALL_DIR"
    exit 0
fi

# Remove installation directory
if [[ -d "$INSTALL_DIR" ]]; then
    echo "Removing $INSTALL_DIR..."
    rm -rf "$INSTALL_DIR"
    echo "✓ Removed installation directory"
fi

echo ""
echo "✓ ScriptDB uninstalled successfully!"
echo ""

# Check if PATH needs cleanup
SHELL_NAME=$(basename "$SHELL")
PROFILE_FILE=""

case $SHELL_NAME in
    bash)
        if [[ "$OSTYPE" == "darwin"* ]]; then
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

if [[ -n "$PROFILE_FILE" ]] && [[ -f "$PROFILE_FILE" ]]; then
    if grep -q "$BIN_DIR" "$PROFILE_FILE"; then
        echo "Note: You may want to remove ScriptDB from your PATH in:"
        echo "  $PROFILE_FILE"
        echo ""
        echo "Look for lines containing: $BIN_DIR"
        echo ""
    fi
fi

echo "To reinstall, run:"
echo "  curl -fsSL https://raw.githubusercontent.com/d-osc/script-db/main/apps/server/scripts/install.sh | bash"