import store from "@/store";
import Spell from "./Spell";
import { getRandomEnumValue } from "../utils";
import SpellElement from "./SpellElement";
import generateRandomAffix from "../affixes/AffixFactory";

export default class SpellFactory {
  static generateSpell(): Spell {
    const variedEntropy = store.state.entropy * (1 + Math.random() / 10);
    const spell = new Spell(
      "New spell",
      variedEntropy,
      getRandomEnumValue(SpellElement)
    );

    if (Math.random() <= 0.5) {
      spell.affixes.push(generateRandomAffix());
    }

    return spell;
  }
}
