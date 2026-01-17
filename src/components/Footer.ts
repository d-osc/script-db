import { footer, div, p, a, type VNode } from 'elit';
import { styles } from '../styleNames';

export const Footer = (): VNode => {
  return footer({ class: styles.footer },
    div({ class: styles.container },
      p('© 2025 ScriptDB. MIT License.'),
      p('Created by ', a({
        href: 'https://github.com/n-devs',
        target: 'n-devs',
        rel: 'noopener noreferrer'
      }, '@n-devs'))
    )
  );
};
