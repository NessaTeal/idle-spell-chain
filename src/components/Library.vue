<template>
  <div class="outer-container">
    <top-bar />
    <shop />
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
        <spell-chain />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SpellSlot from "./SpellSlot.vue";
import TopBar from "./TopBar.vue";
import Shop from "./Shop.vue";
import SpellChain from "./SpellChain.vue";

@Component({
  components: {
    SpellSlot,
    TopBar,
    Shop,
    SpellChain
  }
})
export default class Library extends Vue {
  get allSpells() {
    return this.$store.state.spells;
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
