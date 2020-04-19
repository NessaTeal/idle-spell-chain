import store from "../../store/index";
import Effect from "./Effect";

export default class Invoke implements Effect {
  description = `Add current number as mana`;
  class = "invoker";

  apply(input: number): number {
    store.commit("addMana", { mana: input });
    return input;
  }
}
