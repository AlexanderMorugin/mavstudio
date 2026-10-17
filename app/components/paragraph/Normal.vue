<template>
  <p
    :class="[
      'paragraphNormal',
      { paragraphNormal_center: props.center },
      { paragraphNormal_uppercase: props.uppercase },
      { paragraphNormal_black: props.black },
    ]"
  >
    <slot />
  </p>
</template>

<script lang="ts" setup>
const props = defineProps<{
  center?: boolean;
  uppercase?: boolean;
  black?: boolean;
}>();
</script>

<style lang="scss" scoped>
.paragraphNormal {
  font-size: 16px;
  line-height: 1.5;

  &_black {
    color: $black-one;
  }

  @media (max-width: 389px) {
    font-size: 14px;
  }

  &_center {
    text-align: center;
  }

  &_uppercase {
    text-transform: uppercase;
  }
}
</style>
