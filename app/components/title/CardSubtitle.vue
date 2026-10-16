<template>
  <div class="titleCardSubtitle">
    <TitleCard :title="props.title" />
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
.titleCardSubtitle {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
