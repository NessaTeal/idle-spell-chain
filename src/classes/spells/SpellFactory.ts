import Spell from "./Spell";
import EffectFactory from "../effects/EffectFactory";

export default class SpellFactory {
  static generateSpell(): Spell {
    const effect = EffectFactory.generateRandomEffect();
    return new Spell("New spell", effect);
  }
}
