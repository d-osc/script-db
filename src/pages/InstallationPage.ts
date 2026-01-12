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
      h2({ class: styles.pageH2 }, 'Client Libraries'),
      p({ class: styles.pageP }, 'After installing the server, install the client library for your application:'),

      h3({ class: styles.pageH3 }, 'Browser Client'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, 'npm install @scriptdb/browser-client')
      ),
      p({ class: styles.pageP }, 'For browser applications with WebSocket support.'),

      h3({ class: styles.pageH3 }, 'Node.js Client'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, 'npm install @scriptdb/client')
      ),
      p({ class: styles.pageP }, 'For Node.js applications with TCP connection.')
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Quick Start After Installation'),
      p({ class: styles.pageP }, 'Once ScriptDB is installed, you can start using it:'),

      h3({ class: styles.pageH3 }, '1. Start the Server'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, '# Start ScriptDB server\nscriptdb start\n\n# Start on custom port\nscriptdb start --port 8080\n\n# Start in foreground\nscriptdb start --foreground')
      ),

      h3({ class: styles.pageH3 }, '2. Create Your First Database'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, `import ScriptDBClient from '@scriptdb/browser-client';

const client = new ScriptDBClient('scriptdb://localhost:1234');
await client.connect();

// Create a database
await client.createDatabase('mydb');

// Insert data
await client.run(
  'db.users.insert({ name: "Alice", age: 30 })',
  'mydb'
);

// Query data
const users = await client.run('db.users.find()', 'mydb');
console.log(users);`)
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Verify Installation'),
      p({ class: styles.pageP }, 'After installation, verify that ScriptDB is working:'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, '# Check version\nscriptdb --version\n\n# View help\nscriptdb --help\n\n# Check status\nscriptdb status')
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
