import Affix from "./Affix";
import Spell from "../spells/Spell";
import Chain from "../chain/Chain";
import SpellElement from "../spells/SpellElement";

export default class Neighbour implements Affix {
  multiplier: number;
  class = "Neighbour";
  element: SpellElement;

  constructor(multiplier: number, element: SpellElement) {
    this.multiplier = multiplier;
    this.element = element;
  }

  checkConditions(spell: Spell, chain: Chain): number {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const index = spell.slot!!;

    return chain.spells[index - 1]?.element === this.element ||
      chain.spells[index + 1]?.element === this.element
      ? this.multiplier
      : 1;
  }
}
