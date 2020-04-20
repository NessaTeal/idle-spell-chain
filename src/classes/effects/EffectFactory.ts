import store from "@/store";
import { Addition, Multiply, Invoke } from ".";
import Effect from "./Effect";
import { ADDITION_STARTING_POWER } from "./Addition";
import { MULTIPLY_STARTING_POWER } from "./Multiply";

export default class EffectFactory {
  static generateRandomEffect(): Effect {
    const variedEntropy = store.state.entropy * (1 + Math.random() / 10);
    const random = Math.random();

    if (random <= 0.5) {
      return new Multiply(MULTIPLY_STARTING_POWER + variedEntropy / 5);
    } else {
      return new Addition(ADDITION_STARTING_POWER + variedEntropy * 2);
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
