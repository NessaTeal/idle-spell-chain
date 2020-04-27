import SpellElement from "./SpellElement";

export default class Spell {
  name: string;
  power: number;
  consumedPower = 0;
  slot: number | undefined;
  element: SpellElement;

  constructor(name: string, entropy: number, element: SpellElement) {
    this.name = name;
    this.power = entropy;
    this.element = element;
  }

  totalPower(): number {
    return this.power + this.consumedPower;
  }

  cast(input: number, delta: number): number {
    return input + this.totalPower() * delta;
  }
}
