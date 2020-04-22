import Effect from "./Effect";
import EffectClass from "./EffectClass";

const ADDITION_STARTING_POWER = 1.5;

export default class Addition implements Effect {
  class = EffectClass.ADDITION;

  apply(input: number, spellPower: number): number {
    return input + (ADDITION_STARTING_POWER + spellPower * 2);
  }
}
