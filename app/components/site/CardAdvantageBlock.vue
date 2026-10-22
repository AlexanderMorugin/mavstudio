<template>
  <section class="siteCardAdvantageBlock">
    <ContainerPage desktopPadding class="siteCardAdvantageBlock__container">
      <div class="siteCardAdvantageBlock__textBox">
        <div class="siteCardAdvantageBlock__titleBox">
          <span
            class="siteCardAdvantageBlock__title siteCardAdvantageBlock__title_one"
            >Недостатки</span
          >
          <IconSmartBoyFill
            class="siteCardAdvantageBlock__icon siteCardAdvantageBlock__icon_one siteCardAdvantageBlock__icon_bad"
          />
        </div>
        <ParagraphNormal class="siteCardAdvantageBlock__text">
          Недостатки Недостатки Недостатки Недостатки Недостатки Недостатки
          Недостатки
        </ParagraphNormal>
      </div>
      <div class="siteCardAdvantageBlock__textBox">
        <div class="siteCardAdvantageBlock__titleBox">
          <span
            class="siteCardAdvantageBlock__title siteCardAdvantageBlock__title_two"
            >Достоинства</span
          >

          <IconStarFill
            class="siteCardAdvantageBlock__icon siteCardAdvantageBlock__icon_one"
          />
          <IconStarFill
            class="siteCardAdvantageBlock__icon siteCardAdvantageBlock__icon_two"
          />
          <IconStarFill
            class="siteCardAdvantageBlock__icon siteCardAdvantageBlock__icon_three"
          />
          <IconStarFill
            class="siteCardAdvantageBlock__icon siteCardAdvantageBlock__icon_four"
          />
          <IconStarFill
            class="siteCardAdvantageBlock__icon siteCardAdvantageBlock__icon_five"
          />
        </div>

        <ParagraphNormal black class="siteCardAdvantageBlock__text">
          Достоинства Достоинства Достоинства Достоинства Достоинства
          Достоинства Достоинства
        </ParagraphNormal>
      </div>
    </ContainerPage>
  </section>
</template>

<script setup lang="ts">
import type { ISite } from "~/types/site";

const props = defineProps<{
  siteData: ISite;
}>();
</script>

<style lang="scss" scoped>
.siteCardAdvantageBlock {
  background: $gradient-white-one;
  padding-top: 40px;
  padding-bottom: 40px;

  @media (max-width: 767px) {
    padding-top: 80px;
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  &__textBox {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-top: 86px;

    @media (max-width: 767px) {
      padding-top: 30px;
    }
  }

  &__titleBox {
    position: absolute;
    top: 0;
    left: 0;
  }

  &__title {
    position: relative;
    font-family: "Montserrat-Bold", sans-serif;
    font-size: 100px;
    text-shadow: 0px 5px 60px $blue-one;
    z-index: 5;

    @media (max-width: 767px) {
      font-size: 36px;
      text-shadow: 0px 5px 20px $blue-mask-two;
    }

    &_one {
      color: $black-mask-three;
    }

    &_two {
      color: $green-four;
    }
  }

  &__icon {
    position: absolute;
    top: -30px;
    width: 100px;
    height: 100px;
    fill: $red-one;
    opacity: 0.7;

    @media (max-width: 767px) {
      top: -15px;
      width: 40px;
      height: 40px;
    }

    &_one {
      right: -50px;

      @media (max-width: 767px) {
        right: -20px;
      }
    }

    &_two {
      right: 25px;

      @media (max-width: 767px) {
        right: 10px;
      }
    }

    &_three {
      right: 100px;

      @media (max-width: 767px) {
        right: 40px;
      }
    }

    &_four {
      right: 175px;

      @media (max-width: 767px) {
        right: 70px;
      }
    }

    &_five {
      right: 250px;

      @media (max-width: 767px) {
        right: 100px;
      }
    }

    &_bad {
      fill: $grey-mask-two;
    }
  }

  &__text {
    position: relative;
    padding-left: 90px;

    @media (max-width: 767px) {
      padding-left: 30px;
    }
  }
}
</style>
