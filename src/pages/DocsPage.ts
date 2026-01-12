import { div, h1, h2, h3, p, ul, li, code, strong, a, pre } from 'elit/el';
import type { VNode } from 'elit';
import { styles } from '../styleNames';

export const DocsPage = (): VNode => {
  return div(
    h1({ class: styles.pageH1 }, 'Documentation'),
    p({ class: styles.pageP }, 'Welcome to the ScriptDB documentation.'),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'What is ScriptDB?'),
      p({ class: styles.pageP }, 'ScriptDB is a high-performance in-memory database with JavaScript-based querying and real-time synchronization capabilities. It provides sub-millisecond query response times and supports both browser and Node.js environments.')
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Core Concepts'),
      h3({ class: styles.pageH3 }, 'In-Memory Database'),
      p({ class: styles.pageP }, 'ScriptDB stores data in memory for ultra-fast access:'),
      ul({ class: styles.pageUl },
        li({ class: styles.pageLi }, 'Sub-millisecond query response times'),
        li({ class: styles.pageLi }, 'JavaScript-based querying language'),
        li({ class: styles.pageLi }, 'Multiple isolated databases'),
        li({ class: styles.pageLi }, 'Persistent snapshots to disk')
      ),

      h3({ class: styles.pageH3 }, 'Real-Time Synchronization'),
      p({ class: styles.pageP }, 'WebSocket support for real-time updates:'),
      ul({ class: styles.pageUl },
        li({ class: styles.pageLi }, 'Browser client with WebSocket connection'),
        li({ class: styles.pageLi }, 'Node.js client with TCP connection'),
        li({ class: styles.pageLi }, 'Automatic reconnection with exponential backoff'),
        li({ class: styles.pageLi }, 'Request queue management for high concurrency')
      ),

      h3({ class: styles.pageH3 }, 'Cross-Platform Support'),
      p({ class: styles.pageP }, 'ScriptDB works seamlessly on:'),
      ul({ class: styles.pageUl },
        li({ class: styles.pageLi }, strong('Windows'), ' (x64, x86)'),
        li({ class: styles.pageLi }, strong('Linux'), ' (x64, arm64, with glibc or musl)'),
        li({ class: styles.pageLi }, strong('macOS'), ' (x64, arm64/Apple Silicon)')
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Server Architecture'),
      h3({ class: styles.pageH3 }, 'Protocol'),
      p({ class: styles.pageP }, 'ScriptDB uses a custom protocol over TCP and WebSocket:'),
      ul({ class: styles.pageUl },
        li({ class: styles.pageLi }, 'Connection URI: ', code({ class: styles.pageCode }, 'scriptdb://host:port/database')),
        li({ class: styles.pageLi }, 'WebSocket port: TCP port + 1'),
        li({ class: styles.pageLi }, 'JSON message format with optional HMAC signing'),
        li({ class: styles.pageLi }, 'Token-based authentication')
      ),

      h3({ class: styles.pageH3 }, 'Installation Directories'),
      p({ class: styles.pageP }, 'Default installation locations:'),
      ul({ class: styles.pageUl },
        li({ class: styles.pageLi }, strong('Windows: '), code({ class: styles.pageCode }, '%USERPROFILE%\\.scriptdb')),
        li({ class: styles.pageLi }, strong('Linux/macOS: '), code({ class: styles.pageCode }, '~/.scriptdb'))
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Environment Variables'),
      ul({ class: styles.pageUl },
        li({ class: styles.pageLi }, strong('SCRIPTDB_PORT'), ' - Server port (default: 1234)'),
        li({ class: styles.pageLi }, strong('SCRIPTDB_HOST'), ' - Server host (default: 0.0.0.0)'),
        li({ class: styles.pageLi }, strong('SCRIPTDB_DATA_DIR'), ' - Data directory path'),
        li({ class: styles.pageLi }, strong('SCRIPTDB_LOG_LEVEL'), ' - Logging level (debug, info, warn, error)')
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Key Features'),
      ul({ class: styles.pageUl },
        li({ class: styles.pageLi }, strong('High Performance'), ' - In-memory storage with sub-millisecond queries'),
        li({ class: styles.pageLi }, strong('WebSocket Support'), ' - Real-time synchronization for browsers'),
        li({ class: styles.pageLi }, strong('Persistent Storage'), ' - Save databases to disk at any time'),
        li({ class: styles.pageLi }, strong('Authentication'), ' - Built-in username/password with token sessions'),
        li({ class: styles.pageLi }, strong('HMAC Signing'), ' - Optional message signing for enhanced security'),
        li({ class: styles.pageLi }, strong('JavaScript Querying'), ' - Use JavaScript for powerful data manipulation'),
        li({ class: styles.pageLi }, strong('Multiple Databases'), ' - Manage multiple isolated database contexts'),
        li({ class: styles.pageLi }, strong('Auto-Reconnect'), ' - Automatic reconnection with exponential backoff')
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Client Libraries'),
      p({ class: styles.pageP }, 'ScriptDB provides official client libraries for different environments:'),
      ul({ class: styles.pageUl },
        li({ class: styles.pageLi }, strong(a({ href: '#/api', onclick: (e: Event) => { e.preventDefault(); window.location.hash = '#/api'; } }, '@scriptdb/browser-client')), ' - WebSocket client for browser applications'),
        li({ class: styles.pageLi }, strong(a({ href: '#/api', onclick: (e: Event) => { e.preventDefault(); window.location.hash = '#/api'; } }, '@scriptdb/client')), ' - TCP client for Node.js applications')
      ),
      p({ class: styles.pageP }, 'Visit the ', a({ href: '#/api', onclick: (e: Event) => { e.preventDefault(); window.location.hash = '#/api'; } }, 'API Documentation'), ' page for detailed reference and examples.')
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Quick Example'),
      p({ class: styles.pageP }, 'Get started with ScriptDB in just a few lines:'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, `import ScriptDBClient from '@scriptdb/browser-client';

// Connect to server
const client = new ScriptDBClient('scriptdb://localhost:1234');
await client.connect();

// Create a database
await client.createDatabase('mydb');

// Insert data
await client.run(
  'db.users.insert({ name: "John", age: 30, status: "active" })',
  'mydb'
);

// Query data
const users = await client.run(
  'db.users.find({ age: { $gt: 25 } })',
  'mydb'
);
console.log(users);

// Save to disk
await client.saveDatabase('mydb');`)
      )
    )
  );
};
