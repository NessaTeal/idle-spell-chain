import Effect from "./Effect";
import EffectClass from "./EffectClass";

export default class Invoke implements Effect {
  description = `Add current number as mana`;
  class = EffectClass.INVOKE;
  callback: (arg0: object) => void;

  constructor(callback: (arg0: object) => void) {
    this.callback = callback;
  }

  apply(input: number, spellPower: number, delta: number): number {
    this.callback({ mana: (input * delta) / 1000 });
    return input;
  }
}
