import Spell from "./Spell";
import deserializeEffect from "../effects/EffectDeserializer";

export default function deserializeSpell(spell: Spell): Spell {
  const deserializedSpell = new Spell(
    spell.name,
    deserializeEffect(spell.effect)
  );
  deserializedSpell.slot = spell.slot;
  return deserializedSpell;
}
