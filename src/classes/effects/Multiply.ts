import Effect from "./Effect";
import EffectClass from "./EffectClass";

export default class Multiply implements Effect {
  multiplier!: number;
  description: string;
  class: EffectClass;

  constructor(multiplier: number) {
    this.multiplier = multiplier;
    this.description = `Multiply number by ${this.multiplier.toFixed(2)}`;
    this.class = EffectClass.MULTIPLY;
  }

  apply(input: number): number {
    return input * this.multiplier;
  }
}

export class MultiplySerialized {
  multiplier!: number;
  description!: string;
  class!: EffectClass;
}
