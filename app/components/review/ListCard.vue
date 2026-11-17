<template>
  <div class="reviewListCard">
    <div class="reviewListCard__textBlock">
      <div class="reviewListCard__user">
        <div
          :class="[
            'reviewListCard__userIcon',
            { reviewListCard__userIcon_bg: !props.review?.userAvatar },
          ]"
        >
          <img
            v-if="props.review?.userAvatar"
            :src="props.review?.userAvatar.image"
            :alt="props.review?.userName"
            class="reviewListCard__image"
          />
          <span v-if="!props.review?.userAvatar">{{
            props.review?.userNameFirstLetter
          }}</span>
        </div>
        <div>
          <span class="reviewListCard__userName">{{
            props.review?.userName
          }}</span>
          <ParagraphSmall>{{ props.review?.userStatus }}</ParagraphSmall>
        </div>
      </div>
      <ParagraphNormal v-if="props.review?.text" black>{{
        props.review.text
      }}</ParagraphNormal>
    </div>

    <ParagraphSmall>{{ props.review?.date }}</ParagraphSmall>
  </div>
</template>

<script lang="ts" setup>
import type { IReview } from "~/types/review";

const props = defineProps<{
  review: IReview | undefined;
}>();
</script>

<style lang="scss" scoped>
.reviewListCard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  height: 100%;
  user-select: none;

  &__textBlock {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__user {
    display: grid;
    grid-template-columns: 50px 1fr;
    align-items: center;
    gap: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid $black-mask-four;
  }

  &__userIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 24px;
    color: $white-one;
    overflow: hidden;

    &_bg {
      background: $gradient-blue-two;
    }
  }

  &__image {
    width: 100%;
    object-fit: cover;
  }

  &__userName {
    font-family: "Montserrat-SemiBold", sans-serif;
    line-height: 1.5;
    letter-spacing: 1px;
    color: $black-one;
  }
}
</style>
