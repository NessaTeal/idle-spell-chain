import Spell from "./spells/Spell";
import Chain from "./chain/Chain";

export default class SaveFile {
  spells!: Spell[];
  chain!: Chain;
  mana!: number;
  entropy!: number;
  slotCost!: number;
  spellCost!: number;
  entropyCost!: number;
}
