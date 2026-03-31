import { a, div, h1, h2, h3, li, p, span, ul } from 'elit/el';
import type { VNode } from 'elit';
import { CodeBlock } from '../components/CodeBlock';
import {
  directoryLayout,
  externalLinks,
  installCommands,
  verifyCommands
} from '../content';
import { styles } from '../styleNames';

const externalLink = (href: string, label: string): VNode => {
  return a({ href, class: styles.inlineLink, target: '_blank', rel: 'noopener noreferrer' }, label);
};

const scriptFeature = (title: string, description: string): VNode => {
  return div({ class: styles.feature },
    h3({ class: styles.featureH3 }, title),
    p({ class: styles.pageP }, description)
  );
};

export const ScriptsPage = (): VNode => {
  return div(
    div({ class: styles.pageHero },
      div({ class: styles.badgeRow },
        span({ class: styles.badge }, 'PowerShell + Bash'),
        span({ class: styles.badge }, 'Release binaries'),
        span({ class: styles.badge }, 'Windows, Linux, macOS')
      ),
      p({ class: styles.heroEyebrow }, 'Install Scripts'),
      h1({ class: styles.pageH1 }, 'Use the shipped scripts when you want a direct ScriptDB binary install.'),
      p({ class: styles.pageLead }, 'The repository publishes platform installers that resolve the right release asset, place the binary in the standard ScriptDB folder, and handle the user-level PATH story differently for Windows and Unix-like shells.'),
      div({ class: styles.heroActions },
        a({ href: '#/installation', class: styles.buttonPrimary }, 'Open Installation'),
        a({ href: externalLinks.releases, class: styles.buttonSecondary, target: '_blank', rel: 'noopener noreferrer' }, 'Release Assets')
      )
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'What The Scripts Handle'),
      h2({ class: styles.pageH2 }, 'The installer path is optimized for fast machine bootstrap.'),
      p({ class: styles.pageLead }, 'The scripts are useful when you want a release binary on a host without first setting up a full JavaScript toolchain.'),
      div({ class: styles.features },
        scriptFeature('Release download', 'Both installers resolve a GitHub release asset instead of compiling the monorepo on the target machine.'),
        scriptFeature('Platform detection', 'Windows chooses x64 or x86, while the Unix script selects OS, CPU architecture, and Linux libc flavor when relevant.'),
        scriptFeature('User-scoped install', 'By default ScriptDB lands in a user-owned `.scriptdb` folder so local experimentation does not need system package manager privileges.'),
        scriptFeature('PATH setup', 'The PowerShell installer writes the user PATH directly. The Unix installer prints the shell command you should add to bash, zsh, or fish configuration.'),
        scriptFeature('Customizable', 'Both installers support `SCRIPTDB_VERSION` and `SCRIPTDB_INSTALL` so you can pin versions or relocate the installation.'),
        scriptFeature('Clean removal', 'Matching uninstall scripts remove the install directory and help you clean up PATH references when necessary.')
      )
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Run The Installers'),
      h2({ class: styles.pageH2 }, 'Choose the script that matches the host OS.'),
      p({ class: styles.pageLead }, 'The website now points at the repository `scripts/` directory directly so the commands match the files that actually live in this repo.'),
      div({ class: styles.splitGrid },
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Windows PowerShell'),
          p({ class: styles.pageP }, 'Downloads the correct Windows release asset, installs it under the user profile, and attempts to append the binary directory to the user PATH.'),
          CodeBlock(installCommands.windowsBinary)
        ),
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Linux and macOS shell'),
          p({ class: styles.pageP }, 'Detects OS, CPU architecture, and musl vs glibc on Linux before downloading the matching binary to `~/.scriptdb/bin` by default.'),
          CodeBlock(installCommands.unixBinary)
        )
      )
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Customize The Install'),
      h2({ class: styles.pageH2 }, 'Pin a version or choose a different home directory.'),
      p({ class: styles.pageLead }, 'These environment variables are the main customization hooks surfaced by the install scripts.'),
      div({ class: styles.splitGrid },
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Version pinning'),
          p({ class: styles.pageP }, 'Set `SCRIPTDB_VERSION` when you need reproducible machine images or controlled rollouts.'),
          CodeBlock(`${installCommands.windowsVersion}\n\n${installCommands.unixVersion}`)
        ),
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Custom install location'),
          p({ class: styles.pageP }, 'Set `SCRIPTDB_INSTALL` when you need a shared tools directory or a non-default home layout.'),
          CodeBlock(`${installCommands.windowsCustomDir}\n\n${installCommands.unixCustomDir}`)
        )
      )
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'After Install'),
      h2({ class: styles.pageH2 }, 'Inspect the folder layout, verify the binary, and keep uninstall commands nearby.'),
      p({ class: styles.pageLead }, 'Local installs are intentionally predictable so support and debugging stay simple.'),
      div({ class: styles.splitGrid },
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Expected layout'),
          CodeBlock(directoryLayout)
        ),
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Verification and uninstall'),
          CodeBlock(`${verifyCommands}\n\n${installCommands.windowsUninstall}\n\n${installCommands.unixUninstall}`)
        )
      )
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Platform Support'),
      h2({ class: styles.pageH2 }, 'The scripts are aimed at the release matrix shipped by the repository.'),
      ul({ class: styles.pageUl },
        li({ class: styles.pageLi }, 'Windows x64 and x86 release binaries are selected from the PowerShell installer.'),
        li({ class: styles.pageLi }, 'Linux builds support x64 and ARM64, with musl detection for distributions that need it.'),
        li({ class: styles.pageLi }, 'macOS builds support Intel and Apple Silicon hosts through the Unix installer flow.'),
        li({ class: styles.pageLi }, 'The scripts are best suited to developer workstations, CI runners, and internal images that need a quick binary bootstrap.')
      )
    ),

    div({ class: styles.note },
      'If you already have Node or Bun, the global CLI package on ', externalLink(externalLinks.cliPackage, 'npm'), ' is usually the cleaner path. Use the script installers when you want release binaries directly from ', externalLink(externalLinks.releases, 'GitHub Releases'), '.'
    )
  );
};