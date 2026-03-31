import { a, button, div, h1, h2, h3, p, span } from 'elit/el';
import type { VNode } from 'elit';
import { createState, reactive } from 'elit/state';
import { CodeBlock } from '../components/CodeBlock';
import {
  browserQuickStartExample,
  installCommands,
  nodeQuickStartExample,
  serverStartCommands,
  shellSessionExample
} from '../content';
import { styles } from '../styleNames';

const stepCard = (step: string, title: string, description: string): VNode => {
  return div({ class: styles.stepCard },
    span({ class: styles.stepNumber }, step),
    h3({ class: styles.cardTitle }, title),
    p({ class: styles.pageP }, description)
  );
};

export const QuickStartPage = (): VNode => {
  const activeClient = createState<'browser' | 'node'>('browser');

  return div(
    div({ class: styles.pageHero },
      div({ class: styles.badgeRow },
        span({ class: styles.badge }, '5 steps'),
        span({ class: styles.badge }, 'CLI workflow'),
        span({ class: styles.badge }, 'Browser and Node examples')
      ),
      p({ class: styles.heroEyebrow }, 'Quick Start'),
      h1({ class: styles.pageH1 }, 'Get a ScriptDB server running and execute your first database code path.'),
      p({ class: styles.pageLead }, 'This page is the shortest path from a clean machine to a running server, a created database, and a client that can execute TypeScript or JavaScript against it.'),
      div({ class: styles.heroActions },
        a({ href: '#/installation', class: styles.buttonPrimary }, 'Installation Options'),
        a({ href: '#/api', class: styles.buttonSecondary }, 'Client API')
      )
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Workflow'),
      h2({ class: styles.pageH2 }, 'A complete first run in five small steps.'),
      div({ class: styles.stepGrid },
        stepCard('1', 'Install the CLI', 'Install @scriptdb/cli globally or use the release install scripts if you want a direct binary.'),
        stepCard('2', 'Start the server', 'Bring ScriptDB up in the foreground or daemonize it with PM2 depending on the environment.'),
        stepCard('3', 'Connect a client', 'Pick the browser client for web apps or the Node client for services and scripts.'),
        stepCard('4', 'Create a database', 'Create a database and run code that exports functions or values you want ScriptDB to store.'),
        stepCard('5', 'Inspect and persist', 'Use the shell, status, logs, and save operations to verify the result and keep it around.')
      )
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Install And Start'),
      h2({ class: styles.pageH2 }, 'Install the CLI, then boot the server.'),
      p({ class: styles.pageLead }, 'If you already have Node or Bun, install the CLI package. If not, the repository also publishes direct binary install scripts for Windows, Linux, and macOS.'),
      div({ class: styles.splitGrid },
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Install command'),
          CodeBlock(`${installCommands.npmGlobal}\n${installCommands.bunGlobal}\n\n${installCommands.windowsBinary}\n\n${installCommands.unixBinary}`)
        ),
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Start and inspect'),
          CodeBlock(serverStartCommands)
        )
      )
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Connect A Client'),
      h2({ class: styles.pageH2 }, 'Run the same high-level flow from browser or Node.'),
      p({ class: styles.pageLead }, 'Both clients let you connect, create databases, run code, and save your work. Choose the browser client when your app runs in a browser and the Node client when it runs alongside backend services or automation.'),
      div({ class: styles.tabs },
        reactive(activeClient, (tab) =>
          button({
            class: tab === 'browser' ? styles.tabActive : styles.tab,
            onclick: () => activeClient.value = 'browser'
          }, 'Browser Client')
        ),
        reactive(activeClient, (tab) =>
          button({
            class: tab === 'node' ? styles.tabActive : styles.tab,
            onclick: () => activeClient.value = 'node'
          }, 'Node Client')
        )
      ),
      div({ class: styles.tabContent },
        reactive(activeClient, (tab) => {
          if (tab === 'browser') {
            return div({ class: styles.card },
              h3({ class: styles.cardTitle }, 'Browser example'),
              p({ class: styles.pageP }, 'The browser client connects over the WebSocket proxy on `port + 1`, so local development usually runs with `secure: false`.'),
              CodeBlock(browserQuickStartExample)
            );
          }

          return div({ class: styles.card },
            h3({ class: styles.cardTitle }, 'Node example'),
            p({ class: styles.pageP }, 'The Node client connects directly over the ScriptDB TCP port and exposes the same high-level operations.'),
            CodeBlock(nodeQuickStartExample)
          );
        })
      ),
      div({ class: styles.note }, 'Use secure transport and production credentials when you move the client examples beyond local development.')
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Inspect And Extend'),
      h2({ class: styles.pageH2 }, 'Use the shell and then move into deeper docs.'),
      p({ class: styles.pageLead }, 'The interactive shell is the fastest place to verify a new server, create databases, and sanity-check code paths before you wire ScriptDB into an app or service.'),
      div({ class: styles.splitGrid },
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Interactive shell'),
          CodeBlock(shellSessionExample)
        ),
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Where to go next'),
          p({ class: styles.pageP }, 'Move to the documentation page for architecture, the usage page for day-to-day workflows, and the API page for client constructors and method reference.'),
          p({ class: styles.pageP }, a({ href: '#/docs', class: styles.inlineLink }, 'Read the docs'), ' to understand the monorepo shape and runtime model.'),
          p({ class: styles.pageP }, a({ href: '#/usage', class: styles.inlineLink }, 'Open usage'), ' for CLI operations, package management, and security patterns.'),
          p({ class: styles.pageP }, a({ href: '#/api', class: styles.inlineLink }, 'Open API reference'), ' for browser and Node client examples based on the current source.')
        )
      )
    )
  );
};
