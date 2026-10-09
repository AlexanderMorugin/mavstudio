<template>
  <div class="logoForFooter">
    <div
      :class="[
        'logoForFooter__bottomLogo',
        { logoForFooter__bottomLogo_white: props.theme === 'white' },
      ]"
    >
      <span>Mav</span>
      <span
        :class="[
          'logoForFooter__bottomLogoAccent',
          { logoForFooter__bottomLogoAccent_white: props.theme === 'white' },
        ]"
        >S</span
      >
      <span>tudio</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  theme?: string;
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

  &__bottomLogo {
    font-family: "Oswald-SemiBold", sans-serif;
    font-size: 140px;
    letter-spacing: -6%;
    color: $white-mask-three;

    @media (max-width: 767px) {
      font-size: 100px;
    }

    @media (max-width: 576px) {
      font-size: 80px;
    }

    &_white {
      color: $black-mask-two;
    }
  }

  &__bottomLogoAccent {
    color: $orange-mask-one;

    &_white {
      color: $orange-one;
    }
  }
}
</style>
