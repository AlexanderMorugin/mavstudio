<template>
  <footer class="footer">
    <div class="footer__bottomLogoBlock">
      <div
        :class="[
          'footer__bottomLogo',
          { footer__bottomLogo_white: props.theme === 'white' },
        ]"
      >
        <span>Mav</span>
        <span
          :class="[
            'footer__bottomLogoAccent',
            { footer__bottomLogoAccent_white: props.theme === 'white' },
          ]"
          >S</span
        >
        <span>tudio</span>
      </div>
    </div>
    <div>
      bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
      bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
      bla bla bla
    </div>
  </footer>
</template>

<script setup lang="ts">
const props = defineProps<{
  theme: string;
}>();
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 200px;
  overflow: hidden;
  margin-top: 60px;

  &__bottomLogoBlock {
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
  }

  &__bottomLogo {
    font-family: "Oswald-SemiBold", sans-serif;
    font-size: 140px;
    // line-height: 1;
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
