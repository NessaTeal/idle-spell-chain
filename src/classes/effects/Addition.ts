import Effect from "./Effect";
import EffectClass from "./EffectClass";

export const ADDITION_STARTING_POWER = 1.5;

export default class Addition implements Effect {
  addend: number;
  description: string;
  class = EffectClass.ADDITION;

  constructor(addend: number) {
    this.addend = addend;
    this.description = `Increase number by ${this.addend.toFixed(2)}`;
  }

  apply(input: number): number {
    return input + this.addend;
  }
}
