<template>
  <div>
    <h3>Library</h3>
    <div class="library">
      <spell-slot
        v-for="(spell, index) in spells"
        :key="index"
        :spell="spell"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";
import SpellSlot from "./SpellSlot.vue";
import Spell from "@/classes/spells/Spell";

@Component({
  components: {
    SpellSlot,
  },
})
export default class Library extends Vue {
  @State spells!: Spell[];
}
</script>

<style>
.library {
  display: flex;
  flex-wrap: wrap;
}
</style>
