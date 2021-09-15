export function swap<T = unknown>(source: T[], a: number, b: number): void {
  const temp = source[a];
  source[a] = source[b];
  source[b] = temp;
}
