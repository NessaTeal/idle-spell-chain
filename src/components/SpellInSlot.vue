<template>
  <div @mousedown="startDrag" class="spell" :style="dynamicStyle">
    <img
      :title="spell.element"
      :src="spellElementImageUrl"
      class="element-icon"
    />
    <p>Power: {{ spell.totalPower().toFixed(3) }}</p>
    <div v-for="(affix, index) in spell.affixes" :key="index">
      <p>Affix: {{ affix.class }}</p>
      <p v-if="affix.class === 'Neighbour'">
        Neighbour element: {{ affix.element }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Spell from "@/classes/spells/Spell";
import { getImageUrl } from "@/classes/utils";

@Component
export default class SpellInSlot extends Vue {
  @Prop(Spell) spell!: Spell;
  drag = false;
  left = 0;
  top = 0;

  startDrag() {
    this.drag = true;
    this.left = 0;
    this.top = 0;

    document.onmousemove = (event: MouseEvent) => {
      this.left += event.movementX;
      this.top += event.movementY;
    };

    document.onmouseup = (event: MouseEvent) => {
      const dropzones = this.$store.state.dropzones;

      for (let i = 0; i < dropzones.length; i++) {
        const boundingRect = dropzones[i].getBoundingClientRect();
        if (
          event.clientX >= boundingRect.left &&
          event.clientX < boundingRect.right &&
          event.clientY >= boundingRect.top &&
          event.clientY < boundingRect.bottom
        ) {
          this.$store.commit("moveSpell", { spell: this.spell, slot: i });
          break;
        }
      }

      this.drag = false;
    };
  }

  get dynamicStyle() {
    return this.drag
      ? `transform: translate(${this.left}px, ${this.top}px);`
      : "";
  }

  get spellElementImageUrl() {
    return getImageUrl(this.spell.element);
  }
}
</script>

<style scoped>
.spell {
  height: 100%;
  width: 100%;
  user-select: none;
  background: #e0e0e0;
}

.element-icon {
  width: 100%;
  pointer-events: none;
}
</style>
