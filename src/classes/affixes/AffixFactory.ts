import store from "@/store";
import Affix from "./Affix";
import First from "./First";
import { getRandomEnumValue } from "../utils";
import SpellElement from "../spells/SpellElement";
import Exile from "./Exile";
import Neighbour from "./Neighbour";

export default function generateRandomAffix(): Affix {
  const entropy = store.state.entropy;
  const random = Math.random();

  if (random <= 1 / 3) {
    return new First(1 + entropy / 10);
  } else if (random <= 2 / 3) {
    return new Exile(1 + entropy / 10);
  } else {
    return new Neighbour(1 + entropy / 8, getRandomEnumValue(SpellElement));
  }
}
