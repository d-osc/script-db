import { reactive } from 'elit/state';
import { header, nav, a, ul, li, div, span, img } from 'elit/el';
import type { VNode } from 'elit';
import { externalLinks } from '../content';
import { router } from '../router';
import { styles } from '../styleNames';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Installation', path: '/installation' },
  { label: 'Quick Start', path: '/quick-start' },
  { label: 'Docs', path: '/docs' },
  { label: 'Usage', path: '/usage' },
  { label: 'API', path: '/api' },
  { label: 'Scripts', path: '/scripts' }
];

export const Header = (): VNode => {
  const navigate = (path: string) => (event: Event) => {
    event.preventDefault();
    router.push(path);
  };

  return header({ class: styles.header },
    nav({ class: `${styles.container} ${styles.nav}` },
      a({
        href: '#/',
        class: styles.logo,
        onclick: navigate('/')
      },
      span({ class: styles.logoMark }, 
        img({ src: 'favicon.svg', alt: 'ScriptDB Logo', width: 32, height: 32 })
      ),
      span({ class: styles.logoText }, 'ScriptDB')),
      reactive(router.currentRoute, (location) =>
        ul({ class: styles.navLinks },
          ...navItems.map((item) =>
            li(
              a({
                href: `#${item.path}`,
                class: location.path === item.path ? styles.navLinkActive : styles.navLink,
                onclick: navigate(item.path)
              }, item.label)
            )
          )
        )
      ),
      div({ class: styles.navActions },
        a({
          href: externalLinks.repository,
          class: styles.navButton,
          target: '_blank',
          rel: 'noopener noreferrer'
        }, 'GitHub')
      )
    )
  );
};
