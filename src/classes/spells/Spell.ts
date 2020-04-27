import Effect from "../effects/Effect";
import SpellElement from "./SpellElement";

export default class Spell {
  name: string;
  power: number;
  consumedPower = 0;
  effect: Effect;
  slot: number | undefined;
  element: SpellElement;

  constructor(
    name: string,
    entropy: number,
    effect: Effect,
    element: SpellElement
  ) {
    this.name = name;
    this.power = entropy;
    this.effect = effect;
    this.element = element;
  }

  totalPower(): number {
    return this.power + this.consumedPower;
  }

  cast(input: number, delta: number): number {
    return this.effect.apply(input, this.totalPower(), delta);
  }
}
