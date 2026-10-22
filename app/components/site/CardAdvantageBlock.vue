<template>
  <section class="siteCardAdvantageBlock">
    <ContainerPage desktopPadding class="siteCardAdvantageBlock__container">
      <div class="siteCardAdvantageBlock__textBox">
        <span class="siteCardAdvantageBlock__title">Достоинства</span>
        <ParagraphNormal>
          Достоинства Достоинства Достоинства Достоинства Достоинства
          Достоинства Достоинства
        </ParagraphNormal>
      </div>
      <div class="siteCardAdvantageBlock__textBox">
        <span
          class="siteCardAdvantageBlock__title siteCardAdvantageBlock__title_two"
          >Недостатки</span
        >
        <ParagraphNormal black>
          Недостатки Недостатки Недостатки Недостатки Недостатки Недостатки
          Недостатки
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
  padding-top: 80px;
  padding-bottom: 40px;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  &__textBox {
    display: flex;
    flex-direction: column;
    gap: 2px;
    // width: 100%;
    // background: $white-one;
    // border-radius: 6px;
    // padding: 10px;

    // border: 1px solid red;
  }

  &__title {
    font-family: "Montserrat-SemiBold", sans-serif;
    letter-spacing: 2px;
    // color: $black-mask-one;
    color: $green-four;
    // border-bottom: 1px solid $orange-mask-three;
    border-bottom: 1px solid $green-four;
    padding-bottom: 8px;
    // text-shadow: 0 0 3px $black-mask-three;

    &_two {
      color: $grey-four;
    }
  }
}
</style>
