<template>
  <div>
    <md-button class="md-raised" @click="buyNewSpell">
      Buy new random spell: {{ Math.ceil(spellCost) }}
    </md-button>
    <md-button class="md-raised" @click="increaseEntropy">
      Increase entropy: {{ Math.ceil(entropyCost) }}
    </md-button>
    <md-button class="md-raised" @click="buyNewSlot">
      But additional slot: {{ Math.ceil(slotCost) }}
    </md-button>
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
