<template>
  <div id="app">
    <div class="outer-container">
      <top-bar />
      <shop />
      <div class="inner-container">
        <div class="left">
          <library />
        </div>
        <div class="right">
          <spell-chain />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Library from "./components/Library.vue";
import Shop from "./components/Shop.vue";
import SpellChain from "./components/SpellChain.vue";
import SpellSlot from "./components/SpellSlot.vue";
import TopBar from "./components/TopBar.vue";

@Component({
  components: {
    Library,
    Shop,
    SpellChain,
    SpellSlot,
    TopBar,
  },
})
export default class App extends Vue {
  lastTimestamp = 0;
  saveTimer = 15;

  created() {
    this.$store.commit("load");
    this.loop(0);
  }

  loop(timestamp: number) {
    const delta = (timestamp - this.lastTimestamp) / 1000;
    this.lastTimestamp = timestamp;

    this.$store.commit("adjustSpellCost", { delta });
    this.$store.commit("concentrate", {
      delta,
    });

    this.saveTimer -= delta;
    if (this.saveTimer < 0) {
      this.saveTimer = 15;
      this.$store.commit("save");
    }

    requestAnimationFrame(this.loop);
  }
}
</script>

<style>
#app {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
</style>
