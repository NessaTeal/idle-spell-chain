import store from "@/store";
import { Addition, Multiply } from ".";
import Effect from "./Effect";

export default class EffectFactory {
  static generateEffect(): Effect {
    const variedEntropy = store.state.entropy * (1 + Math.random() / 10);
    const random = Math.random();

    if (random <= 0.5) {
      return new Multiply(1.1 + variedEntropy / 20);
    } else {
      return new Addition(1 + variedEntropy);
    }
  }
}
