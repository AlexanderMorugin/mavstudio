<template>
  <div class="formAvatarChoice">
    <span class="formAvatarChoice__title">Выберите аватарку * </span>

    <div class="formAvatarChoice__container">
      <button
        type="button"
        v-for="item in props.avatars"
        :key="item.id"
        @click="emit('handleAvatarChoice', item.id)"
        class="formAvatarChoice__button"
      >
        <div
          :class="[
            'formAvatarChoice__imageBox',
            {
              formAvatarChoice__imageBox_active:
                props.selectedAvatar && props.selectedAvatar.id === item.id,
            },
          ]"
        >
          <img
            :src="item.image"
            :alt="item.name"
            class="formAvatarChoice__image"
          />
        </div>

        <span class="formAvatarChoice__name">{{ item.name }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IAvatar } from "~/types/avatar";

const props = defineProps<{
  avatars: IAvatar[];
  selectedAvatar: IAvatar | undefined;
}>();

const emit = defineEmits(["handleAvatarChoice"]);

// console.log(props.selectedAvatar);
</script>

<style lang="scss" scoped>
.formAvatarChoice {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-bottom: 30px;
  // border: 1px solid red;

  &__container {
    // display: flex;
    // justify-content: center;
    // flex-wrap: wrap;
    // gap: 20px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;

    @media (max-width: 767px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media (max-width: 576px) {
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 10px;
    }

    @media (max-width: 389px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__title {
    font-size: 14px;
    line-height: 1.2;
  }

  &__button {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    max-width: 150px;

    // border: 1px solid red;
  }

  &__imageBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid transparent;
    padding: 2px;

    &_active {
      border: 2px solid $white-one;
      box-shadow: 0px 0px 25px $white-one;
    }
  }

  &__image {
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  &__name {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 12px;
    line-height: 1.2;
    text-align: center;
    color: $white-one;

    // @media (max-width: 576px) {
    //   font-size: 12px;
    // }
  }
}
</style>
