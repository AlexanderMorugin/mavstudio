<template>
  <p
    class="paragraphLarge"
    :class="[
      'paragraphLarge',
      { paragraphLarge_center: props.center },
      { paragraphLarge_bold: props.bold },
    ]"
  >
    <slot />
  </p>
</template>

<script lang="ts" setup>
const props = defineProps<{
  center?: boolean;
  bold?: boolean;
}>();
</script>

<style lang="scss" scoped>
.paragraphLarge {
  font-size: 24px;
  line-height: 1.5;

  @media (max-width: 767px) {
    font-size: 18px;
  }

  &_center {
    text-align: center;
  }

  &_bold {
    font-family: "Montserrat-SemiBold", sans-serif;
  }
}
</style>
