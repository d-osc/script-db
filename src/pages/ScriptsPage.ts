import { div, h1, h2, h3, h4, p, pre, code, ul, li, strong } from 'elit/el';
import type { VNode } from 'elit';
import { styles } from '../styleNames';

export const ScriptsPage = (): VNode => {
  return div(
    h1({ class: styles.pageH1 }, 'Installation Scripts'),
    p({ class: styles.pageP }, 'ScriptDB provides automated installation scripts for all supported platforms.'),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Overview'),
      p({ class: styles.pageP }, 'ScriptDB installation scripts handle binary download, installation, and configuration automatically. They support multiple platforms, architectures, and installation methods.'),
      ul({ class: styles.pageUl },
        li({ class: styles.pageLi }, strong('Cross-Platform'), ' - Windows, Linux, and macOS support'),
        li({ class: styles.pageLi }, strong('Multi-Architecture'), ' - x64, x86, ARM64, and more'),
        li({ class: styles.pageLi }, strong('Automatic Detection'), ' - Detects OS, architecture, and dependencies'),
        li({ class: styles.pageLi }, strong('Customizable'), ' - Environment variables for custom installations')
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Windows Installation'),
      h3({ class: styles.pageH3 }, 'install.ps1'),
      p({ class: styles.pageP }, 'PowerShell installation script for Windows systems.'),
      
      h4({ class: styles.pageH3 }, 'Usage'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, '# Basic installation\nirm https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.ps1 | iex\n\n# With custom version\n$env:SCRIPTDB_VERSION="1.0.0"\nirm https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.ps1 | iex\n\n# With custom directory\n$env:SCRIPTDB_INSTALL="C:\\MyTools\\scriptdb"\nirm https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.ps1 | iex')
      ),

      h4({ class: styles.pageH3 }, 'Features'),
      ul({ class: styles.pageUl },
        li({ class: styles.pageLi }, strong('Architecture Detection'), ' - Automatically detects x64 or x86'),
        li({ class: styles.pageLi }, strong('Automatic Download'), ' - Fetches correct binary from GitHub releases'),
        li({ class: styles.pageLi }, strong('PATH Configuration'), ' - Adds ScriptDB to user PATH'),
        li({ class: styles.pageLi }, strong('Custom Directory'), ' - Supports $env:SCRIPTDB_INSTALL'),
        li({ class: styles.pageLi }, strong('Version Selection'), ' - Use $env:SCRIPTDB_VERSION'),
        li({ class: styles.pageLi }, strong('Installation Directory'), ' - Default: %USERPROFILE%\\.scriptdb')
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Unix Installation'),
      h3({ class: styles.pageH3 }, 'install.sh'),
      p({ class: styles.pageP }, 'Bash installation script for Linux and macOS systems.'),
      
      h4({ class: styles.pageH3 }, 'Usage'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, '# Basic installation\ncurl -fsSL https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.sh | bash\n\n# With custom version\nSCRIPTDB_VERSION=1.0.0 curl -fsSL https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.sh | bash\n\n# With custom directory\nSCRIPTDB_INSTALL=/opt/scriptdb curl -fsSL https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.sh | bash')
      ),

      h4({ class: styles.pageH3 }, 'Features'),
      ul({ class: styles.pageUl },
        li({ class: styles.pageLi }, strong('OS Detection'), ' - Supports Linux and macOS'),
        li({ class: styles.pageLi }, strong('Architecture Detection'), ' - Handles x64 and ARM64'),
        li({ class: styles.pageLi }, strong('LIBC Detection'), ' - Distinguishes between glibc and musl'),
        li({ class: styles.pageLi }, strong('Multiple Downloaders'), ' - Uses curl or wget'),
        li({ class: styles.pageLi }, strong('Shell Integration'), ' - PATH setup for bash, zsh, fish'),
        li({ class: styles.pageLi }, strong('Installation Directory'), ' - Default: ~/.scriptdb')
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Environment Variables'),
      p({ class: styles.pageP }, 'Customize installation behavior with environment variables:'),
      
      h3({ class: styles.pageH3 }, 'SCRIPTDB_VERSION'),
      p({ class: styles.pageP }, 'Specify the version to install (default: latest)'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, '# Windows\n$env:SCRIPTDB_VERSION="1.0.0"\n\n# Linux/macOS\nexport SCRIPTDB_VERSION="1.0.0"')
      ),

      h3({ class: styles.pageH3 }, 'SCRIPTDB_INSTALL'),
      p({ class: styles.pageP }, 'Set custom installation directory'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, '# Windows\n$env:SCRIPTDB_INSTALL="C:\\Tools\\scriptdb"\n\n# Linux/macOS\nexport SCRIPTDB_INSTALL="/opt/scriptdb"')
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Installation Directory Structure'),
      p({ class: styles.pageP }, 'After installation, ScriptDB creates the following directory structure:'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, `# Windows
%USERPROFILE%\\.scriptdb/
├── bin/
│   └── scriptdb.exe
└── data/

# Linux/macOS
~/.scriptdb/
├── bin/
│   └── scriptdb
└── data/`)
      ),

      h3({ class: styles.pageH3 }, 'Binary Location'),
      ul({ class: styles.pageUl },
        li({ class: styles.pageLi }, strong('Windows: '), code({ class: styles.pageCode }, '%USERPROFILE%\\.scriptdb\\bin\\scriptdb.exe')),
        li({ class: styles.pageLi }, strong('Linux/macOS: '), code({ class: styles.pageCode }, '~/.scriptdb/bin/scriptdb'))
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Uninstallation'),
      p({ class: styles.pageP }, 'ScriptDB also provides uninstallation scripts for clean removal.'),

      h3({ class: styles.pageH3 }, 'Windows'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, 'irm https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/uninstall.ps1 | iex')
      ),

      h3({ class: styles.pageH3 }, 'Linux/macOS'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, 'curl -fsSL https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/uninstall.sh | bash')
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Supported Platforms'),
      h3({ class: styles.pageH3 }, 'Windows'),
      ul({ class: styles.pageUl },
        li({ class: styles.pageLi }, 'Windows 10/11 (x64, x86)')
      ),

      h3({ class: styles.pageH3 }, 'Linux'),
      ul({ class: styles.pageUl },
        li({ class: styles.pageLi }, 'x64 (Intel/AMD)'),
        li({ class: styles.pageLi }, 'ARM64 (aarch64)'),
        li({ class: styles.pageLi }, 'glibc or musl')
      ),

      h3({ class: styles.pageH3 }, 'macOS'),
      ul({ class: styles.pageUl },
        li({ class: styles.pageLi }, 'x64 (Intel)'),
        li({ class: styles.pageLi }, 'ARM64 (Apple Silicon)')
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Post-Installation'),
      h3({ class: styles.pageH3 }, 'Verify Installation'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, '# Check version\nscriptdb --version\n\n# View help\nscriptdb --help\n\n# Start server\nscriptdb start')
      ),

      h3({ class: styles.pageH3 }, 'Next Steps'),
      ul({ class: styles.pageUl },
        li({ class: styles.pageLi }, 'Read the ', strong('Quick Start'), ' guide'),
        li({ class: styles.pageLi }, 'Explore the ', strong('API Documentation'), ' for client libraries'),
        li({ class: styles.pageLi }, 'Check ', strong('Usage'), ' examples')
      )
    )
  );
};
