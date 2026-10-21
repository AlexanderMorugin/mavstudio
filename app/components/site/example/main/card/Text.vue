<template>
  <div class="siteExampleMainCardText">
    <span>{{ props.textOne }}</span>
    <span>{{ props.textTwo }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  textOne: string;
  textTwo?: string;
}>();
</script>

<style lang="scss" scoped>
.siteExampleMainCardText {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: $white-one;
  color: $black-one;
  line-height: 1.3;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border: 1px solid $grey-one;
  padding: 10px;

  @media (max-width: 767px) {
    font-size: 14px;
    margin-top: 20px;
  }
}
</style>
