<template>
  <div class="value-with-logo">
    <div class="container">
      <img :src="imageUrl" class="logo" :title="tooltip" />
      <div class="value">: {{ value }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { getImageUrl } from "@/classes/utils";

@Component
export default class TopValueWithLogo extends Vue {
  @Prop() logoName!: string;
  @Prop() tooltip!: string;
  @Prop() value!: number;

  get imageUrl() {
    return getImageUrl(this.logoName);
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
}

.logo {
  max-width: 100%;
  max-height: 100%;
}

.value {
  font-size: 24px;
}
</style>
