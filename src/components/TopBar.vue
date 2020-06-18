<template>
  <div class="outer-container">
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
    <md-progress-bar :md-value="Math.floor(concentration)"></md-progress-bar>
    <md-button class="md-primary md-raised" @click="manuallyConcentrate"
      >Concentrate</md-button
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Mutation, State } from "vuex-class";
import TopValueWithLogo from "./TopValueWithLogo.vue";

@Component({
  components: {
    TopValueWithLogo,
  },
})
export default class TopBar extends Vue {
  @State mana!: number;
  @State entropy!: number;
  @State concentration!: number;

  @Mutation manuallyConcentrate!: () => void;
}
</script>

<style scoped>
.outer-container {
  display: flex;
  width: 640px;
  justify-content: center;
  flex-direction: column;
  margin: auto;
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 32px;
}

.value-with-logo {
  height: 100%;
  flex: 1;
}
</style>
