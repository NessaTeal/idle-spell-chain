import Chain from "./Chain";
import deserializeSpell from "../spells/SpellDeserializer";

export default function deserializeChain(chain: Chain): Chain {
  return new Chain(
    chain.spells.map(spell => (spell ? deserializeSpell(spell) : undefined))
  );
}
