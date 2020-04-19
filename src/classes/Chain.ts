import Spell from "./spells/Spell";

export default class Chain {
  spells: Array<Spell | undefined> = new Array(3);

  invoke(delta: number) {
    this.spells.reduce((acc: number, val: Spell | undefined) => {
      if (!val) {
        return acc;
      }

      return val.effect.apply(acc, delta);
    }, 0);
  }
}
