<template>
  <div class="titleCard">
    <h2 v-if="props.title" class="titleCard__title">
      {{ props.title }}
    </h2>
    <ParagraphNormal v-if="props.subtitle" center uppercase>{{
      props.subtitle
    }}</ParagraphNormal>
    <ParagraphSmall v-if="props.description" center>{{
      props.description
    }}</ParagraphSmall>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  subtitle?: string;
  description?: string;
}>();
</script>

<style lang="scss" scoped>
.titleCard {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__title {
    font-family: "Montserrat-Bold", sans-serif;
    font-size: 28px;
    // line-height: 1.2;
    letter-spacing: 2px;
    text-align: center;
    opacity: 0.9;
    background-clip: text;
    background-image: linear-gradient(90deg, $blue-one 30%, $blue-two 60%);
    color: transparent;

    @media (max-width: 1023px) {
      font-size: 24px;
    }

    @media (max-width: 389px) {
      font-size: 20px;
    }
  }

  // &__subtitle {
  //   font-size: 14px;
  //   letter-spacing: 4px;
  //   text-transform: uppercase;
  //   text-align: center;
  //   // color: transparent;

  //   @media (max-width: 576px) {
  //     font-size: 12px;
  //   }
  // }
}
</style>
