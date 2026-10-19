<template>
  <div
    :class="[
      'cardBlockUiSectionLarge',
      { cardBlockUiSectionLarge_page: props.isPage },
    ]"
  >
    <div class="cardBlockUiSectionLarge__box">
      <IconLeafFill
        v-if="props.landing"
        class="cardBlockUiSectionLarge__icon cardBlockUiSectionLarge__icon_green"
      />
      <IconHeartFill
        v-if="props.commerce"
        class="cardBlockUiSectionLarge__icon cardBlockUiSectionLarge__icon_orange"
      />
      <IconHuman
        v-if="props.business"
        class="cardBlockUiSectionLarge__icon cardBlockUiSectionLarge__icon_white"
      />
      <IconHiking
        v-if="props.building"
        class="cardBlockUiSectionLarge__icon cardBlockUiSectionLarge__icon_white"
      />
      <CardBlockUiLine
        v-if="!props.isPage"
        animate-one
        :textGreen="props.textGreen"
      />
      <CardBlockUiLine
        v-if="!props.isPage"
        animate-three
        :textOrange="props.textOrange"
      />
      <CardBlockUiLine
        v-if="!props.isPage"
        animate-two
        :textGreen="props.textGreen"
      />

      <div v-if="props.isPage" class="cardBlockUiSectionLarge__textBox">
        <span class="cardBlockUiSectionLarge__text">текст</span>
        <span class="cardBlockUiSectionLarge__text">описание</span>
      </div>
    </div>
    <div class="cardBlockUiSectionLarge__box">
      <IconRocketFill
        v-if="props.landing"
        class="cardBlockUiSectionLarge__icon cardBlockUiSectionLarge__icon_orange"
      />
      <IconStarKidFill
        v-if="props.commerce"
        class="cardBlockUiSectionLarge__icon cardBlockUiSectionLarge__icon_orange"
      />
      <IconHumanSwim
        v-if="props.business"
        class="cardBlockUiSectionLarge__icon cardBlockUiSectionLarge__icon_white"
      />
      <IconScuba
        v-if="props.building"
        class="cardBlockUiSectionLarge__icon cardBlockUiSectionLarge__icon_white"
      />
      <CardBlockUiLine v-if="!props.isPage" animate-three />
      <CardBlockUiLine
        v-if="!props.isPage"
        animate-two
        :textOrange="props.textOrange"
      />
      <CardBlockUiLine v-if="!props.isPage" animate-one />

      <div v-if="props.isPage" class="cardBlockUiSectionLarge__textBox">
        <span class="cardBlockUiSectionLarge__text">текст</span>
        <span class="cardBlockUiSectionLarge__text">описание</span>
      </div>
    </div>
    <div class="cardBlockUiSectionLarge__box">
      <IconPlantFill
        v-if="props.landing"
        class="cardBlockUiSectionLarge__icon cardBlockUiSectionLarge__icon_green"
      />
      <IconHeartFill
        v-if="props.commerce"
        class="cardBlockUiSectionLarge__icon cardBlockUiSectionLarge__icon_orange"
      />
      <IconHumanRun
        v-if="props.business"
        class="cardBlockUiSectionLarge__icon cardBlockUiSectionLarge__icon_white"
      />
      <IconSnowboard
        v-if="props.building"
        class="cardBlockUiSectionLarge__icon cardBlockUiSectionLarge__icon_white"
      />
      <CardBlockUiLine
        v-if="!props.isPage"
        animate-two
        :textGreen="props.textGreen"
      />
      <CardBlockUiLine
        v-if="!props.isPage"
        animate-three
        :textOrange="props.textOrange"
      />
      <CardBlockUiLine
        v-if="!props.isPage"
        animate-one
        :textGreen="props.textGreen"
      />

      <div v-if="props.isPage" class="cardBlockUiSectionLarge__textBox">
        <span class="cardBlockUiSectionLarge__text">текст</span>
        <span class="cardBlockUiSectionLarge__text">описание</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  landing?: boolean;
  commerce?: boolean;
  business?: boolean;
  building?: boolean;
  textOrange?: boolean;
  textGreen?: boolean;
  isPage?: boolean;
}>();
</script>

<style lang="scss" scoped>
.cardBlockUiSectionLarge {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  min-height: 60px;
  background: $grey-mask-three;
  border-radius: $br-xxs;
  padding: 10px;
  overflow: hidden;

  &_page {
    background: none;
    border: 1px solid $orange-two;
  }

  &__box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    width: 100%;
  }

  &__icon {
    width: 28px;
    height: 28px;

    &_green {
      fill: $green-one;
    }

    &_orange {
      fill: $orange-one;
    }

    &_white {
      fill: $white-one;
    }
  }

  &__textBox {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__text {
    font-size: 14px;
    color: $white-mask-one;

    @media (max-width: 389px) {
      font-size: 10px;
    }
  }
}
</style>
