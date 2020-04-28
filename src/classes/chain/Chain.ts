import Spell from "../spells/Spell";

export default class Chain {
  spells: Array<Spell | undefined>;

  constructor(spells: Array<Spell | undefined>) {
    this.spells = spells;
  }

  static emptyChain() {
    return new Chain(new Array(3));
  }

  invoke(delta: number): number {
    return this.spells.reduce((acc: number, val: Spell | undefined) => {
      if (!val) {
        return acc;
      }

      return val.cast(acc, delta, this);
    }, 0);
  }
}
