import { a, code, div, h1, h2, h3, li, p, span, ul } from 'elit/el';
import type { VNode } from 'elit';
import { CodeBlock } from '../components/CodeBlock';
import {
  configExample,
  directoryLayout,
  externalLinks,
  packageManagementCommands,
  protocolSummary,
  shellSessionExample,
  systemModules
} from '../content';
import { styles } from '../styleNames';

const routeLink = (path: string, label: string): VNode => {
  return a({ href: `#${path}`, class: styles.inlineLink }, label);
};

const externalLink = (href: string, label: string): VNode => {
  return a({ href, class: styles.inlineLink, target: '_blank', rel: 'noopener noreferrer' }, label);
};

const packageCard = (title: string, description: string, items: string[]): VNode => {
  return div({ class: styles.card },
    h3({ class: styles.cardTitle }, title),
    p({ class: styles.pageP }, description),
    ul({ class: styles.pageUl },
      ...items.map((item) => li({ class: styles.pageLi }, item))
    )
  );
};

export const DocsPage = (): VNode => {
  return div(
    div({ class: styles.pageHero },
      div({ class: styles.badgeRow },
        span({ class: styles.badge }, 'Monorepo docs'),
        span({ class: styles.badge }, 'CLI + GUI + server'),
        span({ class: styles.badge }, 'Source-aligned reference')
      ),
      p({ class: styles.heroEyebrow }, 'Documentation'),
      h1({ class: styles.pageH1 }, 'How ScriptDB is put together and how the pieces fit.'),
      p({ class: styles.pageLead }, 'This site now describes ScriptDB as it exists in the current monorepo: a server with official browser and Node clients, a CLI, a browser GUI, shared storage and VM packages, and system modules used inside executed code.'),
      div({ class: styles.heroActions },
        a({ href: '#/usage', class: styles.buttonPrimary }, 'Open Usage'),
        a({ href: '#/api', class: styles.buttonSecondary }, 'API Reference'),
        externalLink(externalLinks.repository, 'Monorepo Source')
      )
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Platform Shape'),
      h2({ class: styles.pageH2 }, 'The website now maps to the real ScriptDB workspace.'),
      p({ class: styles.pageLead }, 'ScriptDB is not just a single binary. The repository ships application surfaces for humans, transport clients for apps, and lower-level packages that handle storage, execution, and shared modules.'),
      div({ class: styles.features },
        packageCard('Apps', 'The repo includes the pieces operators touch directly during development and maintenance.', [
          'The CLI starts, stops, monitors, and shells into the server.',
          'The browser GUI provides Monaco-based editing and database inspection.',
          'The server owns the TCP endpoint and browser-facing proxy flow.'
        ]),
        packageCard('Packages', 'The monorepo packages are split by transport and runtime responsibility.', [
          '@scriptdb/client for TCP connections from Node and automation.',
          '@scriptdb/browser-client for browser access through the proxy on port + 1.',
          'server, storage, system-modules, and vm packages support the runtime.'
        ]),
        packageCard('Workflow', 'The happy path is intentionally simple even though the platform is modular.', [
          'Install the CLI or release binary.',
          'Start the server and create a database.',
          'Run TypeScript or JavaScript, then save the database when you want persistence.'
        ])
      )
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Transport'),
      h2({ class: styles.pageH2 }, 'There is one database model with two client transports.'),
      p({ class: styles.pageLead }, 'The Node client talks directly to the configured TCP port. The browser client talks to the WebSocket proxy on the next port, but both clients expose nearly the same high-level database operations.'),
      div({ class: styles.splitGrid },
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Protocol summary'),
          p({ class: styles.pageP }, 'This is the transport contract the docs now assume throughout the site.'),
          CodeBlock(protocolSummary)
        ),
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Database lifecycle'),
          p({ class: styles.pageP }, 'Databases are named execution contexts on the server. Clients create them, run code inside them, optionally update metadata, and persist them with ', code({ class: styles.pageCode }, 'saveDatabase()'), ' when the in-memory state should be written to disk.'),
          ul({ class: styles.pageUl },
            li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'run(code, databaseName)'), ' sends TypeScript or JavaScript for evaluation.'),
            li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'updateDatabase(databaseName, data)'), ' updates metadata about the database.'),
            li({ class: styles.pageLi }, code({ class: styles.pageCode }, 'scriptdb shell'), ' is the quickest way to smoke test a server before wiring a full client app.')
          )
        )
      )
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Filesystem'),
      h2({ class: styles.pageH2 }, 'Local installs create a predictable ScriptDB home folder.'),
      p({ class: styles.pageLead }, 'The install scripts and CLI expect a user-scoped `.scriptdb` folder that holds the binary, configuration, databases, package workspace, and PM2 artifacts when you run daemonized processes.'),
      div({ class: styles.splitGrid },
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Directory layout'),
          CodeBlock(directoryLayout)
        ),
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Minimal configuration'),
          p({ class: styles.pageP }, 'The current docs assume a JSON config file in the ScriptDB home directory. Keep credentials and secure settings aligned with the environment you are deploying into.'),
          CodeBlock(configExample)
        )
      )
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Packages Inside ScriptDB'),
      h2({ class: styles.pageH2 }, 'Package management and system modules are part of the product story.'),
      p({ class: styles.pageLead }, 'ScriptDB is built for running code, so the docs need to cover both the package workspace and the system modules that are available to executed scripts.'),
      div({ class: styles.splitGrid },
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Package workspace'),
          p({ class: styles.pageP }, 'Use the CLI to install packages into the shared ScriptDB package directory or the current folder when you want project-local resolution.'),
          CodeBlock(packageManagementCommands)
        ),
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'System modules'),
          p({ class: styles.pageP }, 'The monorepo also ships a system modules package for common file-style operations from executed code.'),
          ul({ class: styles.pageUl },
            ...systemModules.map((entry) => li({ class: styles.pageLi }, code({ class: styles.pageCode }, entry)))
          )
        )
      )
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Inspection'),
      h2({ class: styles.pageH2 }, 'The shell remains the fastest way to understand a live instance.'),
      p({ class: styles.pageLead }, 'For first-contact debugging and database inspection, the shell is still the shortest feedback loop.'),
      CodeBlock(shellSessionExample),
      div({ class: styles.note },
        'Use ', routeLink('/installation', 'Installation'), ' to set up a machine, ', routeLink('/usage', 'Usage'), ' for operational workflows, and ', routeLink('/api', 'API reference'), ' for the current client surfaces. Package pages are also available on ', externalLink(externalLinks.browserClient, 'npm'), ' and ', externalLink(externalLinks.nodeClient, 'npm'), '.'
      )
    )
  );
};