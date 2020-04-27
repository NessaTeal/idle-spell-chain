import Spell from "./Spell";

export default function deserializeSpell(spell: Spell): Spell {
  const deserializedSpell = new Spell(spell.name, spell.power, spell.element);
  deserializedSpell.slot = spell.slot;
  deserializedSpell.consumedPower = spell.consumedPower;
  return deserializedSpell;
}
