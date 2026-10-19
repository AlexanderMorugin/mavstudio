<template>
  <CardBlockContainer :isPage="props.isPage">
    <CardBlockUiHeader :isPage="props.isPage"/>
    <CardBlockUiSectionLarge business textGreen />
    <CardBlockUiSectionLarge building textOrange />
    <CardBlockUiFooter />
  </CardBlockContainer :isPage="props.isPage">
</template>

<script setup lang="ts">
const props = defineProps<{
  isPage?: boolean;
}>();
</script>
