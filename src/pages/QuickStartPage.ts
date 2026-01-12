import { div, h1, h2, h3, p, pre, code, ul, li, strong } from 'elit/el';
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
      h2({ class: styles.pageH2 }, '2. Start the Server'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, '# Start ScriptDB server (default port: 1234)\nscriptdb start\n\n# Start with custom port\nscriptdb start --port 8080\n\n# Start in foreground\nscriptdb start --foreground')
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, '3. Install Client Library'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, '# For browser applications\nnpm install @scriptdb/browser-client\n\n# For Node.js applications\nnpm install @scriptdb/client')
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, '4. Connect and Query'),
      h3({ class: styles.pageH3 }, 'Browser Example'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, `import ScriptDBClient from '@scriptdb/browser-client';

// Connect to server
const client = new ScriptDBClient('scriptdb://localhost:1234');
await client.connect();

// Create a database
await client.createDatabase('mydb');

// Insert some data
await client.run(
  'db.users.insert({ name: "John", age: 30 })',
  'mydb'
);

// Query the data
const users = await client.run(
  'db.users.find({ age: { $gt: 25 } })',
  'mydb'
);

console.log('Found users:', users);

// Save to disk
await client.saveDatabase('mydb');`)
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, '5. What\'s Next?'),
      ul({ class: styles.pageUl },
        li({ class: styles.pageLi }, strong('Documentation'), ' - Read detailed API documentation'),
        li({ class: styles.pageLi }, strong('Usage Examples'), ' - Explore advanced usage patterns'),
        li({ class: styles.pageLi }, strong('CLI Reference'), ' - Learn command-line interface'),
        li({ class: styles.pageLi }, strong('Authentication'), ' - Set up secure connections'),
        li({ class: styles.pageLi }, strong('Real-Time Sync'), ' - Enable WebSocket synchronization')
      )
    )
  );
};
