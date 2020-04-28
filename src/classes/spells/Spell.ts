import SpellElement from "./SpellElement";
import Affix from "../affixes/Affix";
import Chain from "../chain/Chain";

export default class Spell {
  name: string;
  power: number;
  consumedPower = 0;
  slot: number | undefined;
  element: SpellElement;
  affixes: Affix[] = [];

  constructor(name: string, entropy: number, element: SpellElement) {
    this.name = name;
    this.power = entropy;
    this.element = element;
  }

  totalPower(): number {
    return this.power + this.consumedPower;
  }

  cast(input: number, delta: number, chain: Chain): number {
    return (
      input +
      this.totalPower() *
        delta *
        this.affixes.reduce((acc: number, val: Affix): number => {
          return acc * val.checkConditions(this, chain);
        }, 1)
    );
  }
}
