export type Props = {
  children?: React.ReactNode;
};
export type Extended<T, K> = T & { extended: K };
export type Nullable<T> = T | null;