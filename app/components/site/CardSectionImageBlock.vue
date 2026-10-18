<template>
  <section class="siteCardSectionImage">
    <span class="siteCardSectionImage__text siteCardSectionImage__text_two"
      >Разрабатываем</span
    >
    <span class="siteCardSectionImage__text siteCardSectionImage__text_one"
      >сайты</span
    >
    <span class="siteCardSectionImage__text siteCardSectionImage__text_seven"
      >Лендинги</span
    >
    <span class="siteCardSectionImage__text siteCardSectionImage__text_five"
      >заказу</span
    >
    <!-- <span class="siteCardSectionImage__text siteCardSectionImage__text_three"
      >Лендинг</span
    > -->
    <!-- <span class="siteCardSectionImage__text siteCardSectionImage__text_four"
      >Лендинг</span
    > -->

    <!-- <span class="siteCardSectionImage__text siteCardSectionImage__text_six"
      >Лендинг</span
    > -->
  </section>
</template>

<style lang="scss" scoped>
.siteCardSectionImage {
  position: relative;
  height: 200px;
  // border: 1px solid red;

  &__text {
    position: absolute;
    display: block;
    font-family: "Oswald-Bold", sans-serif;
    // letter-spacing: 1px;

    &_one {
      top: 20%;
      right: 20%;
      color: $orange-mask-four;
      text-shadow: 0 0 15px $orange-mask-two;
      animation: pulse 8s infinite;
    }

    &_two {
      top: -10%;
      left: 10%;
      color: $green-mask-four;
      text-shadow: 0 0 15px $green-mask-two;
      animation: pulse 10s infinite;
    }

    &_three {
      top: 30%;
      right: 30%;

      animation: pulse 12s infinite;
    }

    &_four {
      top: 40%;
      left: 30%;
      animation: pulse 14s infinite;
    }

    &_five {
      bottom: 15%;
      right: 15%;
      // text-shadow: 0 0 15px $white-mask-three;
      color: $green-mask-four;
      text-shadow: 0 0 15px $green-mask-two;
      animation: pulse 16s infinite;
    }

    &_six {
      bottom: 35%;
      right: 35%;
      animation: pulse 18s infinite;
    }

    &_seven {
      bottom: 15%;
      left: 0;

      color: $white-mask-five;
      text-shadow: 0 0 15px $white-mask-two;
      animation: pulse 20s infinite;
    }
  }
}

@keyframes pulse {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 1;
    // transform: scale(2) rotate(30deg);
    // transform: skew(20deg, 10deg);
    // transform: scale(2);
  }
  100% {
    opacity: 0;
    transform: scale(10);
  }
}
</style>
