import Affix from "./Affix";
import Spell from "../spells/Spell";
import Chain from "../chain/Chain";

export default class Exile implements Affix {
  multiplier: number;
  class = "Exile";

  constructor(multiplier: number) {
    this.multiplier = multiplier;
  }

  checkConditions(spell: Spell, chain: Chain): number {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const index = spell.slot!!;

    return !chain.spells[index - 1] && !chain.spells[index + 1]
      ? this.multiplier
      : 1;
  }
}
