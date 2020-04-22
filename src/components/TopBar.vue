<template>
  <div class="container">
    <top-value-with-logo
      logoName="mana"
      tooltip="Mana, your primary resource"
      :value="Math.floor(mana)"
    />
    <top-value-with-logo
      logoName="entropy"
      tooltip="Entropy, increases quality of spells"
      :value="entropy"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";
import TopValueWithLogo from "./TopValueWithLogo.vue";

@Component({
  components: {
    TopValueWithLogo
  }
})
export default class TopBar extends Vue {
  @State mana!: number;
  @State entropy!: number;
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  width: 640px;
  justify-content: space-evenly;
  margin: auto;
  height: 32px;
}

.value-with-logo {
  height: 100%;
  flex: 1;
}
</style>
