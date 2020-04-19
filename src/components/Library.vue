<template>
  <div class="outer-container">
    <top-bar />
    <button @click="buyNewSpell">Buy new random spell: 1000</button>
    <button @click="increaseEntropy">Increase entropy: 10000</button>
    <button @click="buyNewSlot">But additional slot: 100000</button>
    <div class="inner-container">
      <div class="left">
        <h3>Library</h3>
        <div class="library">
          <spell-slot
            v-for="(spell, index) in allSpells"
            :key="index"
            :spell="spell"
          />
        </div>
      </div>
      <div class="right">
        <h3>Spell chain</h3>
        <spell-slot
          v-for="(spell, index) in chain.spells"
          :spell="spell"
          :key="index"
          insertable="true"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SpellSlot from "./SpellSlot.vue";
import TopBar from "./TopBar.vue";

@Component({
  components: {
    SpellSlot,
    TopBar
  }
})
export default class Library extends Vue {
  get allSpells() {
    return this.$store.state.spells;
  }

  get chain() {
    return this.$store.state.chain;
  }

  buyNewSpell() {
    this.$store.commit("buyNewSpell");
  }

  buyNewSlot() {
    this.$store.commit("buyNewSlot");
  }

  increaseEntropy() {
    this.$store.commit("increaseEntropy");
  }
}
</script>

<style>
.outer-container {
  display: flex;
  flex-direction: column;
  align-content: center;
}

.inner-container {
  display: flex;
  width: 640px;
  margin: auto;
}

.left {
  flex: 1;
}

.library {
  display: flex;
  flex-wrap: wrap;
}
</style>
