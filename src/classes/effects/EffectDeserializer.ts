import Effect from "./Effect";
import EffectClass from "./EffectClass";
import { Addition, Multiply, Invoke } from ".";
import { AdditionSerialized } from "./Addition";
import { MultiplySerialized } from "./Multiply";

export default function deserialize(effect: Effect) {
  if (effect) {
    //   const addition = (effect as unknown) as AdditionSerialized;
    //   return new Addition(addition.addend);
    //   // return new Invoke();
    // } else if (effect.class === EffectClass.MULTIPLY) {
    //   const addition = (effect as unknown) as MultiplySerialized;
    //   return new Multiply(addition.multiplier);
    //   // return new Invoke();
    // } else if (effect.class === EffectClass.INVOKE) {
    return new Invoke();
  } else {
    return new Invoke();
    throw "Unknown effect to deserialize.";
  }
}
