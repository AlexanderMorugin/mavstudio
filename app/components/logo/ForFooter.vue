<template>
  <div class="logoForFooter">
    <div
      :class="[
        'logoForFooter__logo',
        { logoForFooter__logo_modal: props.modal },
      ]"
    >
      <span>Mav</span>
      <span class="logoForFooter__accent">S</span>
      <span>tudio</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modal?: boolean;
}>();
</script>

<style lang="scss" scoped>
.logoForFooter {
  display: flex;
  justify-content: center;
  height: 125px;
  overflow: hidden;

  @media (max-width: 767px) {
    height: 90px;
  }

  @media (max-width: 576px) {
    height: 73px;
  }

  &__logo {
    font-family: "Oswald-SemiBold", sans-serif;
    font-size: 140px;
    letter-spacing: -6%;
    color: $white-mask-two;

    @media (max-width: 767px) {
      font-size: 100px;
    }

    @media (max-width: 576px) {
      font-size: 80px;
    }

    &_modal {
      color: $white-mask-three;
    }
  }

  &__accent {
    color: $orange-one;
  }
}
</style>
