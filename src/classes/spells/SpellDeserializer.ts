import Spell from "./Spell";
import deserializeAffix from "../affixes/AffixDeserializer";

export default function deserializeSpell(spell: Spell): Spell {
  const deserializedSpell = new Spell(spell.rarity, spell.element);
  deserializedSpell.slot = spell.slot;
  deserializedSpell.affixes = spell.affixes.map((affix) =>
    deserializeAffix(affix)
  );
  return deserializedSpell;
}
