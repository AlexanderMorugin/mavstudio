<template>
  <ModalContainer>
    <SiteExampleUiMainOfferCard v-if="card" :card="props.card" isModal />
  </ModalContainer>
</template>

<script setup lang="ts">
import type { ISiteExampleOfferCard } from "~/types/site";

const props = defineProps<{
  card: ISiteExampleOfferCard;
}>();
</script>

<style lang="scss" scoped></style>
