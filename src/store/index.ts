import Vue from "vue";
import Vuex from "vuex";
import Spell from "@/classes/Spell";
import { Multiply, Adder, Invoke } from "@/classes/Effect";
import Chain from "@/classes/Chain";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    spells: [
      new Spell("Small adder", new Adder(2)),
      new Spell("Doubler", new Multiply(2)),
      new Spell("Tripler", new Multiply(3)),
      new Spell("Invoker", new Invoke())
    ],
    mana: 0,
    chain: new Chain(),
    dropzones: new Array<Element>()
  },
  mutations: {
    addMana(state, { mana }) {
      state.mana += mana;
    },
    addDropzone(state, { dropzone }) {
      state.dropzones.push(dropzone);
    },
    moveSpell(state, { spell, slot }) {
      const switchFromSpell = state.chain.spells.find(
        findSpell => findSpell && findSpell.slot === slot
      );

      if (spell.slot !== undefined) {
        Vue.set(state.chain.spells, spell.slot, switchFromSpell);
      } else {
        state.spells = state.spells.filter(
          filterSpell => filterSpell !== spell
        );
      }

      if (switchFromSpell) {
        switchFromSpell.slot = spell.slot;

        if (spell.slot === undefined) {
          state.spells.push(switchFromSpell);
        }
      }

      spell.slot = slot;
      state.chain.spells[slot] = spell;
    },
    buyNewSpell(state) {
      if (state.mana < 1000) {
        return;
      }

      state.mana -= 1000;

      const random = Math.random();
      if (random < 0.5) {
        const secondRandom = Math.random() * 5 + 1;
        state.spells.push(new Spell("Multiplier", new Multiply(secondRandom)));
      } else {
        const secondRandom = Math.random() * 49 + 1;
        state.spells.push(new Spell("Adder", new Adder(secondRandom)));
      }
    },
    buyNewSlot(state) {
      if (state.mana < 100000) {
        return;
      }

      state.mana -= 100000;

      state.chain.spells.length++;
    }
  },
  actions: {},
  modules: {}
});
