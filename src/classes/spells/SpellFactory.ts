import Spell from "./Spell";
import { Multiply, Addition } from "../effects";

export default class SpellFactory {
  static generateSpell(): Spell {
    const random = Math.random();
    if (random < 0.5) {
      const secondRandom = Math.random() * 5 + 1;
      return new Spell("Multiplier", new Multiply(secondRandom));
    } else {
      const secondRandom = Math.random() * 49 + 1;
      return new Spell("Adder", new Addition(secondRandom));
    }
  }
}
