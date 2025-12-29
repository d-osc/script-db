import { div, h1, h2, h3, p, pre, code } from 'elit/el';
import type { VNode } from 'elit';
import { styles } from '../styleNames';

export const InstallationPage = (): VNode => {
  return div(
    h1({ class: styles.pageH1 }, 'Installation'),
    p({ class: styles.pageP }, 'ScriptDB can be installed on Windows, Linux, and macOS. Choose the installation method that works best for your platform.'),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Windows'),
      h3({ class: styles.pageH3 }, 'PowerShell Installation'),
      p({ class: styles.pageP }, 'Open PowerShell and run:'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, 'irm https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.ps1 | iex')
      ),

      h3({ class: styles.pageH3 }, 'Custom Installation Directory'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, '$env:SCRIPTDB_INSTALL = "C:\\your\\custom\\path"\nirm https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.ps1 | iex')
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Linux & macOS'),
      h3({ class: styles.pageH3 }, 'Bash Installation'),
      p({ class: styles.pageP }, 'Open your terminal and run:'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, 'curl -fsSL https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.sh | bash')
      ),

      h3({ class: styles.pageH3 }, 'Custom Installation Directory'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, 'export SCRIPTDB_INSTALL="/your/custom/path"\ncurl -fsSL https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.sh | bash')
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Verify Installation'),
      p({ class: styles.pageP }, 'After installation, verify that ScriptDB is working:'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, 'scriptdb --help')
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Uninstallation'),
      p({ class: styles.pageP }, 'To uninstall ScriptDB:'),
      h3({ class: styles.pageH3 }, 'Windows'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, 'irm https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/uninstall.ps1 | iex')
      ),
      h3({ class: styles.pageH3 }, 'Linux/macOS'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, 'curl -fsSL https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/uninstall.sh | bash')
      )
    )
  );
};
