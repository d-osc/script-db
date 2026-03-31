import { a, button, code, div, h1, h2, h3, li, p, span, ul } from 'elit/el';
import type { VNode } from 'elit';
import { createState, reactive } from 'elit/state';
import { CodeBlock } from '../components/CodeBlock';
import {
  authExample,
  browserConstructorExample,
  browserExecuteExample,
  browserQuickStartExample,
  externalLinks,
  nodeConstructorExample,
  nodeExecuteExample,
  nodeQuickStartExample,
  signingExample
} from '../content';
import { styles } from '../styleNames';

const externalLink = (href: string, label: string): VNode => {
  return a({ href, class: styles.inlineLink, target: '_blank', rel: 'noopener noreferrer' }, label);
};

const methodItem = (signature: string, description: string): VNode => {
  return li({ class: styles.pageLi },
    code({ class: styles.pageCode }, signature),
    ' - ',
    description
  );
};

const methodCard = (title: string, description: string, items: VNode[]): VNode => {
  return div({ class: styles.card },
    h3({ class: styles.cardTitle }, title),
    p({ class: styles.pageP }, description),
    ul({ class: styles.pageUl }, ...items)
  );
};

export const ApiPage = (): VNode => {
  const activeApiTab = createState<'browser' | 'node'>('browser');

  return div(
    div({ class: styles.pageHero },
      div({ class: styles.badgeRow },
        span({ class: styles.badge }, 'API reference'),
        span({ class: styles.badge }, '@scriptdb/browser-client 1.1.3'),
        span({ class: styles.badge }, '@scriptdb/client 1.1.3')
      ),
      p({ class: styles.heroEyebrow }, 'API'),
      h1({ class: styles.pageH1 }, 'Client reference based on the current source, not the old placeholder docs.'),
      p({ class: styles.pageLead }, 'The previous API page described a different product. This version is narrowed to the public surfaces exposed today by `packages/browser-client/src/index.ts` and `packages/client/src/index.ts` in the ScriptDB monorepo.'),
      div({ class: styles.heroActions },
        externalLink(externalLinks.browserClient, 'Browser Package'),
        externalLink(externalLinks.nodeClient, 'Node Package'),
        externalLink(externalLinks.repository, 'Monorepo')
      )
    ),

    div({ class: styles.tabs },
      reactive(activeApiTab, (tab) =>
        button({
          class: tab === 'browser' ? styles.tabActive : styles.tab,
          onclick: () => activeApiTab.value = 'browser'
        }, '@scriptdb/browser-client')
      ),
      reactive(activeApiTab, (tab) =>
        button({
          class: tab === 'node' ? styles.tabActive : styles.tab,
          onclick: () => activeApiTab.value = 'node'
        }, '@scriptdb/client')
      )
    ),

    div({ class: styles.tabContent },
      reactive(activeApiTab, (tab) => tab === 'browser' ? BrowserClientApi() : NodeClientApi())
    )
  );
};

const BrowserClientApi = (): VNode => {
  return div(
    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Browser Client'),
      h2({ class: styles.pageH2 }, 'The browser client uses an options object and talks to the proxy on port + 1.'),
      p({ class: styles.pageLead }, 'The current source exports `BrowserClient` and a default export. Unlike the older placeholder docs, the constructor in source takes a configuration object with `host`, `port`, `username`, `password`, `requestTimeout`, `secure`, and an optional logger.'),
      div({ class: styles.splitGrid },
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Install'),
          CodeBlock('npm install @scriptdb/browser-client'),
          p({ class: styles.pageP }, 'Package: ', externalLink(externalLinks.browserClient, '@scriptdb/browser-client'))
        ),
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Constructor'),
          p({ class: styles.pageP }, 'The source currently builds the WebSocket endpoint from `host` and `port`, then connects to the proxy on `port + 1`.'),
          CodeBlock(browserConstructorExample)
        )
      )
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Public Surface'),
      h2({ class: styles.pageH2 }, 'The main browser methods are small and focused.'),
      p({ class: styles.pageLead }, 'The browser client stays intentionally lean: connect, authenticate, manage databases, run code, and fall back to raw actions when needed.'),
      div({ class: styles.features },
        methodCard('Connection and auth', 'Use these to establish or inspect the browser session.', [
          methodItem('connected', 'Getter that reports whether the WebSocket session is currently open.'),
          methodItem('connect()', 'Opens the WebSocket connection and sends the login request.'),
          methodItem('login(username, password)', 'Authenticates explicitly after construction if needed.'),
          methodItem('logout()', 'Ends the authenticated session on the server side.'),
          methodItem('disconnect() / close()', 'Close the browser connection and reject pending requests.')
        ]),
        methodCard('Database lifecycle', 'These methods manipulate named databases on the server.', [
          methodItem('listDatabases()', 'Fetches the available database names from the server.'),
          methodItem('createDatabase(name)', 'Creates a new database context.'),
          methodItem('removeDatabase(name)', 'Deletes a database from the server.'),
          methodItem('renameDatabase(oldName, newName)', 'Renames an existing database.'),
          methodItem('getDatabase(name)', 'Fetches the stored content for a database.'),
          methodItem('updateDatabase(databaseName, data)', 'Sends metadata updates for a database.')
        ]),
        methodCard('Execution and persistence', 'This is the high-level workflow most browser apps will use.', [
          methodItem('run(code, databaseName)', 'Executes TypeScript or JavaScript in the named database.'),
          methodItem('saveDatabase(databaseName, code?)', 'Persists the current database state to disk, optionally with code.'),
          methodItem('getInfo()', 'Retrieves server metadata and status information.'),
          methodItem('executeShell(command)', 'Sends a shell command request through the server interface.')
        ]),
        methodCard('Low-level actions', 'Drop down to raw actions when you need to send a custom payload.', [
          methodItem('execute({ action, data })', 'Sends a raw action payload like `script-code`, `save-db`, or `get-info`.'),
          methodItem('sendRequest(action, data)', 'Convenience wrapper that forwards to the raw execute path.'),
          methodItem('requestTimeout', 'Configured in the constructor and enforced per in-flight request.')
        ])
      )
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Examples'),
      h2({ class: styles.pageH2 }, 'Use the high-level API first, then drop to raw actions only when necessary.'),
      div({ class: styles.splitGrid },
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Quick start'),
          CodeBlock(browserQuickStartExample)
        ),
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Raw execute'),
          CodeBlock(browserExecuteExample)
        )
      )
    ),

    div({ class: styles.note },
      'Source note: this client currently documents a constructor that takes an options object rather than a URI string. That difference is intentional here because the page follows the source implementation.'
    )
  );
};

const NodeClientApi = (): VNode => {
  return div(
    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Node Client'),
      h2({ class: styles.pageH2 }, 'The Node client is the richer transport surface for services and automation.'),
      p({ class: styles.pageLead }, 'The current source exports `ScriptDBClient` with a `scriptdb://` connection URI plus an options object for TLS, retries, message framing, queue limits, signing, logging, and credential handling.'),
      div({ class: styles.splitGrid },
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Install'),
          CodeBlock('npm install @scriptdb/client'),
          p({ class: styles.pageP }, 'Package: ', externalLink(externalLinks.nodeClient, '@scriptdb/client'))
        ),
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Constructor'),
          p({ class: styles.pageP }, 'The URI selects host, port, and optional database. Credentials can be passed in the URI or, preferably, in the options object.'),
          CodeBlock(nodeConstructorExample)
        )
      )
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Public Surface'),
      h2({ class: styles.pageH2 }, 'The Node client adds queueing, retries, TLS, and lifecycle controls.'),
      p({ class: styles.pageLead }, 'Use this client when the caller runs in Node, Bun, or a server-side automation context and you want the most control over transport behavior.'),
      div({ class: styles.features },
        methodCard('Connection lifecycle', 'These methods control the socket and the client lifecycle.', [
          methodItem('connected', 'Getter that reports the current TCP or TLS connection state.'),
          methodItem('connect()', 'Connects, authenticates, and resolves once the session is ready.'),
          methodItem('disconnect() / close()', 'Gracefully ends the current socket.'),
          methodItem('destroy()', 'Destroys the client, clears timers, and rejects queued work.')
        ]),
        methodCard('Database lifecycle', 'The high-level database operations mirror the browser client where possible.', [
          methodItem('listDatabases()', 'Fetches the list of available databases.'),
          methodItem('createDatabase(name)', 'Creates a named database on the server.'),
          methodItem('removeDatabase(name)', 'Deletes a named database.'),
          methodItem('renameDatabase(oldName, newName)', 'Renames a database.'),
          methodItem('updateDatabase(databaseName, data)', 'Updates stored metadata for the database.')
        ]),
        methodCard('Execution and server actions', 'This is the main path for real application code.', [
          methodItem('run(code, databaseName)', 'Executes TypeScript or JavaScript in the selected database.'),
          methodItem('saveDatabase(databaseName, code?)', 'Persists the database to disk.'),
          methodItem('getInfo()', 'Returns server information.'),
          methodItem('executeShell(command)', 'Sends a shell command request to the server.')
        ]),
        methodCard('Transport options', 'These settings are the reason to prefer the Node client for back-end workflows.', [
          methodItem('secure / tlsOptions', 'Enable TLS and pass through Node TLS connection options.'),
          methodItem('retries / retryDelay', 'Control reconnection behavior.'),
          methodItem('frame / preferLengthPrefix', 'Choose NDJSON or length-prefixed framing.'),
          methodItem('maxPending / maxQueue / maxMessageSize', 'Control request queueing and message limits.'),
          methodItem('signing / tokenRefresh', 'Enable message signing and token refresh strategies.')
        ])
      )
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Examples'),
      h2({ class: styles.pageH2 }, 'A normal workflow uses high-level methods, with raw execute only for special cases.'),
      div({ class: styles.splitGrid },
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Quick start'),
          CodeBlock(nodeQuickStartExample)
        ),
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Raw execute'),
          CodeBlock(nodeExecuteExample)
        )
      )
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Security Options'),
      h2({ class: styles.pageH2 }, 'Authentication is basic by default, but the Node client exposes stronger controls.'),
      div({ class: styles.splitGrid },
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Explicit credentials'),
          CodeBlock(authExample)
        ),
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'HMAC signing'),
          CodeBlock(signingExample)
        )
      )
    ),

    div({ class: styles.note },
      'Both clients understand the same core actions like `script-code`, `list-dbs`, `create-db`, `save-db`, and `get-info`, but the Node client is the better fit when you need retries, TLS, framing control, or request queue tuning.'
    )
  );
};