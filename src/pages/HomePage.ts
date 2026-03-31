import { a, button, div, h1, h2, h3, p, span } from 'elit/el';
import type { VNode } from 'elit';
import { createState, reactive } from 'elit/state';
import { CodeBlock } from '../components/CodeBlock';
import {
  browserQuickStartExample,
  externalLinks,
  installCommands,
  nodeQuickStartExample,
  productVersion,
  serverStartCommands,
  shellSessionExample
} from '../content';
import { styles } from '../styleNames';

const routeLink = (path: string, label: string, className: string): VNode => {
  return a({ href: `#${path}`, class: className }, label);
};

const externalLink = (href: string, label: string, className: string): VNode => {
  return a({ href, class: className, target: '_blank', rel: 'noopener noreferrer' }, label);
};

const statCard = (value: string, label: string): VNode => {
  return div({ class: styles.statCard },
    span({ class: styles.statValue }, value),
    p({ class: styles.statLabel }, label)
  );
};

const featureCard = (title: string, description: string): VNode => {
  return div({ class: styles.feature },
    h3({ class: styles.featureH3 }, title),
    p({ class: styles.pageP }, description)
  );
};

export const HomePage = (): VNode => {
  const activeClient = createState<'browser' | 'node'>('browser');

  return div(
    div({ class: styles.pageHero },
      div({ class: styles.badgeRow },
        span({ class: styles.badge }, `Version ${productVersion}`),
        span({ class: styles.badge }, 'CLI + GUI'),
        span({ class: styles.badge }, 'Browser + Node clients'),
        span({ class: styles.badge }, 'TypeScript sandbox')
      ),
      p({ class: styles.heroEyebrow }, 'Script Database Platform'),
      h1({ class: styles.heroTitle }, 'Store, version, and run your scripts from one ScriptDB server.'),
      p({ class: styles.subtitle }, 'ScriptDB combines a CLI, browser GUI, browser client, and Node client so teams can manage TypeScript or JavaScript databases, execute code in a controlled runtime, and keep workflows close to their tooling.'),
      div({ class: styles.heroActions },
        routeLink('/installation', 'Install ScriptDB', styles.buttonPrimary),
        routeLink('/quick-start', 'Quick Start', styles.buttonSecondary),
        externalLink(externalLinks.repository, 'GitHub', styles.buttonSecondary)
      ),
      div({ class: styles.statGrid },
        statCard('2 apps', 'CLI and GUI apps sit alongside the server and package workspace.'),
        statCard('7 packages', 'Clients, storage, VM, server, and system modules share one monorepo.'),
        statCard('1234 + 1', 'The TCP server listens on the configured port and the browser proxy uses port + 1.')
      )
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Why Teams Use It'),
      h2({ class: styles.pageH2 }, 'One workflow for code storage, execution, and tooling.'),
      p({ class: styles.pageLead }, 'The main ScriptDB monorepo ships the server, a browser GUI, a CLI, a WebSocket browser client, a TCP Node client, system modules, storage, and the sandbox runtime in one place.'),
      div({ class: styles.features },
        featureCard('Secure script runtime', 'Run TypeScript or JavaScript in a sandboxed VM instead of pushing script execution responsibilities into ad hoc glue code.'),
        featureCard('Git-backed storage', 'Treat ScriptDB databases like code assets with versioned storage and update flows that fit engineering teams.'),
        featureCard('CLI-first operations', 'Start, stop, inspect, shell into, and monitor the server with the official @scriptdb/cli package.'),
        featureCard('Browser GUI', 'The GUI app brings Monaco-powered editing, database browsing, and output inspection to the same backend.'),
        featureCard('Official clients', 'Use the browser client over WebSocket or the Node client over TCP with matching high-level operations.'),
        featureCard('Typed workflows', 'The monorepo is built around TypeScript with typed packages and generated definitions for runtime interactions.')
      )
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Install'),
      h2({ class: styles.pageH2 }, 'Choose the install path that matches your environment.'),
      p({ class: styles.pageLead }, 'Most teams start with the CLI package, while local machines and internal images can use the binary install scripts published from this repo.'),
      div({ class: styles.splitGrid },
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Recommended: global CLI package'),
          p({ class: styles.pageP }, 'Install the CLI from npm or Bun when you want `scriptdb` available in your normal JavaScript toolchain.'),
          CodeBlock(`${installCommands.npmGlobal}\n${installCommands.bunGlobal}`),
          p({ class: styles.pageP }, 'This is the cleanest route when you already manage Node or Bun on the host.'),
          externalLink(externalLinks.cliPackage, 'Open @scriptdb/cli on npm', styles.inlineLink)
        ),
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Binary install scripts'),
          p({ class: styles.pageP }, 'Use the shipped PowerShell or shell scripts to pull a release binary into the standard ScriptDB folder and add it to PATH.'),
          CodeBlock(`${installCommands.windowsBinary}\n\n${installCommands.unixBinary}`),
          p({ class: styles.pageP }, 'This route is useful for disposable environments, CI images, and hosts where you want a direct binary install.'),
          externalLink(externalLinks.releases, 'Browse release assets', styles.inlineLink)
        )
      )
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Use The Clients'),
      h2({ class: styles.pageH2 }, 'The browser and Node clients cover the same core workflow.'),
      p({ class: styles.pageLead }, 'Both official clients let you connect, authenticate, create databases, run code, and save results. The browser client talks to the WebSocket proxy and the Node client talks to the TCP server directly.'),
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
              h3({ class: styles.cardTitle }, '@scriptdb/browser-client'),
              p({ class: styles.pageP }, 'Use this when your app runs in the browser and reaches ScriptDB through the WebSocket proxy on `port + 1`.'),
              CodeBlock(browserQuickStartExample)
            );
          }

          return div({ class: styles.card },
            h3({ class: styles.cardTitle }, '@scriptdb/client'),
            p({ class: styles.pageP }, 'Use this for services, workers, CLIs, and server-side tools that can connect over the native TCP transport.'),
            CodeBlock(nodeQuickStartExample)
          );
        })
      )
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Operate'),
      h2({ class: styles.pageH2 }, 'Run the server, inspect it, and work interactively.'),
      p({ class: styles.pageLead }, 'ScriptDB is built to be operated from the CLI first. You can run it in the foreground, daemonize it with PM2, inspect logs, or drop into the interactive shell.'),
      div({ class: styles.splitGrid },
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Server lifecycle'),
          p({ class: styles.pageP }, 'These are the core commands you will use when provisioning or managing a ScriptDB instance.'),
          CodeBlock(serverStartCommands)
        ),
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Interactive shell'),
          p({ class: styles.pageP }, 'Use the shell for quick inspection, creating databases, and trying code paths without wiring a client app first.'),
          CodeBlock(shellSessionExample)
        )
      )
    )
  );
};
