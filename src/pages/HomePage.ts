import { div, h1, h2, h3, p, pre, code, ul, li, strong, button, a } from 'elit/el';
import type { VNode } from 'elit';
import { createState, reactive } from 'elit/state';
import { styles } from '../styleNames';

export const HomePage = (): VNode => {
  // Create state for active tab
  const activeTab = createState<'windows' | 'linux'>('windows');

  return div(
    // Hero section
    div({ class: styles.hero },
      h1({ class: styles.heroTitle }, 'ScriptDB'),
      p({ class: styles.subtitle }, 'A high-performance in-memory database with real-time synchronization')
    ),

    // Features
    div({ class: styles.features },
      div({ class: styles.feature },
        h3({ class: styles.featureH3 }, '🚀 High Performance'),
        p('Sub-millisecond query response with in-memory storage')
      ),
      div({ class: styles.feature },
        h3({ class: styles.featureH3 }, '🔌 WebSocket Support'),
        p('Real-time synchronization for browser applications')
      ),
      div({ class: styles.feature },
        h3({ class: styles.featureH3 }, '💾 Persistent Storage'),
        p('Save databases to disk with automatic snapshots')
      ),
      div({ class: styles.feature },
        h3({ class: styles.featureH3 }, '📝 JavaScript Querying'),
        p('Use JavaScript for powerful data manipulation')
      ),
      div({ class: styles.feature },
        h3({ class: styles.featureH3 }, '🔒 Secure'),
        p('Built-in authentication with HMAC signing support')
      )
    ),

    // Quick Start
    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Quick Start'),

      // Download GUI Button
      div({ class: styles.downloadSection },
        a({
          href: 'https://github.com/d-osc/script-db/releases/download/v1.1.2/ScriptDB.Setup.1.1.2.exe',
          class: styles.downloadButton,
          target: '_blank',
          rel: 'noopener noreferrer'
        }, 'Download ScriptDB GUI for Windows')
      ),

      // Tabs
      div({ class: styles.tabs },
        reactive(activeTab, (tab) =>
          button({
            class: tab === 'windows' ? styles.tabActive : styles.tab,
            onclick: () => activeTab.value = 'windows'
          }, 'Windows (PowerShell)')
        ),
        reactive(activeTab, (tab) =>
          button({
            class: tab === 'linux' ? styles.tabActive : styles.tab,
            onclick: () => activeTab.value = 'linux'
          }, 'Linux/macOS (Bash)')
        )
      ),

      // Tab content
      div({ class: styles.tabContent },
        reactive(activeTab, (tab) => {
          if (tab === 'windows') {
            return pre({ class: styles.pagePre },
              code({ class: styles.pageCode }, 'irm https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.ps1 | iex')
            );
          } else {
            return pre({ class: styles.pagePre },
              code({ class: styles.pageCode }, 'curl -fsSL https://raw.githubusercontent.com/d-osc/script-db/refs/heads/main/scripts/install.sh | bash')
            );
          }
        })
      )
    ),

    // Why ScriptDB
    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Why ScriptDB?'),
      ul({ class: styles.pageUl },
        li({ class: styles.pageLi }, strong('Fast: '), 'In-memory storage with sub-millisecond queries'),
        li({ class: styles.pageLi }, strong('Flexible: '), 'JavaScript-based querying language'),
        li({ class: styles.pageLi }, strong('Reliable: '), 'Auto-reconnect with exponential backoff'),
        li({ class: styles.pageLi }, strong('Real-time: '), 'WebSocket support for live updates'),
        li({ class: styles.pageLi }, strong('Open Source: '), 'Community-driven development')
      )
    )
  );
};
