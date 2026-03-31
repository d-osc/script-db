import { a, div, h1, h2, h3, p, span } from 'elit/el';
import type { VNode } from 'elit';
import { CodeBlock } from '../components/CodeBlock';
import {
  externalLinks,
  installCommands,
  sourceBuildCommands,
  verifyCommands
} from '../content';
import { styles } from '../styleNames';

const externalLink = (href: string, label: string): VNode => {
  return a({ href, class: styles.inlineLink, target: '_blank', rel: 'noopener noreferrer' }, label);
};

export const InstallationPage = (): VNode => {
  return div(
    div({ class: styles.pageHero },
      div({ class: styles.badgeRow },
        span({ class: styles.badge }, 'CLI package'),
        span({ class: styles.badge }, 'Binary installers'),
        span({ class: styles.badge }, 'Source build')
      ),
      p({ class: styles.heroEyebrow }, 'Installation'),
      h1({ class: styles.pageH1 }, 'Install ScriptDB the way your environment expects.'),
      p({ class: styles.pageLead }, 'You can install the CLI globally from npm or Bun, use the platform install scripts that pull release binaries, or build the monorepo from source when you need the full workspace.'),
      div({ class: styles.heroActions },
        a({ href: '#/quick-start', class: styles.buttonPrimary }, 'Open Quick Start'),
        a({ href: externalLinks.releases, class: styles.buttonSecondary, target: '_blank', rel: 'noopener noreferrer' }, 'View Releases')
      )
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Recommended Path'),
      h2({ class: styles.pageH2 }, 'Install the CLI globally if you already have Node or Bun.'),
      p({ class: styles.pageLead }, 'The global CLI package is the smoothest path for most developers because it matches the monorepo tooling and keeps upgrades in the normal package manager flow.'),
      div({ class: styles.splitGrid },
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'npm'),
          p({ class: styles.pageP }, 'Use npm when you want the CLI available system-wide and already manage your JavaScript toolchain with Node.'),
          CodeBlock(installCommands.npmGlobal),
          p({ class: styles.pageP }, 'This installs the `scriptdb` binary from the official ', externalLink(externalLinks.cliPackage, '@scriptdb/cli'), ' package.')
        ),
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Bun'),
          p({ class: styles.pageP }, 'Use Bun for the same CLI package when your environment already standardizes on Bun for package management.'),
          CodeBlock(installCommands.bunGlobal),
          p({ class: styles.pageP }, 'This path is especially convenient when you plan to build or work inside the ScriptDB monorepo later.')
        )
      )
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Binary Installers'),
      h2({ class: styles.pageH2 }, 'Use the repository install scripts for direct binary setup.'),
      p({ class: styles.pageLead }, 'The install scripts download the correct release asset for the host platform and put ScriptDB into the standard user-level install directory.'),
      div({ class: styles.splitGrid },
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Windows PowerShell'),
          p({ class: styles.pageP }, 'The PowerShell installer targets the Windows binary and updates the user PATH after installation.'),
          CodeBlock(installCommands.windowsBinary)
        ),
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Linux and macOS shell'),
          p({ class: styles.pageP }, 'The shell installer detects OS and architecture, then downloads the matching ScriptDB binary into `~/.scriptdb/bin`.'),
          CodeBlock(installCommands.unixBinary)
        )
      ),
      div({ class: styles.note },
        'Use the binary installers when you want a release artifact without first installing the CLI package globally.'
      )
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Advanced Options'),
      h2({ class: styles.pageH2 }, 'Pin a release or change the install directory.'),
      p({ class: styles.pageLead }, 'The install scripts expose two useful environment variables: `SCRIPTDB_VERSION` for version pinning and `SCRIPTDB_INSTALL` for custom install locations.'),
      div({ class: styles.splitGrid },
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Version pinning'),
          p({ class: styles.pageP }, 'Lock to a known release when you want reproducible machine images or controlled upgrades.'),
          CodeBlock(`${installCommands.windowsVersion}\n\n${installCommands.unixVersion}`)
        ),
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Custom install folders'),
          p({ class: styles.pageP }, 'Point the installer at a custom path when your environment uses shared tools directories or non-default home layouts.'),
          CodeBlock(`${installCommands.windowsCustomDir}\n\n${installCommands.unixCustomDir}`)
        )
      )
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Source Build'),
      h2({ class: styles.pageH2 }, 'Build the workspace when you need the full monorepo.'),
      p({ class: styles.pageLead }, 'This is the path to take if you want the GUI app, shared packages, and development scripts exactly as they live in the source tree.'),
      CodeBlock(sourceBuildCommands)
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Verify And Remove'),
      h2({ class: styles.pageH2 }, 'Validate the install, then keep an uninstall path handy.'),
      p({ class: styles.pageLead }, 'Whether you installed from npm or via release scripts, a quick check right away saves time before you wire the server into larger workflows.'),
      div({ class: styles.splitGrid },
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Verification'),
          p({ class: styles.pageP }, 'These commands confirm that the CLI is available and that the server shell can be reached.'),
          CodeBlock(verifyCommands)
        ),
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, 'Uninstall scripts'),
          p({ class: styles.pageP }, 'If you used the binary install scripts, the uninstall scripts remove the installed files from the ScriptDB home folder.'),
          CodeBlock(`${installCommands.windowsUninstall}\n\n${installCommands.unixUninstall}`)
        )
      )
    ),

    div({ class: styles.section },
      p({ class: styles.sectionLabel }, 'Client Packages'),
      h2({ class: styles.pageH2 }, 'Install the package that matches where your code runs.'),
      p({ class: styles.pageLead }, 'ScriptDB ships dedicated clients for browser and Node runtimes. They expose matching high-level operations for creating databases, running code, and saving results.'),
      div({ class: styles.splitGrid },
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, '@scriptdb/browser-client'),
          p({ class: styles.pageP }, 'Use this in browser apps through the WebSocket proxy that listens on the ScriptDB port plus one.'),
          CodeBlock('npm install @scriptdb/browser-client'),
          p({ class: styles.pageP }, 'Package: ', externalLink(externalLinks.browserClient, '@scriptdb/browser-client'))
        ),
        div({ class: styles.card },
          h3({ class: styles.cardTitle }, '@scriptdb/client'),
          p({ class: styles.pageP }, 'Use this in Node services, workers, and CLIs that connect directly over the native TCP transport.'),
          CodeBlock('npm install @scriptdb/client'),
          p({ class: styles.pageP }, 'Package: ', externalLink(externalLinks.nodeClient, '@scriptdb/client'))
        )
      )
    )
  );
};
