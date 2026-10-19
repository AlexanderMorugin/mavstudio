<template>
  <div class="cardBlockUiSectionMultiPage">
    <div
      class="cardBlockUiSectionMultiPage__box cardBlockUiSectionMultiPage__box_orange"
    >
      <CardBlockUiIconInCircle
        image="numberImage"
        number="1"
        numberColor="orange"
      />
      <div class="cardBlockUiSectionMultiPage__text">
        <CardBlockUiLine v-if="!props.isPage" animate-one textBlue />
        <CardBlockUiLine v-if="!props.isPage" animate-two textBlue />
        <CardBlockUiLine v-if="!props.isPage" animate-three textBlue />

        <span v-if="props.isPage" class="cardBlockUiSectionMultiPage__word"
          >страница</span
        >
        <span v-if="props.isPage" class="cardBlockUiSectionMultiPage__word"
          >с блоками</span
        >
      </div>

      <CardBlockUiSidebarButton multipage :isPage="props.isPage" />
    </div>
    <div
      class="cardBlockUiSectionMultiPage__box cardBlockUiSectionMultiPage__box_white"
    >
      <CardBlockUiIconInCircle
        image="numberImage"
        number="2"
        numberColor="white"
      />
      <div class="cardBlockUiSectionMultiPage__text">
        <CardBlockUiLine v-if="!props.isPage" animate-one textBlue />
        <CardBlockUiLine v-if="!props.isPage" animate-two textBlue />
        <CardBlockUiLine v-if="!props.isPage" animate-three textBlue />

        <span v-if="props.isPage" class="cardBlockUiSectionMultiPage__word"
          >страница</span
        >
        <span v-if="props.isPage" class="cardBlockUiSectionMultiPage__word"
          >с блоками</span
        >
      </div>
      <CardBlockUiSidebarButton multipage :isPage="props.isPage" />
    </div>
    <div
      class="cardBlockUiSectionMultiPage__box cardBlockUiSectionMultiPage__box_green"
    >
      <CardBlockUiIconInCircle
        image="numberImage"
        number="3"
        numberColor="green"
      />
      <div class="cardBlockUiSectionMultiPage__text">
        <CardBlockUiLine v-if="!props.isPage" animate-one textBlue />
        <CardBlockUiLine v-if="!props.isPage" animate-two textBlue />
        <CardBlockUiLine v-if="!props.isPage" animate-three textBlue />

        <span v-if="props.isPage" class="cardBlockUiSectionMultiPage__word"
          >страница</span
        >
        <span v-if="props.isPage" class="cardBlockUiSectionMultiPage__word"
          >с блоками</span
        >
      </div>
      <CardBlockUiSidebarButton multipage :isPage="props.isPage" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  isPage?: boolean;
}>();
</script>

<style lang="scss" scoped>
.cardBlockUiSectionMultiPage {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 6px;
  height: 63%;
  padding-top: 6px;
  padding-bottom: 6px;

  &__box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: $br-xxs;
    padding: 10px;

    &_orange {
      background: $orange-one;
    }
    &_green {
      background: $green-one;
    }
    &_white {
      background: $grey-two;
    }
  }

  &__top {
    display: grid;
    grid-template-columns: 40px 1fr;
    align-items: center;
    gap: 10px;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
  }

  &__word {
    font-size: 14px;
    color: $black-one;
    text-align: center;

    @media (max-width: 389px) {
      font-size: 10px;
    }
  }
}
</style>
