<template>
  <div>
    <div>Mana: {{ Math.floor(mana) }}</div>
    <div>Entropy: {{ entropy }}</div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TopBar extends Vue {
  get mana() {
    return this.$store.state.mana;
  }

  get entropy() {
    return this.$store.state.entropy;
  }
}
</script>

<style></style>
