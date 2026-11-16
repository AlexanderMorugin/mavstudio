<template>
  <div class="formAvatarChoice">
    <span class="formAvatarChoice__title">Выберите аватарку * </span>

    <div class="formAvatarChoice__container">
      <button
        type="button"
        v-for="item in props.avatars"
        :key="item.id"
        @click="emit('handleAvatarChoice', item.id)"
        class="formAvatarChoice__box"
      >
        <div class="formAvatarChoice__imageButton">
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
}>();

const emit = defineEmits(["handleAvatarChoice"]);
</script>

<style lang="scss" scoped>
.formAvatarChoice {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 30px;
  // border: 1px solid red;

  &__container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }

  &__title {
    font-size: 14px;
    line-height: 1.2;
  }

  &__box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    max-width: 150px;
  }

  &__imageButton {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid red;
    padding: 2px;
    // overflow: hidden;
  }

  &__image {
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  &__name {
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 14px;
    line-height: 1.2;
    text-align: center;
    color: $white-one;
  }
}
</style>
