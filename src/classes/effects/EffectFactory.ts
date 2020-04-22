import store from "@/store";
import { Addition, Multiply, Invoke } from ".";
import Effect from "./Effect";

export default class EffectFactory {
  static generateRandomEffect(): Effect {
    const random = Math.random();

    if (random <= 0.5) {
      return new Multiply();
    } else {
      return new Addition();
    }
  }

  static generateAddition(): Addition {
    return new Addition();
  }

  static generateMultiply(): Multiply {
    return new Multiply();
  }

  static generateInvoke(): Invoke {
    return new Invoke(argument => store.commit("addMana", argument));
  }
}
