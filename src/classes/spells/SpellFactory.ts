import Spell from "./Spell";
import { getRandomEnumValue } from "../utils";
import SpellElement from "./SpellElement";
import generateRandomAffix from "../affixes/AffixFactory";
import { getRandomRarity } from "../RarityManager";

export default class SpellFactory {
  static generateSpell(): Spell {
    const rarity = getRandomRarity();
    const spell = new Spell(rarity, getRandomEnumValue(SpellElement));

    if (Math.random() <= 0.5) {
      spell.affixes.push(generateRandomAffix());
    }

    return spell;
  }
}
