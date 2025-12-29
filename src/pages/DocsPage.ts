import { div, h1, h2, h3, p, ul, li, code, strong } from 'elit/el';
import type { VNode } from 'elit';
import { styles } from '../styleNames';

export const DocsPage = (): VNode => {
  return div(
    h1({ class: styles.pageH1 }, 'Documentation'),
    p({ class: styles.pageP }, 'Welcome to the ScriptDB documentation.'),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'What is ScriptDB?'),
      p({ class: styles.pageP }, 'ScriptDB is a lightweight script database management tool designed to help you organize, store, and execute scripts efficiently.')
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Core Concepts'),
      h3({ class: styles.pageH3 }, 'Script Management'),
      p({ class: styles.pageP }, 'ScriptDB allows you to:'),
      ul({ class: styles.pageUl },
        li({ class: styles.pageLi }, 'Store scripts in an organized database'),
        li({ class: styles.pageLi }, 'Version control your scripts'),
        li({ class: styles.pageLi }, 'Execute scripts on demand'),
        li({ class: styles.pageLi }, 'Share scripts across your team')
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
      h2({ class: styles.pageH2 }, 'Installation Directories'),
      h3({ class: styles.pageH3 }, 'Windows'),
      ul({ class: styles.pageUl },
        li({ class: styles.pageLi }, 'Default: ', code({ class: styles.pageCode }, '%USERPROFILE%\\.scriptdb')),
        li({ class: styles.pageLi }, 'Binary: ', code({ class: styles.pageCode }, '%USERPROFILE%\\.scriptdb\\bin\\scriptdb.exe'))
      ),
      h3({ class: styles.pageH3 }, 'Linux/macOS'),
      ul({ class: styles.pageUl },
        li({ class: styles.pageLi }, 'Default: ', code({ class: styles.pageCode }, '~/.scriptdb')),
        li({ class: styles.pageLi }, 'Binary: ', code({ class: styles.pageCode }, '~/.scriptdb/bin/scriptdb'))
      )
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Environment Variables'),
      h3({ class: styles.pageH3 }, 'SCRIPTDB_INSTALL'),
      p({ class: styles.pageP }, 'Set custom installation directory'),
      h3({ class: styles.pageH3 }, 'SCRIPTDB_VERSION'),
      p({ class: styles.pageP }, 'Install specific version')
    ),

    div({ class: styles.section },
      h2({ class: styles.pageH2 }, 'Features'),
      ul({ class: styles.pageUl },
        li({ class: styles.pageLi }, strong('Easy Installation'), ' - Single-command installation'),
        li({ class: styles.pageLi }, strong('Script Database'), ' - Centralized script storage'),
        li({ class: styles.pageLi }, strong('Version Control'), ' - Track script versions'),
        li({ class: styles.pageLi }, strong('Cross-Platform'), ' - Works everywhere'),
        li({ class: styles.pageLi }, strong('Secure'), ' - Built with security best practices')
      )
    )
  );
};
