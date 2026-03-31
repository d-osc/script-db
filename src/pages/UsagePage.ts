import { a, code, div, h1, h2, h3, li, p, span, ul } from 'elit/el';
import type { VNode } from 'elit';
import { CodeBlock } from '../components/CodeBlock';
import {
  authExample,
  configExample,
  packageManagementCommands,
  serverStartCommands,
  shellSessionExample,
  signingExample,
  verifyCommands
} from '../content';
import { styles } from '../styleNames';

const routeLink = (path: string, label: string): VNode => {
  return a({ href: `#${path}`, class: styles.inlineLink }, label);
};

const practiceItem = (command: string, description: string): VNode => {
  return li({ class: styles.pageLi },
    code({ class: styles.pageCode }, command),
    ' - ',
    description
  );
};

export const UsagePage = (): VNode => {
  return div(
    div({ class: styles.pageHero },
      div({ class: styles.badgeRow },
        span({ class: styles.badge }, 'Operations'),
        span({ class: styles.badge }, 'Security'),
        span({ class: styles.badge }, 'Persistence')
      ),
      p({ class: styles.heroEyebrow }, 'Usage'),
      h1({ class: styles.pageH1 }, 'Operate ScriptDB as a server-backed code workflow, not a generic data store.'),
      p({ class: styles.pageLead }, 'The key daily tasks are starting the server, inspecting it from the shell, managing the package workspace, connecting the right client for the runtime, and deciding when to persist database state.'),
      div({ class: styles.heroActions },
        a({ href: '#/api', class: styles.buttonPrimary }, 'Client API'),
        a({ href: '#/scripts', class: styles.buttonSecondary }, 'Install Scripts')
      )
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Server Operations'),
      h2({ class: styles.pageH2 }, 'Bring the server up first, then use the shell for fast feedback.'),
      p({ class: styles.pageLead }, 'Most operational work starts in the CLI. You can keep the process in the foreground locally, daemonize it with PM2, inspect logs and health, and drop into the shell whenever you need to inspect a live database quickly.'),
      div({ class: styles.splitGrid },
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Lifecycle commands'),
          CodeBlock(serverStartCommands)
        ),
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Interactive shell'),
          p({ class: styles.pageP }, 'The shell is the shortest path to validating that a new environment is wired correctly.'),
          CodeBlock(shellSessionExample)
        )
      )
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Packages And Config'),
      h2({ class: styles.pageH2 }, 'ScriptDB has its own package workspace and runtime configuration.'),
      p({ class: styles.pageLead }, 'If the executed code depends on npm packages, install them into ScriptDB’s shared package area or locally next to the project. Keep the server config small and explicit so it is easy to audit and reproduce.'),
      div({ class: styles.splitGrid },
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Package management'),
          p({ class: styles.pageP }, 'These commands target the package workspace ScriptDB uses during execution.'),
          CodeBlock(packageManagementCommands)
        ),
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Configuration'),
          p({ class: styles.pageP }, 'A minimal config is enough for local development. Tighten credentials and secure settings before production use.'),
          CodeBlock(configExample)
        )
      )
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Authentication'),
      h2({ class: styles.pageH2 }, 'Use explicit credentials and signing where the runtime supports it.'),
      p({ class: styles.pageLead }, 'The Node client source exposes the strongest transport options today, including signing and richer retry controls. Browser flows still authenticate against the proxy, but backend and automation tasks should prefer the TCP client when you need tighter security controls.'),
      div({ class: styles.splitGrid },
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Username and password'),
          CodeBlock(authExample)
        ),
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Message signing in the Node client'),
          CodeBlock(signingExample)
        )
      )
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Smoke Tests'),
      h2({ class: styles.pageH2 }, 'Verify the environment before you start writing larger workflows.'),
      p({ class: styles.pageLead }, 'A short verification sequence catches most broken installs or missing PATH changes before you spend time debugging application code.'),
      div({ class: styles.splitGrid },
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Verification commands'),
          CodeBlock(verifyCommands)
        ),
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Operational habits that pay off'),
          ul({ class: styles.pageUl },
            practiceItem('scriptdb status', 'Confirm the server is really up before attaching clients.'),
            practiceItem('saveDatabase()', 'Persist important state deliberately instead of assuming memory should be durable.'),
            practiceItem('scriptdb add', 'Install runtime dependencies into ScriptDB rather than embedding ad hoc import hacks.'),
            practiceItem('username/password in options', 'Prefer explicit credentials in client options over embedding them in connection URIs.'),
            practiceItem('Node client for automation', 'Use the TCP client for scripts, workers, and services that need richer transport options.')
          )
        )
      )
    ),

    div({ class: styles.note },
      'Use ', routeLink('/quick-start', 'Quick Start'), ' when you need the shortest working path, and move to ', routeLink('/api', 'API reference'), ' when you are ready to wire the browser or Node client into real code.'
    )
  );
};