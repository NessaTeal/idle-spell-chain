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

<script>
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";
import SpellSlot from "./SpellSlot";

@Component({
  components: {
    SpellSlot
  }
})
export default class Shop extends Vue {
  @State chain;
}
</script>

<style></style>
