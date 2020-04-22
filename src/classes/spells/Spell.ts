import Effect from "../effects/Effect";

export default class Spell {
  name: string;
  power: number;
  effect: Effect;
  slot: number | undefined;

  constructor(name: string, entropy: number, effect: Effect) {
    this.name = name;
    this.power = entropy;
    this.effect = effect;
  }

  cast(input: number, delta: number): number {
    return this.effect.apply(input, this.power, delta);
  }
}
