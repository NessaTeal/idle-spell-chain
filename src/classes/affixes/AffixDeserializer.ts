import Affix from "./Affix";
import First from "./First";
import Neighbour from "./Neighbour";
import Exile from "./Exile";

export default function deserializeAffix(affix: Affix) {
  if (affix.class === "First") {
    return new First(affix.multiplier);
  } else if (affix.class === "Exile") {
    return new Exile(affix.multiplier);
  } else if (affix.class === "Neighbour") {
    const neighbour = affix as Neighbour;
    return new Neighbour(neighbour.multiplier, neighbour.element);
  } else {
    throw "Unknown affix type";
  }
}
