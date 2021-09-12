export type CompareHandler<T> = (a: T, b: T) => number;

export enum CompareResult {
  EQUAL = 0,
  LESS = -1,
  GREATER = 1,
}
