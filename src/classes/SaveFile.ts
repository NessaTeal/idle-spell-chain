import Spell from "./spells/Spell";
import Chain from "./Chain";

export default class SaveFile {
  spells!: Spell[];
  chain!: Chain;
  mana!: number;
  entropy!: number;
}
