type HTMLProps<T extends keyof JSX.IntrinsicElements> =
  JSX.IntrinsicElements[T];

type squares = (string | null)[];
