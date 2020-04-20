import Effect from "./Effect";
import EffectClass from "./EffectClass";

export default class Addition implements Effect {
  addend: number;
  description: string;
  class: EffectClass;

  constructor(addend: number) {
    this.addend = addend;
    this.description = `Increase number by ${this.addend.toFixed(2)}`;
    this.class = EffectClass.ADDITION;
  }

  apply(input: number): number {
    return input + this.addend;
  }
}

export class AdditionSerialized {
  addend!: number;
  description!: string;
  class!: EffectClass;
}
