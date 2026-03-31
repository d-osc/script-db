import type { VNode } from 'elit';
import { a, div, footer, p } from 'elit/el';
import { externalLinks, productVersion } from '../content';
import { styles } from '../styleNames';

export const Footer = (): VNode => {
  const year = new Date().getFullYear();

  return footer({ class: styles.footer },
    div({ class: `${styles.container} ${styles.footerGrid}` },
      div({ class: styles.footerBrand },
        p({ class: styles.cardTitle }, 'ScriptDB'),
        p('Store, version, and execute TypeScript or JavaScript through a ScriptDB server with a CLI, browser GUI, and official browser and Node clients.'),
        p(`This site is aligned with the ScriptDB ${productVersion} monorepo shape and focuses on the workflows that ship with the server, CLI, GUI, and clients.`)
      ),
      div({ class: styles.footerLinks },
        p({ class: styles.footerHeading }, 'Navigate'),
        a({ href: '#/' }, 'Overview'),
        a({ href: '#/quick-start' }, 'Quick Start'),
        a({ href: '#/docs' }, 'Documentation'),
        a({ href: '#/usage' }, 'Usage'),
        a({ href: '#/api' }, 'API reference')
      ),
      div({ class: styles.footerLinks },
        p({ class: styles.footerHeading }, 'Packages'),
        a({ href: '#/installation' }, 'Installation'),
        a({ href: externalLinks.cliPackage, target: '_blank', rel: 'noopener noreferrer' }, '@scriptdb/cli'),
        a({ href: externalLinks.browserClient, target: '_blank', rel: 'noopener noreferrer' }, '@scriptdb/browser-client'),
        a({ href: externalLinks.nodeClient, target: '_blank', rel: 'noopener noreferrer' }, '@scriptdb/client'),
        a({ href: externalLinks.releases, target: '_blank', rel: 'noopener noreferrer' }, 'Releases')
      )
    ),
    p({ class: styles.footerSmall }, `© ${year} ScriptDB. Documentation site for the ScriptDB monorepo.`)
  );
};
