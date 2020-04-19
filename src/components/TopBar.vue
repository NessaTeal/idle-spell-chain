<template>
  <div>
    <div>Mana: {{ Math.floor(mana) }}</div>
    <div>Entropy: {{ entropy }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";

@Component
export default class TopBar extends Vue {
  @State mana!: number;
  @State entropy!: number;
}
</script>

<style></style>
