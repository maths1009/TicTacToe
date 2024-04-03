type HTMLProps<T extends keyof JSX.IntrinsicElements> =
  JSX.IntrinsicElements[T];

type BoardState = (string | null)[];

type Player = {
  id: string;
  name: string;
  symbol: string;
};
