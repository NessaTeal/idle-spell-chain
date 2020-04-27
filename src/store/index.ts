import Vue from "vue";
import Vuex from "vuex";
import SpellElement from "@/classes/spells/SpellElement";
import Spell from "@/classes/spells/Spell";
import Chain from "@/classes/chain/Chain";
import SpellFactory from "@/classes/spells/SpellFactory";
import SaveFile from "@/classes/SaveFile";
import deserializeChain from "@/classes/chain/ChainDeserializer";
import deserializeSpell from "@/classes/spells/SpellDeserializer";

Vue.use(Vuex);

const SPELL_COST_INCREASE = 1.6;
const SPELL_COST_DECREASE = 0.15;
const ENTROPY_COST_INCREASE = 1.5;
const SLOT_COST_INCREASE = 10;

export default new Vuex.Store({
  state: {
    spells: [
      new Spell("Small adder", 1, SpellElement.LIGHT),
      new Spell("Doubler", 1, SpellElement.FIRE),
      new Spell("Invoker", 1, SpellElement.ICE)
    ],
    mana: 0,
    entropy: 1,
    chain: Chain.emptyChain(),
    dropzones: new Array<Element>(),
    spellCost: 10,
    minimalSpellCost: 10,
    entropyCost: 100,
    slotCost: 1000
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
      if (state.mana < state.spellCost) {
        return;
      }

      state.mana -= state.spellCost;
      state.spellCost *= SPELL_COST_INCREASE;
      state.spells.push(SpellFactory.generateSpell());
    },
    buyNewSlot(state) {
      if (state.mana < state.slotCost) {
        return;
      }

      state.mana -= state.slotCost;
      state.slotCost *= SLOT_COST_INCREASE;
      state.chain.spells.push(undefined);
    },
    increaseEntropy(state) {
      if (state.mana < state.entropyCost) {
        return;
      }

      state.mana -= state.entropyCost;
      state.entropyCost *= ENTROPY_COST_INCREASE;
      state.entropy++;

      state.minimalSpellCost = state.entropy * 10;
      state.spellCost = Math.max(state.minimalSpellCost, state.spellCost);
    },
    mergeSpells(state) {
      state.spells.forEach(spell => {
        const increase = spell.power / 50 + spell.consumedPower;
        state.chain.spells.forEach(chainSpell => {
          if (chainSpell) {
            chainSpell.consumedPower += increase;
          }
        });
      });

      Vue.set(state, "spells", []);
    },
    adjustSpellCost(state, { delta }) {
      if (state.spellCost > state.minimalSpellCost) {
        const spellCostDecrease =
          state.spellCost * SPELL_COST_DECREASE * (delta / 1000);
        state.spellCost -= spellCostDecrease;
        state.spellCost = Math.max(state.minimalSpellCost, state.spellCost);
      }
    },
    save(state) {
      const saveFile = {
        spells: state.spells,
        chain: state.chain,
        mana: state.mana,
        entropy: state.entropy,
        slotCost: state.slotCost,
        spellCost: state.spellCost,
        entropyCost: state.entropyCost,
        minimalSpellCost: state.minimalSpellCost
      };

      localStorage.setItem("saveFile", JSON.stringify(saveFile));
    },
    load(state) {
      const saveFileString = localStorage.getItem("saveFile");
      if (saveFileString != null) {
        const saveFile = JSON.parse(saveFileString) as SaveFile;
        Vue.set(state, "mana", saveFile.mana);
        Vue.set(state, "entropy", saveFile.entropy);
        Vue.set(state, "slotCost", saveFile.slotCost);
        Vue.set(state, "spellCost", saveFile.spellCost);
        Vue.set(state, "entropyCost", saveFile.entropyCost);
        Vue.set(state, "minimalSpellCost", saveFile.minimalSpellCost);
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
