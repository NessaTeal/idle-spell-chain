import Effect from "./Effect";
import EffectClass from "./EffectClass";
import EffectFactory from "./EffectFactory";

export default function deserializeEffect(effect: Effect): Effect {
  if (effect.class === EffectClass.ADDITION) {
    return EffectFactory.generateAddition();
  } else if (effect.class === EffectClass.MULTIPLY) {
    return EffectFactory.generateMultiply();
  } else if (effect.class === EffectClass.INVOKE) {
    return EffectFactory.generateInvoke();
  } else {
    throw "Unknown effect to deserialize.";
  }
}
