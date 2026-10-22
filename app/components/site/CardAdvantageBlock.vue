<template>
  <section class="siteCardAdvantageBlock">
    <ContainerPage desktopPadding class="siteCardAdvantageBlock__container">
      <div class="siteCardAdvantageBlock__textBox">
        <span
          class="siteCardAdvantageBlock__title siteCardAdvantageBlock__title_one"
          >Недостатки</span
        >
        <div class="siteCardAdvantageBlock__line" />
        <ParagraphNormal class="siteCardAdvantageBlock__text">
          Недостатки Недостатки Недостатки Недостатки Недостатки Недостатки
          Недостатки
        </ParagraphNormal>
      </div>
      <div class="siteCardAdvantageBlock__textBox">
        <span
          class="siteCardAdvantageBlock__title siteCardAdvantageBlock__title_two"
          >Достоинства</span
        >
        <div class="siteCardAdvantageBlock__line" />
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
  // padding-top: 80px;
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

  &__title {
    position: absolute;
    top: 0;
    left: 0;
    font-family: "Montserrat-Bold", sans-serif;
    font-size: 100px;
    text-shadow: 0px 5px 60px $blue-one;

    @media (max-width: 767px) {
      font-size: 36px;
      color: $white-mask-three;
      text-shadow: 0px 5px 20px $blue-mask-two;
    }

    &_one {
      color: $black-mask-four;
    }

    &_two {
      color: $green-four;
    }
  }

  &__text {
    position: relative;
    padding-left: 90px;
    // padding-right: 80px;

    @media (max-width: 767px) {
      padding-left: 30px;
      // padding-right: 20px;
    }
  }
}
</style>
