<template>
  <div class="cardBlockUiSectionLarge">
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
      <IconCastleFill
        v-if="props.building"
        class="cardBlockUiSectionLarge__icon cardBlockUiSectionLarge__icon_white"
      />
      <CardBlockUiLine animate-one />
      <CardBlockUiLine animate-three :textOrange="props.textOrange" />
      <CardBlockUiLine animate-two />
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
      <IconChurchFill
        v-if="props.building"
        class="cardBlockUiSectionLarge__icon cardBlockUiSectionLarge__icon_white"
      />
      <CardBlockUiLine animate-three />
      <CardBlockUiLine animate-two :textOrange="props.textOrange" />
      <CardBlockUiLine animate-one />
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
      <IconMuslimFill
        v-if="props.building"
        class="cardBlockUiSectionLarge__icon cardBlockUiSectionLarge__icon_white"
      />
      <CardBlockUiLine animate-two />
      <CardBlockUiLine animate-three :textOrange="props.textOrange" />
      <CardBlockUiLine animate-one />
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
  background: $black-mask-two;
  border-radius: $br-xxs;
  padding: 10px;
  overflow: hidden;

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
}
</style>
