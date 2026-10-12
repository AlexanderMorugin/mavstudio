<template>
  <p :class="['paragraphSmall', { paragraphSmall_center: props.center }]">
    <slot />
  </p>
</template>

<script lang="ts" setup>
const props = defineProps<{
  center?: boolean;
}>();
</script>

<style lang="scss" scoped>
.paragraphSmall {
  font-size: 14px;
  line-height: 1.3;
  color: $grey-three;

  @media (max-width: 767px) {
    font-size: 12px;
  }

  &_center {
    text-align: center;
  }
}
</style>
