<template>
  <div class="slot" ref="box">
    <spell-in-slot v-if="spell" :spell="spell"> </spell-in-slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Spell from "@/classes/spells/Spell";
import SpellInSlot from "./SpellInSlot.vue";

@Component({
  components: {
    SpellInSlot
  }
})
export default class Scroll extends Vue {
  @Prop(Spell) spell!: Spell;
  @Prop({ default: false }) insertable!: boolean;

  mounted() {
    if (this.insertable) {
      this.$store.commit("addDropzone", { dropzone: this.$refs.box });
    }
  }
}
</script>

<style scoped>
.slot {
  height: 280px;
  width: 150px;
  border: 1px solid red;
}
</style>
