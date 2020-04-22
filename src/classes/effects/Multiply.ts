import Effect from "./Effect";
import EffectClass from "./EffectClass";

const MULTIPLY_STARTING_POWER = 2;

export default class Multiply implements Effect {
  class = EffectClass.MULTIPLY;

  apply(input: number, spellPower: number): number {
    return input * (MULTIPLY_STARTING_POWER + spellPower / 5);
  }
}
