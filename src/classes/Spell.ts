import Effect from "./Effect";

export default class Spell {
  id!: string;
  name!: string;
  effect!: Effect;
  slot: number | undefined;

  constructor(name: string, effect: Effect) {
    this.name = name;
    this.effect = effect;
  }
}
