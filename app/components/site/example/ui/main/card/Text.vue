<template>
  <div class="siteExampleUiMainCardText">
    <ParagraphNormal>{{ props.textOne }}</ParagraphNormal>
    <ParagraphNormal>{{ props.textTwo }}</ParagraphNormal>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  textOne: string;
  textTwo?: string;
}>();
</script>

<style lang="scss" scoped>
.siteExampleUiMainCardText {
  display: flex;
  flex-direction: column;
  gap: 20px;
  // background: $white-one;
  // color: $black-one;
  // color: $white-one;
  // line-height: 1.5;
  // font-size: 14px;
  // border-top-left-radius: 4px;
  // border-top-right-radius: 4px;
  // border-bottom-left-radius: 6px;
  // border-bottom-right-radius: 6px;
  border-radius: 10px;
  // border: 1px solid $grey-one;
  padding: 10px;

  @media (max-width: 767px) {
    gap: 14px;
    margin-top: 20px;
    padding-left: 5px;
    padding-right: 5px;
    // padding: 5px;
  }
}
</style>
