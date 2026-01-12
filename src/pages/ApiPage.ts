import { div, h1, h2, h3, h4, p, pre, code, ul, li, strong, a, span } from 'elit/el';
import type { VNode } from 'elit';
import { createState, reactive } from 'elit/state';
import { styles } from '../styleNames';

export const ApiPage = (): VNode => {
  // Create state for active API tab
  const activeApiTab = createState<'browser' | 'node'>('browser');

  return div(
    h1({ class: styles.pageH1 }, 'API Documentation'),
    p({ class: styles.pageP }, 'Complete API reference for ScriptDB client libraries.'),

    // API Tabs
    div({ class: styles.tabs },
      reactive(activeApiTab, (tab) =>
        span({
          class: tab === 'browser' ? styles.tabActive : styles.tab,
          style: 'cursor: pointer; padding: 0.75rem 1.5rem;',
          onclick: () => activeApiTab.value = 'browser'
        }, '@scriptdb/browser-client')
      ),
      reactive(activeApiTab, (tab) =>
        span({
          class: tab === 'node' ? styles.tabActive : styles.tab,
          style: 'cursor: pointer; padding: 0.75rem 1.5rem;',
          onclick: () => activeApiTab.value = 'node'
        }, '@scriptdb/client')
      )
    ),

    // Tab content
    div({ class: styles.tabContent },
      reactive(activeApiTab, (tab) => {
        if (tab === 'browser') {
          return BrowserClientApi();
        } else {
          return NodeClientApi();
        }
      })
    )
  );
};

// Browser Client API Documentation
const BrowserClientApi = (): VNode => {
  return div(
    // Installation
    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Installation'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, 'npm install @scriptdb/browser-client')
      ),
      p({ class: styles.pageP }, 'Or use CDN:'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, '<script type="module">\n  import ScriptDBClient from \'https://cdn.jsdelivr.net/npm/@scriptdb/browser-client/+esm\';\n</script>')
      )
    ),

    // Quick Start
    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Quick Start'),
      p({ class: styles.pageP }, 'ScriptDB Browser Client is a WebSocket client for connecting to ScriptDB servers from browser applications.'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, `import ScriptDBClient from '@scriptdb/browser-client';

// Initialize client with connection URI
const client = new ScriptDBClient('scriptdb://localhost:1234');

// Connect to server
await client.connect();

// Run code in a database
const result = await client.run('db.users.find()', 'mydb');
console.log('Query result:', result);

// Disconnect
await client.disconnect();`)
      )
    ),

    // Constructor
    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Constructor'),
      h3({ class: styles.pageH3 }, 'new ScriptDBClient(uri, options?)'),
      p({ class: styles.pageP }, 'Creates a new ScriptDB browser client instance.'),
      h4({ class: styles.pageH3 }, 'Parameters'),
      ul({ class: styles.pageUl },
        li({ class: styles.pageLi },
          strong('uri '), code({ class: styles.pageCode }, 'string'), ' - Connection URI in format ', code({ class: styles.pageCode }, 'scriptdb://host:port/database')),
        li({ class: styles.pageLi },
          strong('options '), code({ class: styles.pageCode }, 'ClientOptions | optional'),
          ul({ class: styles.pageUl },
            li({ class: styles.pageLi }, strong('secure '), code({ class: styles.pageCode }, 'boolean'), ' - Use wss:// if true, ws:// if false (default: ', code({ class: styles.pageCode }, 'true'), ')'),
            li({ class: styles.pageLi }, strong('requestTimeout '), code({ class: styles.pageCode }, 'number'), ' - Request timeout in ms, 0 = disabled (default: ', code({ class: styles.pageCode }, '0'), ')'),
            li({ class: styles.pageLi }, strong('socketTimeout '), code({ class: styles.pageCode }, 'number'), ' - Socket timeout in ms (default: ', code({ class: styles.pageCode }, '0'), ')'),
            li({ class: styles.pageLi }, strong('retries '), code({ class: styles.pageCode }, 'number'), ' - Reconnection retries (default: ', code({ class: styles.pageCode }, '3'), ')'),
            li({ class: styles.pageLi }, strong('retryDelay '), code({ class: styles.pageCode }, 'number'), ' - Initial retry delay in ms (default: ', code({ class: styles.pageCode }, '1000'), ')'),
            li({ class: styles.pageLi }, strong('maxPending '), code({ class: styles.pageCode }, 'number'), ' - Max concurrent requests (default: ', code({ class: styles.pageCode }, '100'), ')'),
            li({ class: styles.pageLi }, strong('maxQueue '), code({ class: styles.pageCode }, 'number'), ' - Max queued requests (default: ', code({ class: styles.pageCode }, '1000'), ')'),
            li({ class: styles.pageLi }, strong('maxMessageSize '), code({ class: styles.pageCode }, 'number'), ' - Max message size in bytes (default: ', code({ class: styles.pageCode }, '5MB'), ')'),
            li({ class: styles.pageLi }, strong('logger '), code({ class: styles.pageCode }, 'Logger'), ' - Custom logger { debug, info, warn, error }'),
            li({ class: styles.pageLi }, strong('username '), code({ class: styles.pageCode }, 'string'), ' - Username for authentication'),
            li({ class: styles.pageLi }, strong('password '), code({ class: styles.pageCode }, 'string'), ' - Password for authentication'),
            li({ class: styles.pageLi }, strong('tokenRefresh '), code({ class: styles.pageCode }, 'function'), ' - Async function to refresh token'),
            li({ class: styles.pageLi }, strong('signing '), code({ class: styles.pageCode }, '{ secret, algorithm }'), ' - HMAC signing configuration'),
            li({ class: styles.pageLi }, strong('stringify '), code({ class: styles.pageCode }, 'function'), ' - Custom JSON stringify function')
          )
        )
      ),
      h4({ class: styles.pageH3 }, 'Returns'),
      ul({ class: styles.pageUl },
        li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'ScriptDBClient'), ' - A new ScriptDB client instance')
      ),
      h4({ class: styles.pageH3 }, 'Example'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, `const client = new ScriptDBClient('scriptdb://localhost:1234/mydb', {\n  secure: false,\n  requestTimeout: 30000,\n  retries: 5,\n  retryDelay: 2000,\n  username: 'admin',\n  password: 'secret'\n});`)
      )
    ),

    // Connection Methods
    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Connection Methods'),
      
      div({ class: styles.section },
        h3({ class: styles.pageH3 }, 'db.connect()'),
        p({ class: styles.pageP }, 'Connects to the ScriptDB server.'),
        h4({ class: styles.pageH3 }, 'Returns'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'Promise<void>'))
        ),
        h4({ class: styles.pageH3 }, 'Example'),
        pre({ class: styles.pagePre },
          code({ class: styles.pageCode }, 'await db.connect();')
        )
      ),

      div({ class: styles.section },
        h3({ class: styles.pageH3 }, 'db.disconnect()'),
        p({ class: styles.pageP }, 'Disconnects from the ScriptDB server.'),
        h4({ class: styles.pageH3 }, 'Returns'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'Promise<void>'))
        ),
        h4({ class: styles.pageH3 }, 'Example'),
        pre({ class: styles.pagePre },
          code({ class: styles.pageCode }, 'await db.disconnect();')
        )
      ),

      div({ class: styles.section },
        h3({ class: styles.pageH3 }, 'db.isConnected'),
        p({ class: styles.pageP }, 'Returns the connection status.'),
        h4({ class: styles.pageH3 }, 'Type'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'boolean'))
        ),
        h4({ class: styles.pageH3 }, 'Example'),
        pre({ class: styles.pagePre },
          code({ class: styles.pageCode }, `if (db.isConnected) {\n  console.log('Connected to server');\n}`)
        )
      )
    ),

    // Scripts API
    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Scripts API'),
      p({ class: styles.pageP }, 'Manage scripts through the ', code({ class: styles.pageCode }, 'db.scripts'), ' interface.'),

      // scripts.add()
      div({ class: styles.section },
        h3({ class: styles.pageH3 }, 'db.scripts.add(script)'),
        p({ class: styles.pageP }, 'Adds a new script to the database.'),
        h4({ class: styles.pageH3 }, 'Parameters'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi },
            strong('script '), code({ class: styles.pageCode }, 'ScriptData'),
            ul({ class: styles.pageUl },
              li({ class: styles.pageLi }, strong('name '), code({ class: styles.pageCode }, 'string'), ' - Script name/identifier'),
              li({ class: styles.pageLi }, strong('content '), code({ class: styles.pageCode }, 'string'), ' - Script content/code'),
              li({ class: styles.pageLi }, strong('description '), code({ class: styles.pageCode }, 'string | optional'), ' - Script description'),
              li({ class: styles.pageLi }, strong('tags '), code({ class: styles.pageCode }, 'string[] | optional'), ' - Array of tags'),
              li({ class: styles.pageLi }, strong('metadata '), code({ class: styles.pageCode }, 'Record<string, any> | optional'), ' - Additional metadata')
            )
          )
        ),
        h4({ class: styles.pageH3 }, 'Returns'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'Promise<Script>'))
        ),
        h4({ class: styles.pageH3 }, 'Example'),
        pre({ class: styles.pagePre },
          code({ class: styles.pageCode }, `const script = await db.scripts.add({
  name: 'deploy.sh',
  content: '#!/bin/bash\\ndeploy-app',
  description: 'Deploy application to production',
  tags: ['deployment', 'production'],
  metadata: {
    author: 'DevOps Team',
    version: '1.0.0'
  }
});`)
        )
      ),

      // scripts.get()
      div({ class: styles.section },
        h3({ class: styles.pageH3 }, 'db.scripts.get(name)'),
        p({ class: styles.pageP }, 'Retrieves a script by name.'),
        h4({ class: styles.pageH3 }, 'Parameters'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, strong('name '), code({ class: styles.pageCode }, 'string'), ' - Script name')
        ),
        h4({ class: styles.pageH3 }, 'Returns'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'Promise<Script | null>'))
        ),
        h4({ class: styles.pageH3 }, 'Example'),
        pre({ class: styles.pagePre },
          code({ class: styles.pageCode }, `const script = await db.scripts.get('deploy.sh');\nif (script) {\n  console.log(script.content);\n}`)
        )
      ),

      // scripts.list()
      div({ class: styles.section },
        h3({ class: styles.pageH3 }, 'db.scripts.list(options?)'),
        p({ class: styles.pageP }, 'Lists all scripts with optional filtering.'),
        h4({ class: styles.pageH3 }, 'Parameters'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi },
            strong('options '), code({ class: styles.pageCode }, 'ListOptions | optional'),
            ul({ class: styles.pageUl },
              li({ class: styles.pageLi }, strong('tag '), code({ class: styles.pageCode }, 'string'), ' - Filter by tag'),
              li({ class: styles.pageLi }, strong('verbose '), code({ class: styles.pageCode }, 'boolean'), ' - Include full details'),
              li({ class: styles.pageLi }, strong('limit '), code({ class: styles.pageCode }, 'number'), ' - Maximum number of results'),
              li({ class: styles.pageLi }, strong('offset '), code({ class: styles.pageCode }, 'number'), ' - Pagination offset')
            )
          )
        ),
        h4({ class: styles.pageH3 }, 'Returns'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'Promise<Script[]>'))
        ),
        h4({ class: styles.pageH3 }, 'Example'),
        pre({ class: styles.pagePre },
          code({ class: styles.pageCode }, `// List all scripts\nconst allScripts = await db.scripts.list();\n\n// Filter by tag\nconst prodScripts = await db.scripts.list({ tag: 'production' });\n\n// Pagination\nconst page = await db.scripts.list({ limit: 10, offset: 20 });`)
        )
      ),

      // scripts.update()
      div({ class: styles.section },
        h3({ class: styles.pageH3 }, 'db.scripts.update(name, updates)'),
        p({ class: styles.pageP }, 'Updates an existing script.'),
        h4({ class: styles.pageH3 }, 'Parameters'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, strong('name '), code({ class: styles.pageCode }, 'string'), ' - Script name'),
          li({ class: styles.pageLi },
            strong('updates '), code({ class: styles.pageCode }, 'Partial<ScriptData>'),
            ul({ class: styles.pageUl },
              li({ class: styles.pageLi }, strong('content '), code({ class: styles.pageCode }, 'string | optional'), ' - Updated content'),
              li({ class: styles.pageLi }, strong('description '), code({ class: styles.pageCode }, 'string | optional'), ' - Updated description'),
              li({ class: styles.pageLi }, strong('tags '), code({ class: styles.pageCode }, 'string[] | optional'), ' - Updated tags'),
              li({ class: styles.pageLi }, strong('metadata '), code({ class: styles.pageCode }, 'Record<string, any> | optional'), ' - Updated metadata')
            )
          )
        ),
        h4({ class: styles.pageH3 }, 'Returns'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'Promise<Script>'))
        ),
        h4({ class: styles.pageH3 }, 'Example'),
        pre({ class: styles.pagePre },
          code({ class: styles.pageCode }, `const updated = await db.scripts.update('deploy.sh', {\n  description: 'Updated deployment script',\n  tags: ['deployment', 'production', 'v2']\n});`)
        )
      ),

      // scripts.remove()
      div({ class: styles.section },
        h3({ class: styles.pageH3 }, 'db.scripts.remove(name)'),
        p({ class: styles.pageP }, 'Removes a script from the database.'),
        h4({ class: styles.pageH3 }, 'Parameters'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, strong('name '), code({ class: styles.pageCode }, 'string'), ' - Script name')
        ),
        h4({ class: styles.pageH3 }, 'Returns'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'Promise<void>'))
        ),
        h4({ class: styles.pageH3 }, 'Example'),
        pre({ class: styles.pagePre },
          code({ class: styles.pageCode }, 'await db.scripts.remove("old-script.sh");')
        )
      ),

      // scripts.run()
      div({ class: styles.section },
        h3({ class: styles.pageH3 }, 'db.scripts.run(name, options?)'),
        p({ class: styles.pageP }, 'Executes a script on the server.'),
        h4({ class: styles.pageH3 }, 'Parameters'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, strong('name '), code({ class: styles.pageCode }, 'string'), ' - Script name'),
          li({ class: styles.pageLi },
            strong('options '), code({ class: styles.pageCode }, 'RunOptions | optional'),
            ul({ class: styles.pageUl },
              li({ class: styles.pageLi }, strong('args '), code({ class: styles.pageCode }, 'string[]'), ' - Command line arguments'),
              li({ class: styles.pageLi }, strong('env '), code({ class: styles.pageCode }, 'Record<string, string>'), ' - Environment variables'),
              li({ class: styles.pageLi }, strong('dryRun '), code({ class: styles.pageCode }, 'boolean'), ' - Preview without executing'),
              li({ class: styles.pageLi }, strong('timeout '), code({ class: styles.pageCode }, 'number'), ' - Execution timeout in ms')
            )
          )
        ),
        h4({ class: styles.pageH3 }, 'Returns'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'Promise<ScriptResult>'))
        ),
        h4({ class: styles.pageH3 }, 'Example'),
        pre({ class: styles.pagePre },
          code({ class: styles.pageCode }, `const result = await db.scripts.run('deploy.sh', {\n  args: ['--env', 'production'],\n  env: { DEPLOY_MODE: 'production' },\n  timeout: 300000\n});\n\nconsole.log('Exit code:', result.exitCode);\nconsole.log('Output:', result.stdout);`)
        )
      ),

      // scripts.history()
      div({ class: styles.section },
        h3({ class: styles.pageH3 }, 'db.scripts.history(name, options?)'),
        p({ class: styles.pageP }, 'Gets execution history for a script.'),
        h4({ class: styles.pageH3 }, 'Parameters'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, strong('name '), code({ class: styles.pageCode }, 'string'), ' - Script name'),
          li({ class: styles.pageLi },
            strong('options '), code({ class: styles.pageCode }, 'HistoryOptions | optional'),
            ul({ class: styles.pageUl },
              li({ class: styles.pageLi }, strong('limit '), code({ class: styles.pageCode }, 'number'), ' - Maximum history entries'),
              li({ class: styles.pageLi }, strong('offset '), code({ class: styles.pageCode }, 'number'), ' - Pagination offset')
            )
          )
        ),
        h4({ class: styles.pageH3 }, 'Returns'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'Promise<ScriptHistory[]>'))
        ),
        h4({ class: styles.pageH3 }, 'Example'),
        pre({ class: styles.pagePre },
          code({ class: styles.pageCode }, `const history = await db.scripts.history('deploy.sh', { limit: 10 });\nhistory.forEach(entry => {\n  console.log(\`\${entry.timestamp}: \${entry.exitCode}\`);\n});`)
        )
      )
    ),

    // Events
    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Events'),
      p({ class: styles.pageP }, 'The browser client emits events that you can listen to.'),

      div({ class: styles.section },
        h3({ class: styles.pageH3 }, 'db.on(event, callback)'),
        p({ class: styles.pageP }, 'Subscribe to client events.'),
        h4({ class: styles.pageH3 }, 'Events'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi },
            strong('connected'), ' - Fired when connected to server',
            pre({ class: styles.pagePre, style: 'margin-top: 0.5rem;' },
              code({ class: styles.pageCode }, 'db.on("connected", () => {\n  console.log("Connected to server");\n});')
            )
          ),
          li({ class: styles.pageLi },
            strong('disconnected'), ' - Fired when disconnected',
            pre({ class: styles.pagePre, style: 'margin-top: 0.5rem;' },
              code({ class: styles.pageCode }, 'db.on("disconnected", () => {\n  console.log("Disconnected from server");\n});')
            )
          ),
          li({ class: styles.pageLi },
            strong('error'), ' - Fired on errors',
            pre({ class: styles.pagePre, style: 'margin-top: 0.5rem;' },
              code({ class: styles.pageCode }, 'db.on("error", (error) => {\n  console.error("Error:", error.message);\n});')
            )
          ),
          li({ class: styles.pageLi },
            strong('script:added'), ' - Fired when a script is added',
            pre({ class: styles.pagePre, style: 'margin-top: 0.5rem;' },
              code({ class: styles.pageCode }, 'db.on("script:added", (script) => {\n  console.log("Script added:", script.name);\n});')
            )
          ),
          li({ class: styles.pageLi },
            strong('script:updated'), ' - Fired when a script is updated',
            pre({ class: styles.pagePre, style: 'margin-top: 0.5rem;' },
              code({ class: styles.pageCode }, 'db.on("script:updated", (script) => {\n  console.log("Script updated:", script.name);\n});')
            )
          ),
          li({ class: styles.pageLi },
            strong('script:removed'), ' - Fired when a script is removed',
            pre({ class: styles.pagePre, style: 'margin-top: 0.5rem;' },
              code({ class: styles.pageCode }, 'db.on("script:removed", (name) => {\n  console.log("Script removed:", name);\n});')
            )
          ),
          li({ class: styles.pageLi },
            strong('script:executed'), ' - Fired when a script finishes execution',
            pre({ class: styles.pagePre, style: 'margin-top: 0.5rem;' },
              code({ class: styles.pageCode }, 'db.on("script:executed", (result) => {\n  console.log("Script executed:", result.name, result.exitCode);\n});')
            )
          )
        ),

        div({ class: styles.section },
          h3({ class: styles.pageH3 }, 'db.off(event, callback)'),
          p({ class: styles.pageP }, 'Unsubscribe from events.'),
          pre({ class: styles.pagePre },
            code({ class: styles.pageCode }, `const handler = () => console.log('Connected');\ndb.on('connected', handler);\n\n// Later\ndb.off('connected', handler);`)
          )
        )
      )
    ),

    // Types
    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Type Definitions'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, `interface ScriptDBOptions {
  serverUrl: string;
  apiKey?: string;
  timeout?: number;
  autoReconnect?: boolean;
  reconnectInterval?: number;
}

interface ScriptData {
  name: string;
  content: string;
  description?: string;
  tags?: string[];
  metadata?: Record<string, any>;
}

interface Script {
  id: string;
  name: string;
  content: string;
  description?: string;
  tags: string[];
  metadata: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

interface ScriptResult {
  name: string;
  exitCode: number;
  stdout: string;
  stderr: string;
  duration: number;
  timestamp: Date;
}

interface ScriptHistory {
  id: string;
  name: string;
  exitCode: number;
  duration: number;
  timestamp: Date;
}

interface ListOptions {
  tag?: string;
  verbose?: boolean;
  limit?: number;
  offset?: number;
}

interface RunOptions {
  args?: string[];
  env?: Record<string, string>;
  dryRun?: boolean;
  timeout?: number;
}

interface HistoryOptions {
  limit?: number;
  offset?: number;
}`)
      )
    )
  );
};

// Node.js Client API Documentation
const NodeClientApi = (): VNode => {
  return div(
    // Installation
    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Installation'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, 'npm install @scriptdb/client')
      )
    ),

    // Quick Start
    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Quick Start'),
      p({ class: styles.pageP }, 'ScriptDB Node.js client for managing scripts from Node.js applications.'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, `import ScriptDBClient from '@scriptdb/client';

async function main() {
  // Initialize client
  const db = new ScriptDBClient('scriptdb://localhost:1234', {
    secure: false         // Use TCP if false, TLS if true
  });

  // Connect to server
  await db.connect();

  // Add a script
  await db.scripts.add({
    name: 'backup.sh',
    content: '#!/bin/bash\\necho "Backing up..."',
    description: 'Daily backup script',
    tags: ['backup', 'daily']
  });

  // List all scripts
  const scripts = await db.scripts.list();
  console.log(scripts);

  // Run a script
  const result = await db.scripts.run('backup.sh');
  console.log('Exit code:', result.exitCode);

  // Use with file paths
  await db.scripts.addFromFile('./my-script.sh', {
    name: 'my-script',
    description: 'Script from file'
  });

  // Disconnect
  await db.disconnect();
}

main().catch(console.error);`)
      )
    ),

    // Constructor
    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Constructor'),
      h3({ class: styles.pageH3 }, 'new ScriptDBClient(uri, options?)'),
      p({ class: styles.pageP }, 'Creates a new ScriptDB Node.js client instance.'),
      h4({ class: styles.pageH3 }, 'Parameters'),
      ul({ class: styles.pageUl },
        li({ class: styles.pageLi },
          strong('uri '), code({ class: styles.pageCode }, 'string'), ' - Connection URI in format ', code({ class: styles.pageCode }, 'scriptdb://host:port/database')),
        li({ class: styles.pageLi },
          strong('options '), code({ class: styles.pageCode }, 'ClientOptions | optional'),
          ul({ class: styles.pageUl },
            li({ class: styles.pageLi }, strong('secure '), code({ class: styles.pageCode }, 'boolean'), ' - Use TLS if true, TCP if false (default: ', code({ class: styles.pageCode }, 'true'), ')'),
            li({ class: styles.pageLi }, strong('requestTimeout '), code({ class: styles.pageCode }, 'number'), ' - Request timeout in ms, 0 = disabled (default: ', code({ class: styles.pageCode }, '0'), ')'),
            li({ class: styles.pageLi }, strong('socketTimeout '), code({ class: styles.pageCode }, 'number'), ' - Socket timeout in ms (default: ', code({ class: styles.pageCode }, '0'), ')'),
            li({ class: styles.pageLi }, strong('retries '), code({ class: styles.pageCode }, 'number'), ' - Reconnection retries (default: ', code({ class: styles.pageCode }, '3'), ')'),
            li({ class: styles.pageLi }, strong('retryDelay '), code({ class: styles.pageCode }, 'number'), ' - Initial retry delay in ms (default: ', code({ class: styles.pageCode }, '1000'), ')'),
            li({ class: styles.pageLi }, strong('maxPending '), code({ class: styles.pageCode }, 'number'), ' - Max concurrent requests (default: ', code({ class: styles.pageCode }, '100'), ')'),
            li({ class: styles.pageLi }, strong('maxQueue '), code({ class: styles.pageCode }, 'number'), ' - Max queued requests (default: ', code({ class: styles.pageCode }, '1000'), ')'),
            li({ class: styles.pageLi }, strong('maxMessageSize '), code({ class: styles.pageCode }, 'number'), ' - Max message size in bytes (default: ', code({ class: styles.pageCode }, '5MB'), ')'),
            li({ class: styles.pageLi }, strong('logger '), code({ class: styles.pageCode }, 'Logger'), ' - Custom logger { debug, info, warn, error }'),
            li({ class: styles.pageLi }, strong('username '), code({ class: styles.pageCode }, 'string'), ' - Username for authentication'),
            li({ class: styles.pageLi }, strong('password '), code({ class: styles.pageCode }, 'string'), ' - Password for authentication'),
            li({ class: styles.pageLi }, strong('tokenRefresh '), code({ class: styles.pageCode }, 'function'), ' - Async function to refresh token'),
            li({ class: styles.pageLi }, strong('signing '), code({ class: styles.pageCode }, '{ secret, algorithm }'), ' - HMAC signing configuration'),
            li({ class: styles.pageLi }, strong('stringify '), code({ class: styles.pageCode }, 'function'), ' - Custom JSON stringify function')
          )
        )
      ),
      h4({ class: styles.pageH3 }, 'Returns'),
      ul({ class: styles.pageUl },
        li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'ScriptDBClient'), ' - A new ScriptDB client instance')
      ),
      h4({ class: styles.pageH3 }, 'Example'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, `const client = new ScriptDBClient('scriptdb://localhost:1234/mydb', {\n  secure: false,\n  requestTimeout: 30000,\n  retries: 5,\n  retryDelay: 2000,\n  username: 'admin',\n  password: 'secret'\n});`)
      )
    ),

    // Connection Methods
    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Connection Methods'),
      
      div({ class: styles.section },
        h3({ class: styles.pageH3 }, 'db.connect()'),
        p({ class: styles.pageP }, 'Connects to the ScriptDB server.'),
        h4({ class: styles.pageH3 }, 'Returns'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'Promise<void>'))
        ),
        h4({ class: styles.pageH3 }, 'Example'),
        pre({ class: styles.pagePre },
          code({ class: styles.pageCode }, 'await db.connect();')
        )
      ),

      div({ class: styles.section },
        h3({ class: styles.pageH3 }, 'db.disconnect()'),
        p({ class: styles.pageP }, 'Disconnects from the ScriptDB server.'),
        h4({ class: styles.pageH3 }, 'Returns'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'Promise<void>'))
        ),
        h4({ class: styles.pageH3 }, 'Example'),
        pre({ class: styles.pagePre },
          code({ class: styles.pageCode }, 'await db.disconnect();')
        )
      ),

      div({ class: styles.section },
        h3({ class: styles.pageH3 }, 'db.isConnected'),
        p({ class: styles.pageP }, 'Returns the connection status.'),
        h4({ class: styles.pageH3 }, 'Type'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'boolean'))
        ),
        h4({ class: styles.pageH3 }, 'Example'),
        pre({ class: styles.pagePre },
          code({ class: styles.pageCode }, `if (db.isConnected) {\n  console.log('Connected to server');\n}`)
        )
      )
    ),

    // Scripts API
    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Scripts API'),
      p({ class: styles.pageP }, 'Manage scripts through the ', code({ class: styles.pageCode }, 'db.scripts'), ' interface.'),

      // scripts.add()
      div({ class: styles.section },
        h3({ class: styles.pageH3 }, 'db.scripts.add(script)'),
        p({ class: styles.pageP }, 'Adds a new script to the database.'),
        h4({ class: styles.pageH3 }, 'Parameters'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi },
            strong('script '), code({ class: styles.pageCode }, 'ScriptData'),
            ul({ class: styles.pageUl },
              li({ class: styles.pageLi }, strong('name '), code({ class: styles.pageCode }, 'string'), ' - Script name/identifier'),
              li({ class: styles.pageLi }, strong('content '), code({ class: styles.pageCode }, 'string'), ' - Script content/code'),
              li({ class: styles.pageLi }, strong('description '), code({ class: styles.pageCode }, 'string | optional'), ' - Script description'),
              li({ class: styles.pageLi }, strong('tags '), code({ class: styles.pageCode }, 'string[] | optional'), ' - Array of tags'),
              li({ class: styles.pageLi }, strong('metadata '), code({ class: styles.pageCode }, 'Record<string, any> | optional'), ' - Additional metadata')
            )
          )
        ),
        h4({ class: styles.pageH3 }, 'Returns'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'Promise<Script>'))
        ),
        h4({ class: styles.pageH3 }, 'Example'),
        pre({ class: styles.pagePre },
          code({ class: styles.pageCode }, `const script = await db.scripts.add({
  name: 'deploy.sh',
  content: '#!/bin/bash\\ndeploy-app',
  description: 'Deploy application to production',
  tags: ['deployment', 'production'],
  metadata: {
    author: 'DevOps Team',
    version: '1.0.0'
  }
});`)
        )
      ),

      // scripts.addFromFile()
      div({ class: styles.section },
        h3({ class: styles.pageH3 }, 'db.scripts.addFromFile(filePath, options?)'),
        p({ class: styles.pageP }, 'Adds a script from a file on the local filesystem (Node.js only).'),
        h4({ class: styles.pageH3 }, 'Parameters'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, strong('filePath '), code({ class: styles.pageCode }, 'string'), ' - Path to script file'),
          li({ class: styles.pageLi },
            strong('options '), code({ class: styles.pageCode }, 'AddFromFileOptions | optional'),
            ul({ class: styles.pageUl },
              li({ class: styles.pageLi }, strong('name '), code({ class: styles.pageCode }, 'string'), ' - Custom script name (default: filename without extension)'),
              li({ class: styles.pageLi }, strong('description '), code({ class: styles.pageCode }, 'string'), ' - Script description'),
              li({ class: styles.pageLi }, strong('tags '), code({ class: styles.pageCode }, 'string[]'), ' - Array of tags'),
              li({ class: styles.pageLi }, strong('metadata '), code({ class: styles.pageCode }, 'Record<string, any>'), ' - Additional metadata')
            )
          )
        ),
        h4({ class: styles.pageH3 }, 'Returns'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'Promise<Script>'))
        ),
        h4({ class: styles.pageH3 }, 'Example'),
        pre({ class: styles.pagePre },
          code({ class: styles.pageCode }, `// Add from file with default options\nconst script = await db.scripts.addFromFile('./scripts/deploy.sh');\n\n// Add with custom options\nconst script = await db.scripts.addFromFile('./scripts/deploy.sh', {\n  name: 'production-deploy',\n  description: 'Production deployment script',\n  tags: ['deployment', 'production'],\n  metadata: { version: '2.0.0' }\n});`)
        )
      ),

      // scripts.get()
      div({ class: styles.section },
        h3({ class: styles.pageH3 }, 'db.scripts.get(name)'),
        p({ class: styles.pageP }, 'Retrieves a script by name.'),
        h4({ class: styles.pageH3 }, 'Parameters'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, strong('name '), code({ class: styles.pageCode }, 'string'), ' - Script name')
        ),
        h4({ class: styles.pageH3 }, 'Returns'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'Promise<Script | null>'))
        ),
        h4({ class: styles.pageH3 }, 'Example'),
        pre({ class: styles.pagePre },
          code({ class: styles.pageCode }, `const script = await db.scripts.get('deploy.sh');\nif (script) {\n  console.log(script.content);\n}`)
        )
      ),

      // scripts.download()
      div({ class: styles.section },
        h3({ class: styles.pageH3 }, 'db.scripts.download(name, destPath)'),
        p({ class: styles.pageP }, 'Downloads a script to a local file (Node.js only).'),
        h4({ class: styles.pageH3 }, 'Parameters'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, strong('name '), code({ class: styles.pageCode }, 'string'), ' - Script name'),
          li({ class: styles.pageLi }, strong('destPath '), code({ class: styles.pageCode }, 'string'), ' - Destination file path')
        ),
        h4({ class: styles.pageH3 }, 'Returns'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'Promise<void>'))
        ),
        h4({ class: styles.pageH3 }, 'Example'),
        pre({ class: styles.pagePre },
          code({ class: styles.pageCode }, 'await db.scripts.download("deploy.sh", "./downloaded/deploy.sh");')
        )
      ),

      // scripts.list()
      div({ class: styles.section },
        h3({ class: styles.pageH3 }, 'db.scripts.list(options?)'),
        p({ class: styles.pageP }, 'Lists all scripts with optional filtering.'),
        h4({ class: styles.pageH3 }, 'Parameters'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi },
            strong('options '), code({ class: styles.pageCode }, 'ListOptions | optional'),
            ul({ class: styles.pageUl },
              li({ class: styles.pageLi }, strong('tag '), code({ class: styles.pageCode }, 'string'), ' - Filter by tag'),
              li({ class: styles.pageLi }, strong('verbose '), code({ class: styles.pageCode }, 'boolean'), ' - Include full details'),
              li({ class: styles.pageLi }, strong('limit '), code({ class: styles.pageCode }, 'number'), ' - Maximum number of results'),
              li({ class: styles.pageLi }, strong('offset '), code({ class: styles.pageCode }, 'number'), ' - Pagination offset')
            )
          )
        ),
        h4({ class: styles.pageH3 }, 'Returns'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'Promise<Script[]>'))
        ),
        h4({ class: styles.pageH3 }, 'Example'),
        pre({ class: styles.pagePre },
          code({ class: styles.pageCode }, `// List all scripts\nconst allScripts = await db.scripts.list();\n\n// Filter by tag\nconst prodScripts = await db.scripts.list({ tag: 'production' });\n\n// Pagination\nconst page = await db.scripts.list({ limit: 10, offset: 20 });`)
        )
      ),

      // scripts.update()
      div({ class: styles.section },
        h3({ class: styles.pageH3 }, 'db.scripts.update(name, updates)'),
        p({ class: styles.pageP }, 'Updates an existing script.'),
        h4({ class: styles.pageH3 }, 'Parameters'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, strong('name '), code({ class: styles.pageCode }, 'string'), ' - Script name'),
          li({ class: styles.pageLi },
            strong('updates '), code({ class: styles.pageCode }, 'Partial<ScriptData>'),
            ul({ class: styles.pageUl },
              li({ class: styles.pageLi }, strong('content '), code({ class: styles.pageCode }, 'string | optional'), ' - Updated content'),
              li({ class: styles.pageLi }, strong('description '), code({ class: styles.pageCode }, 'string | optional'), ' - Updated description'),
              li({ class: styles.pageLi }, strong('tags '), code({ class: styles.pageCode }, 'string[] | optional'), ' - Updated tags'),
              li({ class: styles.pageLi }, strong('metadata '), code({ class: styles.pageCode }, 'Record<string, any> | optional'), ' - Updated metadata')
            )
          )
        ),
        h4({ class: styles.pageH3 }, 'Returns'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'Promise<Script>'))
        ),
        h4({ class: styles.pageH3 }, 'Example'),
        pre({ class: styles.pagePre },
          code({ class: styles.pageCode }, `const updated = await db.scripts.update('deploy.sh', {\n  description: 'Updated deployment script',\n  tags: ['deployment', 'production', 'v2']\n});`)
        )
      ),

      // scripts.remove()
      div({ class: styles.section },
        h3({ class: styles.pageH3 }, 'db.scripts.remove(name)'),
        p({ class: styles.pageP }, 'Removes a script from the database.'),
        h4({ class: styles.pageH3 }, 'Parameters'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, strong('name '), code({ class: styles.pageCode }, 'string'), ' - Script name')
        ),
        h4({ class: styles.pageH3 }, 'Returns'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'Promise<void>'))
        ),
        h4({ class: styles.pageH3 }, 'Example'),
        pre({ class: styles.pagePre },
          code({ class: styles.pageCode }, 'await db.scripts.remove("old-script.sh");')
        )
      ),

      // scripts.run()
      div({ class: styles.section },
        h3({ class: styles.pageH3 }, 'db.scripts.run(name, options?)'),
        p({ class: styles.pageP }, 'Executes a script on the server.'),
        h4({ class: styles.pageH3 }, 'Parameters'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, strong('name '), code({ class: styles.pageCode }, 'string'), ' - Script name'),
          li({ class: styles.pageLi },
            strong('options '), code({ class: styles.pageCode }, 'RunOptions | optional'),
            ul({ class: styles.pageUl },
              li({ class: styles.pageLi }, strong('args '), code({ class: styles.pageCode }, 'string[]'), ' - Command line arguments'),
              li({ class: styles.pageLi }, strong('env '), code({ class: styles.pageCode }, 'Record<string, string>'), ' - Environment variables'),
              li({ class: styles.pageLi }, strong('dryRun '), code({ class: styles.pageCode }, 'boolean'), ' - Preview without executing'),
              li({ class: styles.pageLi }, strong('timeout '), code({ class: styles.pageCode }, 'number'), ' - Execution timeout in ms'),
              li({ class: styles.pageLi }, strong('stdin '), code({ class: styles.pageCode }, 'string'), ' - Input to pass to stdin (Node.js only)')
            )
          )
        ),
        h4({ class: styles.pageH3 }, 'Returns'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'Promise<ScriptResult>'))
        ),
        h4({ class: styles.pageH3 }, 'Example'),
        pre({ class: styles.pagePre },
          code({ class: styles.pageCode }, `const result = await db.scripts.run('deploy.sh', {\n  args: ['--env', 'production'],\n  env: { DEPLOY_MODE: 'production' },\n  timeout: 300000\n});\n\nconsole.log('Exit code:', result.exitCode);\nconsole.log('Output:', result.stdout);`)
        )
      ),

      // scripts.runLocal()
      div({ class: styles.section },
        h3({ class: styles.pageH3 }, 'db.scripts.runLocal(scriptPath, options?)'),
        p({ class: styles.pageP }, 'Runs a script locally on the current machine (Node.js only).'),
        h4({ class: styles.pageH3 }, 'Parameters'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, strong('scriptPath '), code({ class: styles.pageCode }, 'string'), ' - Path to script file'),
          li({ class: styles.pageLi },
            strong('options '), code({ class: styles.pageCode }, 'RunLocalOptions | optional'),
            ul({ class: styles.pageUl },
              li({ class: styles.pageLi }, strong('args '), code({ class: styles.pageCode }, 'string[]'), ' - Command line arguments'),
              li({ class: styles.pageLi }, strong('env '), code({ class: styles.pageCode }, 'Record<string, string>'), ' - Environment variables'),
              li({ class: styles.pageLi }, strong('cwd '), code({ class: styles.pageCode }, 'string'), ' - Working directory'),
              li({ class: styles.pageLi }, strong('timeout '), code({ class: styles.pageCode }, 'number'), ' - Execution timeout in ms')
            )
          )
        ),
        h4({ class: styles.pageH3 }, 'Returns'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'Promise<ScriptResult>'))
        ),
        h4({ class: styles.pageH3 }, 'Example'),
        pre({ class: styles.pagePre },
          code({ class: styles.pageCode }, `const result = await db.scripts.runLocal('./scripts/deploy.sh', {\n  args: ['--env', 'staging'],\n  env: { NODE_ENV: 'staging' },\n  cwd: './project'\n});`)
        )
      ),

      // scripts.history()
      div({ class: styles.section },
        h3({ class: styles.pageH3 }, 'db.scripts.history(name, options?)'),
        p({ class: styles.pageP }, 'Gets execution history for a script.'),
        h4({ class: styles.pageH3 }, 'Parameters'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, strong('name '), code({ class: styles.pageCode }, 'string'), ' - Script name'),
          li({ class: styles.pageLi },
            strong('options '), code({ class: styles.pageCode }, 'HistoryOptions | optional'),
            ul({ class: styles.pageUl },
              li({ class: styles.pageLi }, strong('limit '), code({ class: styles.pageCode }, 'number'), ' - Maximum history entries'),
              li({ class: styles.pageLi }, strong('offset '), code({ class: styles.pageCode }, 'number'), ' - Pagination offset')
            )
          )
        ),
        h4({ class: styles.pageH3 }, 'Returns'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'Promise<ScriptHistory[]>'))
        ),
        h4({ class: styles.pageH3 }, 'Example'),
        pre({ class: styles.pagePre },
          code({ class: styles.pageCode }, `const history = await db.scripts.history('deploy.sh', { limit: 10 });\nhistory.forEach(entry => {\n  console.log(\`\${entry.timestamp}: \${entry.exitCode}\`);\n});`)
        )
      ),

      // scripts.watch()
      div({ class: styles.section },
        h3({ class: styles.pageH3 }, 'db.scripts.watch(dirPath, options?)'),
        p({ class: styles.pageP }, 'Watches a directory for file changes and auto-syncs scripts (Node.js only).'),
        h4({ class: styles.pageH3 }, 'Parameters'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, strong('dirPath '), code({ class: styles.pageCode }, 'string'), ' - Directory path to watch'),
          li({ class: styles.pageLi },
            strong('options '), code({ class: styles.pageCode }, 'WatchOptions | optional'),
            ul({ class: styles.pageUl },
              li({ class: styles.pageLi }, strong('pattern '), code({ class: styles.pageCode }, 'string'), ' - Glob pattern to match files (default: ', code({ class: styles.pageCode }, '**/*'), ')'),
              li({ class: styles.pageLi }, strong('ignore '), code({ class: styles.pageCode }, 'string[]'), ' - Patterns to ignore'),
              li({ class: styles.pageLi }, strong('onAdd '), code({ class: styles.pageCode }, '(file: string) => Promise<void>'), ' - Callback when file is added'),
              li({ class: styles.pageLi }, strong('onChange '), code({ class: styles.pageCode }, '(file: string) => Promise<void>'), ' - Callback when file is changed'),
              li({ class: styles.pageLi }, strong('onRemove '), code({ class: styles.pageCode }, '(file: string) => Promise<void>'), ' - Callback when file is removed')
            )
          )
        ),
        h4({ class: styles.pageH3 }, 'Returns'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'Promise<FSWatcher>'))
        ),
        h4({ class: styles.pageH3 }, 'Example'),
        pre({ class: styles.pagePre },
          code({ class: styles.pageCode }, `const watcher = await db.scripts.watch('./scripts', {\n  pattern: '**/*.sh',\n  ignore: ['**/*.test.sh'],\n  onAdd: async (file) => {\n    await db.scripts.addFromFile(file);\n    console.log('Added:', file);\n  },\n  onChange: async (file) => {\n    const name = path.basename(file, '.sh');\n    await db.scripts.update(name, { content: await fs.readFile(file, 'utf-8') });\n  },\n  onRemove: async (file) => {\n    const name = path.basename(file, '.sh');\n    await db.scripts.remove(name);\n  }\n});\n\n// Stop watching\nwatcher.close();`)
        )
      )
    ),

    // Batch Operations
    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Batch Operations'),
      
      div({ class: styles.section },
        h3({ class: styles.pageH3 }, 'db.scripts.batchAdd(scripts)'),
        p({ class: styles.pageP }, 'Adds multiple scripts in a single batch operation.'),
        h4({ class: styles.pageH3 }, 'Parameters'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, strong('scripts '), code({ class: styles.pageCode }, 'ScriptData[]'), ' - Array of scripts to add')
        ),
        h4({ class: styles.pageH3 }, 'Returns'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'Promise<Script[]>'))
        ),
        h4({ class: styles.pageH3 }, 'Example'),
        pre({ class: styles.pagePre },
          code({ class: styles.pageCode }, `const scripts = await db.scripts.batchAdd([\n  { name: 'script1.sh', content: '#!/bin/bash\\necho "1"' },\n  { name: 'script2.sh', content: '#!/bin/bash\\necho "2"' },\n  { name: 'script3.sh', content: '#!/bin/bash\\necho "3"' }\n]);`)
        )
      ),

      div({ class: styles.section },
        h3({ class: styles.pageH3 }, 'db.scripts.batchRemove(names)'),
        p({ class: styles.pageP }, 'Removes multiple scripts in a single batch operation.'),
        h4({ class: styles.pageH3 }, 'Parameters'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, strong('names '), code({ class: styles.pageCode }, 'string[]'), ' - Array of script names to remove')
        ),
        h4({ class: styles.pageH3 }, 'Returns'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'Promise<void>'))
        ),
        h4({ class: styles.pageH3 }, 'Example'),
        pre({ class: styles.pagePre },
          code({ class: styles.pageCode }, 'await db.scripts.batchRemove(["script1.sh", "script2.sh", "script3.sh"]);')
        )
      )
    ),

    // Server Management
    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Server Management (Node.js Only)'),
      
      div({ class: styles.section },
        h3({ class: styles.pageH3 }, 'db.server.start(options?)'),
        p({ class: styles.pageP }, 'Starts a local ScriptDB server.'),
        h4({ class: styles.pageH3 }, 'Parameters'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi },
            strong('options '), code({ class: styles.pageCode }, 'ServerOptions | optional'),
            ul({ class: styles.pageUl },
              li({ class: styles.pageLi }, strong('port '), code({ class: styles.pageCode }, 'number'), ' - Server port (default: ', code({ class: styles.pageCode }, '8080'), ')'),
              li({ class: styles.pageLi }, strong('host '), code({ class: styles.pageCode }, 'string'), ' - Server host (default: ', code({ class: styles.pageCode }, "'0.0.0.0'"), ')'),
              li({ class: styles.pageLi }, strong('dataDir '), code({ class: styles.pageCode }, 'string'), ' - Data directory path'),
              li({ class: styles.pageLi }, strong('logLevel '), code({ class: styles.pageCode }, "'debug' | 'info' | 'warn' | 'error'"), ' - Log level')
            )
          )
        ),
        h4({ class: styles.pageH3 }, 'Returns'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'Promise<ServerProcess>'))
        ),
        h4({ class: styles.pageH3 }, 'Example'),
        pre({ class: styles.pagePre },
          code({ class: styles.pageCode }, `const server = await db.server.start({\n  port: 8080,\n  dataDir: './data',\n  logLevel: 'debug'\n});\n\n// Stop server\nawait server.stop();`)
        )
      ),

      div({ class: styles.section },
        h3({ class: styles.pageH3 }, 'db.server.stop()'),
        p({ class: styles.pageP }, 'Stops the local ScriptDB server.'),
        h4({ class: styles.pageH3 }, 'Returns'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'Promise<void>'))
        ),
        h4({ class: styles.pageH3 }, 'Example'),
        pre({ class: styles.pagePre },
          code({ class: styles.pageCode }, 'await db.server.stop();')
        )
      ),

      div({ class: styles.section },
        h3({ class: styles.pageH3 }, 'db.server.status()'),
        p({ class: styles.pageP }, 'Gets the status of the local ScriptDB server.'),
        h4({ class: styles.pageH3 }, 'Returns'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'Promise<ServerStatus>'))
        ),
        h4({ class: styles.pageH3 }, 'Example'),
        pre({ class: styles.pagePre },
          code({ class: styles.pageCode }, `const status = await db.server.status();\nconsole.log('Server running:', status.running);\nconsole.log('PID:', status.pid);\nconsole.log('Uptime:', status.uptime);`)
        )
      )
    ),

    // Events
    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Events'),
      p({ class: styles.pageP }, 'The Node.js client uses Node.js EventEmitter and emits events.'),

      div({ class: styles.section },
        h3({ class: styles.pageH3 }, 'db.on(event, callback)'),
        p({ class: styles.pageP }, 'Subscribe to client events.'),
        h4({ class: styles.pageH3 }, 'Events'),
        ul({ class: styles.pageUl },
          li({ class: styles.pageLi },
            strong('connected'), ' - Fired when connected to server',
            pre({ class: styles.pagePre, style: 'margin-top: 0.5rem;' },
              code({ class: styles.pageCode }, 'db.on("connected", () => {\n  console.log("Connected to server");\n});')
            )
          ),
          li({ class: styles.pageLi },
            strong('disconnected'), ' - Fired when disconnected',
            pre({ class: styles.pagePre, style: 'margin-top: 0.5rem;' },
              code({ class: styles.pageCode }, 'db.on("disconnected", () => {\n  console.log("Disconnected from server");\n});')
            )
          ),
          li({ class: styles.pageLi },
            strong('error'), ' - Fired on errors',
            pre({ class: styles.pagePre, style: 'margin-top: 0.5rem;' },
              code({ class: styles.pageCode }, 'db.on("error", (error) => {\n  console.error("Error:", error.message);\n});')
            )
          ),
          li({ class: styles.pageLi },
            strong('reconnecting'), ' - Fired when attempting to reconnect',
            pre({ class: styles.pagePre, style: 'margin-top: 0.5rem;' },
              code({ class: styles.pageCode }, 'db.on("reconnecting", (attempt) => {\n  console.log(\`Reconnecting... attempt \${attempt}\`);\n});')
            )
          ),
          li({ class: styles.pageLi },
            strong('script:added'), ' - Fired when a script is added',
            pre({ class: styles.pagePre, style: 'margin-top: 0.5rem;' },
              code({ class: styles.pageCode }, 'db.on("script:added", (script) => {\n  console.log("Script added:", script.name);\n});')
            )
          ),
          li({ class: styles.pageLi },
            strong('script:updated'), ' - Fired when a script is updated',
            pre({ class: styles.pagePre, style: 'margin-top: 0.5rem;' },
              code({ class: styles.pageCode }, 'db.on("script:updated", (script) => {\n  console.log("Script updated:", script.name);\n});')
            )
          ),
          li({ class: styles.pageLi },
            strong('script:removed'), ' - Fired when a script is removed',
            pre({ class: styles.pagePre, style: 'margin-top: 0.5rem;' },
              code({ class: styles.pageCode }, 'db.on("script:removed", (name) => {\n  console.log("Script removed:", name);\n});')
            )
          ),
          li({ class: styles.pageLi },
            strong('script:executed'), ' - Fired when a script finishes execution',
            pre({ class: styles.pagePre, style: 'margin-top: 0.5rem;' },
              code({ class: styles.pageCode }, 'db.on("script:executed", (result) => {\n  console.log("Script executed:", result.name, result.exitCode);\n});')
            )
          )
        ),

        div({ class: styles.section },
          h3({ class: styles.pageH3 }, 'db.off(event, callback)'),
          p({ class: styles.pageP }, 'Unsubscribe from events.'),
          pre({ class: styles.pagePre },
            code({ class: styles.pageCode }, `const handler = () => console.log('Connected');\ndb.on('connected', handler);\n\n// Later\ndb.off('connected', handler);`)
          )
        ),

        div({ class: styles.section },
          h3({ class: styles.pageH3 }, 'db.once(event, callback)'),
          p({ class: styles.pageP }, 'Subscribe to event one time only (Node.js only).'),
          pre({ class: styles.pagePre },
            code({ class: styles.pageCode }, `db.once('connected', () => {\n  console.log('Connected! This will only fire once.');\n});`)
          )
        )
      )
    ),

    // Error Handling
    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Error Handling'),
      p({ class: styles.pageP }, 'The client provides detailed error information.'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, `try {\n  const script = await db.scripts.get('nonexistent.sh');\n} catch (error) {\n  if (error.code === 'SCRIPT_NOT_FOUND') {\n    console.log('Script does not exist');\n  } else if (error.code === 'CONNECTION_ERROR') {\n    console.log('Cannot connect to server');\n  } else if (error.code === 'AUTH_ERROR') {\n    console.log('Invalid API key');\n  } else {\n    console.error('Unexpected error:', error.message);\n  }\n}`)
      )
    ),

    // Types
    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Type Definitions'),
      pre({ class: styles.pagePre },
        code({ class: styles.pageCode }, `interface ScriptDBOptions {
  serverUrl: string;
  apiKey?: string;
  timeout?: number;
  maxRetries?: number;
  retryDelay?: number;
  persistPath?: string;
  logLevel?: 'debug' | 'info' | 'warn' | 'error';
}

interface ScriptData {
  name: string;
  content: string;
  description?: string;
  tags?: string[];
  metadata?: Record<string, any>;
}

interface Script {
  id: string;
  name: string;
  content: string;
  description?: string;
  tags: string[];
  metadata: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

interface ScriptResult {
  name: string;
  exitCode: number;
  stdout: string;
  stderr: string;
  duration: number;
  timestamp: Date;
}

interface ScriptHistory {
  id: string;
  name: string;
  exitCode: number;
  duration: number;
  timestamp: Date;
}

interface AddFromFileOptions {
  name?: string;
  description?: string;
  tags?: string[];
  metadata?: Record<string, any>;
}

interface RunLocalOptions {
  args?: string[];
  env?: Record<string, string>;
  cwd?: string;
  timeout?: number;
}

interface WatchOptions {
  pattern?: string;
  ignore?: string[];
  onAdd?: (file: string) => Promise<void>;
  onChange?: (file: string) => Promise<void>;
  onRemove?: (file: string) => Promise<void>;
}

interface ListOptions {
  tag?: string;
  verbose?: boolean;
  limit?: number;
  offset?: number;
}

interface RunOptions {
  args?: string[];
  env?: Record<string, string>;
  dryRun?: boolean;
  timeout?: number;
  stdin?: string;
}

interface HistoryOptions {
  limit?: number;
  offset?: number;
}

interface ServerOptions {
  port?: number;
  host?: string;
  dataDir?: string;
  logLevel?: 'debug' | 'info' | 'warn' | 'error';
}

interface ServerStatus {
  running: boolean;
  pid?: number;
  uptime?: number;
  port?: number;
}

interface ServerProcess {
  stop(): Promise<void>;
  status(): Promise<ServerStatus>;
}

// Error Codes
type ErrorCode = 
  | 'SCRIPT_NOT_FOUND'
  | 'CONNECTION_ERROR'
  | 'AUTH_ERROR'
  | 'TIMEOUT'
  | 'VALIDATION_ERROR'
  | 'SERVER_ERROR';

class ScriptDBError extends Error {
  code: ErrorCode;
  details?: any;
}`)
      )
    )
  );
};
