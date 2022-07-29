import { parseHTML } from 'linkedom';

const { document } = parseHTML('');

export const h: JSXFactory = (type, props = {}, ...children): HTMLElement => {
  if (typeof type === 'function') return type({ ...props, children });
  const node = document.createElement(type);
  if (props?.class) {
    props.className = props.class;
    delete props.class;
  }
  if (props?.style) {
    Object.assign(node.style, props.style);
    delete props.style;
  }
  Object.assign(node, props);
  node.append(...children.flat());
  return node;
};

type Props = {
  class?: string;
  className?: string;
  style?: CSSStyleDeclaration;
};

type JSXFactory = (
  type: string | ((props: unknown) => HTMLElement),
  props?: Props,
  ...children: HTMLElement[]
) => HTMLElement;
