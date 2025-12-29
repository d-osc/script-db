import { header, nav, a, ul, li, type VNode } from 'elit/el';
import { router } from '../router';
import { styles } from '../styleNames';

export const Header = (): VNode => {
  const NavLink = (text: string, path: string): VNode => {
    return li(
      a({
        href: `#${path}`,
        class: styles.navLink,
        onclick: (e: Event) => {
          e.preventDefault();
          router.push(path);
        }
      }, text)
    );
  };

  return header({ class: styles.header },
    nav({ class: `${styles.container} ${styles.nav}` },
      a({
        href: '#/',
        class: styles.logo,
        onclick: (e: Event) => {
          e.preventDefault();
          router.push('/');
        }
      }, 'ScriptDB'),
      ul({ class: styles.navLinks },
        NavLink('Home', '/'),
        NavLink('Installation', '/installation'),
        NavLink('Quick Start', '/quick-start'),
        NavLink('Docs', '/docs'),
        NavLink('Usage', '/usage'),
        NavLink('Scripts', '/scripts')
      )
    )
  );
};
