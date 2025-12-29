import { div, h1, h2, h3, p, pre, code, ul, li, strong, button } from 'elit/el';
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
      p({ class: styles.subtitle }, 'A lightweight script database management tool')
    ),

    // Features
    div({ class: styles.features },
      div({ class: styles.feature },
        h3({ class: styles.featureH3 }, '📦 Easy Installation'),
        p('Simple installation process for both Windows and Unix-based systems')
      ),
      div({ class: styles.feature },
        h3({ class: styles.featureH3 }, '🚀 Fast & Lightweight'),
        p('Minimal overhead with maximum performance')
      ),
      div({ class: styles.feature },
        h3({ class: styles.featureH3 }, '🔧 Cross-Platform'),
        p('Works seamlessly on Windows, Linux, and macOS')
      ),
      div({ class: styles.feature },
        h3({ class: styles.featureH3 }, '📝 Script Management'),
        p('Organize and manage your scripts efficiently')
      ),
      div({ class: styles.feature },
        h3({ class: styles.featureH3 }, '🔒 Secure'),
        p('Built with security best practices in mind')
      )
    ),

    // Quick Start
    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Quick Start'),

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
              code({ class: styles.pageCode }, 'irm https://yourusername.github.io/script-db/scripts/install.ps1 | iex')
            );
          } else {
            return pre({ class: styles.pagePre },
              code({ class: styles.pageCode }, 'curl -fsSL https://yourusername.github.io/script-db/scripts/install.sh | bash')
            );
          }
        })
      )
    ),

    // Why ScriptDB
    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Why ScriptDB?'),
      ul({ class: styles.pageUl },
        li({ class: styles.pageLi }, strong('Simple: '), 'Easy to install and use'),
        li({ class: styles.pageLi }, strong('Flexible: '), 'Adapts to your workflow'),
        li({ class: styles.pageLi }, strong('Reliable: '), 'Battle-tested scripts'),
        li({ class: styles.pageLi }, strong('Open Source: '), 'Community-driven development')
      )
    )
  );
};
