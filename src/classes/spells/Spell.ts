import SpellElement from "./SpellElement";
import Affix from "../affixes/Affix";
import Chain from "../chain/Chain";
import { Rarity } from "../RarityManager";

export default class Spell {
  rarity: Rarity;
  slot: number | undefined;
  element: SpellElement;
  affixes: Affix[] = [];

  constructor(rarity: Rarity, element: SpellElement) {
    this.rarity = rarity;
    this.element = element;
  }

  cast(input: number, chain: Chain): number {
    return (
      input +
      this.rarity.power *
        this.affixes.reduce((acc: number, val: Affix): number => {
          return acc * val.checkConditions(this, chain);
        }, 1)
    );
  }
}
