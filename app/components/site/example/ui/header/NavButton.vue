<template>
  <button class="siteExampleUiHeaderNavButton">{{ props.title }}</button>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>

<style lang="scss" scoped>
.siteExampleUiHeaderNavButton {
  line-height: 1.5;
  color: $white-one;
  border-radius: $br-xxs;
  border: 1px solid $white-mask-three;
  padding: 5px 10px;
  transition: 0.2s ease;

  &:hover {
    border: 1px solid $orange-four;
  }
}
</style>
