<template>
  <div class="titleBlockForSiteCard">
    <h2 class="titleBlockForSiteCard__title">{{ props.title }}</h2>
    <ParagraphNormal v-if="props.subtitle" center uppercase>{{
      props.subtitle
    }}</ParagraphNormal>
    <ParagraphNormal v-if="props.description" center>{{
      props.description
    }}</ParagraphNormal>
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
.titleBlockForSiteCard {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;

  &__title {
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 28px;
    letter-spacing: 1px;
    text-align: center;
    background-clip: text;
    background-image: linear-gradient(90deg, $blue-one 40%, $blue-two 60%);

    @media (max-width: 1023px) {
      font-size: 24px;
    }

    @media (max-width: 389px) {
      font-size: 20px;
    }
  }
}
</style>
