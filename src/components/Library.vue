<template>
  <div class="outer-container">
    <div>Mana: {{ Math.floor(mana) }}</div>
    <button @click="buyNewSpell">Buy new random spell: 1000</button>
    <button @click="buyNewSlot">But additional slot: 100000</button>
    <div class="inner-container">
      <div>
        <spell-slot
          v-for="(spell, index) in allSpells"
          :key="index"
          :spell="spell"
        />
      </div>
      <div>
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

@Component({
  components: {
    SpellSlot
  }
})
export default class Library extends Vue {
  get allSpells() {
    return this.$store.state.spells;
  }

  get chain() {
    return this.$store.state.chain;
  }

  get mana() {
    return this.$store.state.mana;
  }

  buyNewSpell() {
    this.$store.commit("buyNewSpell");
  }

  buyNewSlot() {
    this.$store.commit("buyNewSlot");
  }
}
</script>

<style>
.outer-container {
  display: flex;
  flex-direction: column;
}

.inner-container {
  display: flex;
}
</style>
