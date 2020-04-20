import store from "@/store";
import { Addition, Multiply, Invoke } from ".";
import Effect from "./Effect";

export default class EffectFactory {
  static generateRandomEffect(): Effect {
    const variedEntropy = store.state.entropy * (1 + Math.random() / 10);
    const random = Math.random();

    if (random <= 0.5) {
      return new Multiply(1.1 + variedEntropy / 20);
    } else {
      return new Addition(1 + variedEntropy);
    }
  }

  static generateAddition(addend: number): Addition {
    return new Addition(addend);
  }

  static generateMultiply(multiplier: number): Multiply {
    return new Multiply(multiplier);
  }

  static generateInvoke(): Invoke {
    return new Invoke(argument => store.commit("addMana", argument));
  }
}
