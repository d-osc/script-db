import { footer, div, p, type VNode } from 'elit';
import { styles } from '../styleNames';

export const Footer = (): VNode => {
  return footer({ class: styles.footer },
    div({ class: styles.container },
      p('© 2025 ScriptDB. MIT License.')
    )
  );
};
