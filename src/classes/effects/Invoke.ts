import store from "../../store/index";
import Effect from "./Effect";

export default class Invoke implements Effect {
  description = `Add current number as mana`;
  class: string;

  constructor() {
    this.class = "asd";
  }

  apply(input: number, delta: number): number {
    store.commit("addMana", { mana: (input * delta) / 1000 });
    return input;
  }
}
