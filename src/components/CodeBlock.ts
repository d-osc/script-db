import type { VNode } from 'elit';
import { code, pre } from 'elit/el';
import { styles } from '../styleNames';

export const CodeBlock = (snippet: string): VNode => {
  return pre({ class: styles.pagePre },
    code({ class: styles.pageCode }, snippet)
  );
};