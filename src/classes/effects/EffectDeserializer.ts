import Effect from "./Effect";
import { Addition, Multiply } from ".";
import EffectClass from "./EffectClass";
import EffectFactory from "./EffectFactory";

export default function deserializeEffect(effect: Effect): Effect {
  if (effect.class === EffectClass.ADDITION) {
    const addition = effect as Addition;
    return EffectFactory.generateAddition(addition.addend);
  } else if (effect.class === EffectClass.MULTIPLY) {
    const addition = effect as Multiply;
    return EffectFactory.generateMultiply(addition.multiplier);
  } else if (effect.class === EffectClass.INVOKE) {
    return EffectFactory.generateInvoke();
  } else {
    throw "Unknown effect to deserialize.";
  }
}
