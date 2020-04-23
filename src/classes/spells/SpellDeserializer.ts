import Spell from "./Spell";
import deserializeEffect from "../effects/EffectDeserializer";

export default function deserializeSpell(spell: Spell): Spell {
  const deserializedSpell = new Spell(
    spell.name,
    spell.power,
    deserializeEffect(spell.effect)
  );
  deserializedSpell.slot = spell.slot;
  deserializedSpell.consumedPower = spell.consumedPower;
  return deserializedSpell;
}
