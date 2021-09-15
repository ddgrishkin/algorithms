export function getRandomElement<T = unknown>(source: T[], from: number, to: number): T {
  return source[Math.round(Math.random() * (to - from)) + from];
}
