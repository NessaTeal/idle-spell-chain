import SpellElement from "./SpellElement";
import Affix from "../affixes/Affix";
import Chain from "../chain/Chain";

export default class Spell {
  power: number;
  consumedPower = 0;
  slot: number | undefined;
  element: SpellElement;
  affixes: Affix[] = [];

  constructor(entropy: number, element: SpellElement) {
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
