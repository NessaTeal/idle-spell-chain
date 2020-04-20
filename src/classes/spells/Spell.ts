import Effect from "../effects/Effect";

export default class Spell {
  name!: string;
  effect!: Effect;
  slot: number | undefined;

  constructor(name: string, effect: Effect) {
    this.name = name;
    this.effect = effect;
  }
}
