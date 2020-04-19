<template>
  <div>
    <button @click="buyNewSpell">Buy new random spell: 1000</button>
    <button @click="increaseEntropy">Increase entropy: 10000</button>
    <button @click="buyNewSlot">But additional slot: 100000</button>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { Mutation } from "vuex-class";

@Component
export default class Shop extends Vue {
  @Mutation buyNewSpell;
  @Mutation buyNewSlot;
  @Mutation increaseEntropy;
}
</script>

<style></style>
