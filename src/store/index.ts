import Vue from "vue";
import Vuex from "vuex";
import Spell from "@/classes/spells/Spell";
import { Addition, Multiply, Invoke } from "@/classes/effects";
import Chain from "@/classes/Chain";
import SpellFactory from "@/classes/spells/SpellFactory";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    spells: [
      new Spell("Small adder", new Addition(2)),
      new Spell("Doubler", new Multiply(2)),
      new Spell("Tripler", new Multiply(3)),
      new Spell("Invoker", new Invoke())
    ],
    mana: 0,
    entropy: 1,
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

      state.spells.push(SpellFactory.generateSpell());
    },
    buyNewSlot(state) {
      if (state.mana < 100000) {
        return;
      }

      state.mana -= 100000;

      state.chain.spells.length++;
    },
    increaseEntropy(state) {
      if (state.mana < 10000) {
        return;
      }

      state.mana -= 10000;
      state.entropy++;
    }
  },
  actions: {},
  modules: {}
});
