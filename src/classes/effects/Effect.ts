import EffectClass from "./EffectClass";

export default interface Effect {
  apply(input: number, delta: number): number;
  class: EffectClass;
}
