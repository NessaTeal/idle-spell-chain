import store from "@/store";
import Spell from "./Spell";
import EffectFactory from "../effects/EffectFactory";

export default class SpellFactory {
  static generateSpell(): Spell {
    const variedEntropy = store.state.entropy * (1 + Math.random() / 10);
    const effect = EffectFactory.generateRandomEffect();
    return new Spell("New spell", variedEntropy, effect);
  }
}
