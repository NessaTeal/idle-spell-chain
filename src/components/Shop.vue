<template>
  <div>
    <button @click="buyNewSpell">
      Buy new random spell: {{ Math.ceil(spellCost) }}
    </button>
    <button @click="increaseEntropy">
      Increase entropy: {{ Math.ceil(entropyCost) }}
    </button>
    <button @click="buyNewSlot">
      But additional slot: {{ Math.ceil(slotCost) }}
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Mutation, State } from "vuex-class";

@Component
export default class Shop extends Vue {
  @State spellCost!: number;
  @State slotCost!: number;
  @State entropyCost!: number;

  @Mutation buyNewSpell!: () => void;
  @Mutation buyNewSlot!: () => void;
  @Mutation increaseEntropy!: () => void;
}
</script>

<style></style>
