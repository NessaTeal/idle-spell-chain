<template>
  <div
    @mousedown="startDrag"
    :class="'spell ' + spell.effect.class"
    :style="dynamicStyle"
  >
    <b>{{ spell.name }}</b>
    <p>Power: {{ spell.power.toFixed(3) }}</p>
    <p>{{ spell.effect.class }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Spell from "@/classes/spells/Spell";

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
}
</script>

<style scoped>
.spell {
  height: 100px;
  width: 100px;
  user-select: none;
}

.adder {
  background: lightgreen;
}

.multiplier {
  background: palevioletred;
}

.invoker {
  background: goldenrod;
}
</style>
