import Effect from "./Effect";

export default class Addition implements Effect {
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
