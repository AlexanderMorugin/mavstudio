<template>
  <div class="siteExampleUiMainBlockTitle">
    <h3 v-if="props.title" class="siteExampleUiMainBlockTitle__text">
      {{ props.title }}
    </h3>
    <ParagraphNormal center>{{ props.subtitle }}</ParagraphNormal>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  subtitle: string;
}>();
</script>

<style lang="scss" scoped>
.siteExampleUiMainBlockTitle {
  display: flex;
  flex-direction: column;
  gap: 10px;
  // padding-bottom: 40px;

  &__text {
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 44px;
    text-align: center;

    @media (max-width: 1023px) {
      font-size: 32px;
    }

    @media (max-width: 576px) {
      font-size: 24px;
    }
  }
}
</style>
