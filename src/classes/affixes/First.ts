import Affix from "./Affix";
import Spell from "../spells/Spell";

export default class First implements Affix {
  multiplier: number;
  class = "First";

  constructor(multiplier: number) {
    this.multiplier = multiplier;
  }

  checkConditions(spell: Spell): number {
    return spell.slot === 0 ? this.multiplier : 1;
  }
}
