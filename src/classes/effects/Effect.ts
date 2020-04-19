export default interface Effect {
  apply(input: number, delta: number): number;
}
