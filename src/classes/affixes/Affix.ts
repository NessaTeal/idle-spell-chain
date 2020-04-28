import Spell from "../spells/Spell";
import Chain from "../chain/Chain";

export default interface Affix {
  multiplier: number;
  class: string;
  checkConditions(spell: Spell, chain: Chain): number;
}
