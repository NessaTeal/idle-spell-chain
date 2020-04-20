import Vue from "vue";
import Vuex from "vuex";
import Spell from "@/classes/spells/Spell";
import Chain from "@/classes/chain/Chain";
import SpellFactory from "@/classes/spells/SpellFactory";
import SaveFile from "@/classes/SaveFile";
import EffectFactory from "@/classes/effects/EffectFactory";
import deserializeChain from "@/classes/chain/ChainDeserializer";
import deserializeSpell from "@/classes/spells/SpellDeserializer";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    spells: [
      new Spell("Small adder", EffectFactory.generateAddition(2)),
      new Spell("Doubler", EffectFactory.generateMultiply(2)),
      new Spell("Tripler", EffectFactory.generateMultiply(3)),
      new Spell("Invoker", EffectFactory.generateInvoke())
    ],
    mana: 0,
    entropy: 1,
    chain: Chain.emptyChain(),
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
      Vue.set(state.chain.spells, slot, spell);
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

      state.chain.spells.push(undefined);
    },
    increaseEntropy(state) {
      if (state.mana < 10000) {
        return;
      }

      state.mana -= 10000;
      state.entropy++;
    },
    save(state) {
      const saveFile = {
        spells: state.spells,
        chain: state.chain,
        mana: state.mana,
        entropy: state.entropy
      };

      localStorage.setItem("saveFile", JSON.stringify(saveFile));
    },
    load(state) {
      const saveFileString = localStorage.getItem("saveFile");
      if (saveFileString != null) {
        const saveFile = JSON.parse(saveFileString) as SaveFile;
        Vue.set(state, "mana", saveFile.mana);
        Vue.set(state, "entropy", saveFile.entropy);
        Vue.set(state, "chain", deserializeChain(saveFile.chain));
        Vue.set(
          state,
          "spells",
          saveFile.spells.map(spell => deserializeSpell(spell))
        );
      }
    }
  },
  actions: {},
  modules: {}
});
