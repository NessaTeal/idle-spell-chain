import store from "../store/index";

export default interface Effect {
  apply(input: number): number;
}

export class Adder implements Effect {
  addend!: number;
  description: string;
  class = "adder";

  constructor(addend: number) {
    this.addend = addend;
    this.description = `Increase number by ${this.addend.toFixed(2)}`;
  }

  apply(input: number): number {
    return input + this.addend;
  }
}

export class Multiply implements Effect {
  multiplier!: number;
  description: string;
  class = "multiplier";

  constructor(multiplier: number) {
    this.multiplier = multiplier;
    this.description = `Multiply number by ${this.multiplier.toFixed(2)}`;
  }

  apply(input: number): number {
    return input * this.multiplier;
  }
}

export class Invoke implements Effect {
  description = `Add current number as mana`;
  class = "invoker";

  apply(input: number): number {
    store.commit("addMana", { mana: input });
    return input;
  }
}
