<template>
  <div>
    <h3>Spell chain</h3>
    <spell-slot
      v-for="(spell, index) in chain.spells"
      :spell="spell"
      :key="index"
      insertable="true"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";
import Chain from "../classes/chain/Chain";
import SpellSlot from "./SpellSlot.vue";

@Component({
  components: {
    SpellSlot
  }
})
export default class Shop extends Vue {
  @State chain!: Chain;
}
</script>

<style></style>
