import { div, h1, h2, h3, p, pre, code } from 'elit/el';
import type { VNode } from 'elit';
import { styles } from '../styleNames';

export const QuickStartPage = (): VNode => {
  return div(
    h1({ class: styles.pageH1 }, 'Quick Start'),
    p({ class: styles.pageP }, 'Get up and running with ScriptDB in minutes!'),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, '1. Installation'),
      p({ class: styles.pageP }, 'First, install ScriptDB for your platform:'),
      h3({ class: styles.pageH3 }, 'Windows'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, 'irm https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.ps1 | iex')
      ),
      h3({ class: styles.pageH3 }, 'Linux/macOS'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, 'curl -fsSL https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.sh | bash')
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, '2. Verify Installation'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, 'scriptdb --help')
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, '3. Start ScriptDB Server'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, 'scriptdb start')
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, '4. Basic Commands'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, '# Get help\nscriptdb --help\n\n# Check version\nscriptdb --version\n\n# Start server\nscriptdb start\n\n# Stop server\nscriptdb stop\n\n# View status\nscriptdb status')
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, '5. Your First Script'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, '# Add a new script\nscriptdb add my-script.sh\n\n# List all scripts\nscriptdb list\n\n# Execute a script\nscriptdb run my-script.sh\n\n# Remove a script\nscriptdb remove my-script.sh')
      )
    )
  );
};
