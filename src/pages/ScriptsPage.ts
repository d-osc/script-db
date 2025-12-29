import { div, h1, h2, h3, p, pre, code, ul, li, strong } from 'elit/el';
import type { VNode } from 'elit';
import { styles } from '../styleNames';

export const ScriptsPage = (): VNode => {
  return div(
    h1({ class: styles.pageH1 }, 'Script Management'),
    p({ class: styles.pageP }, 'Comprehensive guide to managing scripts with ScriptDB.'),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Installation Scripts'),
      p({ class: styles.pageP }, 'ScriptDB comes with built-in installation and uninstallation scripts for all supported platforms.'),

      h3({ class: styles.pageH3 }, 'Windows Installation Script (install.ps1)'),
      p({ class: styles.pageP }, 'Features:'),
      ul({ class: styles.pageUl },
        li({ class: styles.pageLi }, strong('Architecture Detection'), ' - Automatically detects x64 or x86'),
        li({ class: styles.pageLi }, strong('Automatic Download'), ' - Fetches the correct binary from GitHub releases'),
        li({ class: styles.pageLi }, strong('PATH Configuration'), ' - Adds ScriptDB to user PATH automatically'),
        li({ class: styles.pageLi }, strong('Custom Directory'), ' - Supports $env:SCRIPTDB_INSTALL'),
        li({ class: styles.pageLi }, strong('Version Selection'), ' - Use $env:SCRIPTDB_VERSION')
      ),

      h3({ class: styles.pageH3 }, 'Unix Installation Script (install.sh)'),
      p({ class: styles.pageP }, 'Features:'),
      ul({ class: styles.pageUl },
        li({ class: styles.pageLi }, strong('OS Detection'), ' - Supports Linux and macOS'),
        li({ class: styles.pageLi }, strong('Architecture Detection'), ' - Handles x64 and ARM64'),
        li({ class: styles.pageLi }, strong('LIBC Detection'), ' - Distinguishes between glibc and musl'),
        li({ class: styles.pageLi }, strong('Multiple Downloaders'), ' - Uses curl or wget'),
        li({ class: styles.pageLi }, strong('Shell Integration'), ' - PATH setup for bash, zsh, fish')
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Script Organization'),
      h3({ class: styles.pageH3 }, 'Directory Structure'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, '~/.scriptdb/\n├── bin/\n│   └── scriptdb\n├── scripts/\n│   ├── backup/\n│   ├── deploy/\n│   └── maintenance/\n├── db/\n│   └── scriptdb.db\n├── logs/\n│   └── scriptdb.log\n└── config.json')
      ),

      h3({ class: styles.pageH3 }, 'Recommended Naming'),
      p({ class: styles.pageP }, 'Use descriptive, hierarchical names:'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, 'category-purpose-environment.extension\n\nExamples:\n- backup-database-production.sh\n- deploy-frontend-staging.sh\n- cleanup-logs-development.sh')
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Script Categories'),
      h3({ class: styles.pageH3 }, '1. Backup Scripts'),
      p({ class: styles.pageP }, 'Purpose: Data backup and recovery'),
      p({ class: styles.pageP }, 'Example tags: backup, database, files, daily, weekly'),

      h3({ class: styles.pageH3 }, '2. Deployment Scripts'),
      p({ class: styles.pageP }, 'Purpose: Application deployment'),
      p({ class: styles.pageP }, 'Example tags: deploy, production, staging, frontend, backend'),

      h3({ class: styles.pageH3 }, '3. Maintenance Scripts'),
      p({ class: styles.pageP }, 'Purpose: System maintenance'),
      p({ class: styles.pageP }, 'Example tags: maintenance, cleanup, optimization, monitoring'),

      h3({ class: styles.pageH3 }, '4. Testing Scripts'),
      p({ class: styles.pageP }, 'Purpose: Automated testing'),
      p({ class: styles.pageP }, 'Example tags: test, unit, integration, e2e')
    )
  );
};
