<template>
  <div id="app">
    <Library />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Library from "./components/Library.vue";

@Component({
  components: {
    Library
  }
})
export default class App extends Vue {
  created() {
    this.loop();
  }

  loop() {
    this.$store.state.chain.invoke();
    requestAnimationFrame(this.loop);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
