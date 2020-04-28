import Spell from "./Spell";
import deserializeAffix from "../affixes/AffixDeserializer";

export default function deserializeSpell(spell: Spell): Spell {
  const deserializedSpell = new Spell(spell.name, spell.power, spell.element);
  deserializedSpell.slot = spell.slot;
  deserializedSpell.consumedPower = spell.consumedPower;
  deserializedSpell.affixes = spell.affixes.map(affix =>
    deserializeAffix(affix)
  );
  return deserializedSpell;
}
