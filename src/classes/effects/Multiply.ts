import Effect from "./Effect";

export default class Multiply implements Effect {
  multiplier!: number;
  description: string;
  class = "multiplier";

  constructor(multiplier: number) {
    this.multiplier = multiplier;
    this.description = `Multiply number by ${this.multiplier.toFixed(2)}`;
  }

  apply(input: number): number {
    return input * this.multiplier;
  }
}
