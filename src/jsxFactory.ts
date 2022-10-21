export const h: JSXFactory = (type, props = {}, ...children): string => {
  if (typeof type === 'function') return type({ ...props, children });
  if (props?.className) {
    props.class = props.className;
    delete props.className;
  }
  if (props?.style) {
    props.style = parseStyleToString(props.style);
  }
  return `<${type} ${parsePropsToString(props ?? {})}>
  ${
    children.length
      ? `${children.flat().join('\n')}
</${type}>`
      : ''
  }`;
};

const parseStyleToString = (style: CSSStyleDeclaration | string): string =>
  typeof style === 'string'
    ? style
    : Object.entries(style)
        .map(([key, value]) => `${key}: ${value}`)
        .join(';');

const parsePropsToString = (props: Props): string =>
  Object.entries(props)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

type Props = {
  class?: string;
  className?: string;
  style?: CSSStyleDeclaration | string;
};

type JSXFactory = (
  type: string | ((props: Props & { children: string[] }) => string),
  props?: Props,
  ...children: string[]
) => string;
