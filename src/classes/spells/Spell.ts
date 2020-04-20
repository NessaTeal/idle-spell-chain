import Effect from "../effects/Effect";
import deserialize from "../effects/EffectDeserializer";

export default class Spell {
  name!: string;
  effect!: Effect;
  slot: number | undefined;

  constructor(name: string, effect: Effect) {
    this.name = name;
    this.effect = effect;
  }

  static deserialize(spell: Spell): Spell {
    const deserializedSpell = new Spell(spell.name, deserialize(spell.effect));
    deserializedSpell.slot = spell.slot;
    return deserializedSpell;
  }
}
