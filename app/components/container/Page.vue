<template>
  <div
    :class="[
      'containerPage',
      { containerPage__desktopPadding: props.desktopPadding },
      { containerPage__mobilePadding: props.mobilePadding },
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  desktopPadding?: boolean;
  mobilePadding?: boolean;
}>();
</script>

<style lang="scss" scoped>
.containerPage {
  max-width: $screen-xxl;
  margin: 0 auto;
  overflow: hidden;

  // border: 1px solid red;

  &__desktopPadding {
    padding-left: 20px;
    padding-right: 20px;

    @media (max-width: 576px) {
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  &_mobilePadding {
    padding-left: 20px;
    padding-right: 20px;

    @media (max-width: 576px) {
      padding-left: 0;
      padding-right: 0;
    }
  }
}
</style>
