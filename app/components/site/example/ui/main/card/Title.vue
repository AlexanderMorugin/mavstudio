<template>
  <div class="siteExampleUiMainCardTitle">
    <h3 v-if="props.title" class="siteExampleUiMainCardTitle__text">
      {{ props.title }}
    </h3>
    <ParagraphNormal
      v-if="props.subtitle"
      class="siteExampleUiMainCardTitle__subtitle"
    >
      {{ props.subtitle }}
    </ParagraphNormal>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  subtitle?: string;
}>();
</script>

<style lang="scss" scoped>
.siteExampleUiMainCardTitle {
  padding-left: 10px;
  padding-right: 10px;

  &__text {
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 24px;
    line-height: 2.5;
    border-bottom: 1px solid $white-mask-three;

    @media (max-width: 767px) {
      font-size: 20px;
    }
  }

  &__subtitle {
    // font-size: 14px;
    // line-height: 1.5;
    padding-top: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
