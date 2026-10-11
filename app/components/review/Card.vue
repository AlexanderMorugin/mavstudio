<template>
  <div class="reviewCard">
    <div class="reviewCard__textBlock">
      <div class="reviewCard__user">
        <div class="reviewCard__userIcon">{{ props.review.firstLetter }}</div>
        <div class="reviewCard__userBlock">
          <span class="reviewCard__userName">{{ props.review.user }}</span>
          <ParagraphSmall>{{ props.review.userStatus }}</ParagraphSmall>
        </div>
      </div>
      <ParagraphNormal v-if="props.review.textOne">{{
        props.review.textOne
      }}</ParagraphNormal>
      <ParagraphNormal v-if="props.review.textTwo">{{
        props.review.textTwo
      }}</ParagraphNormal>
    </div>
    <ParagraphSmall>{{ props.review.date }}</ParagraphSmall>
  </div>
</template>

<script lang="ts" setup>
import type { IReview } from "~/types/review";

const props = defineProps<{
  review: IReview;
}>();
</script>

<style lang="scss" scoped>
.reviewCard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  border: 1px solid $black-mask-four;
  border-left: 10px solid $orange-one;
  padding: 10px;
  user-select: none;
  cursor: grab;

  &__textBlock {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__userBlock {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__user {
    display: flex;
    align-items: center;
    gap: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid $black-mask-three;
  }

  &__userIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: $gradient-blue-two;
    font-size: 24px;
    color: $white-one;
  }

  &__userName {
    font-family: "Montserrat-SemiBold", sans-serif;
    letter-spacing: 1px;
  }

  &__userStatus {
    font-size: 12px;
    color: $grey-four;
  }

  &__date {
    font-size: 12px;
    color: $grey-four;
  }
}
</style>
