<template>
  <div class="formInput">
    <label :for="props.name" class="formInput__label">{{ props.label }}</label>
    <input
      :type="props.type"
      :id="props.name"
      :name="props.name"
      :placeholder="props.placeholder"
      :value="props.value"
      @input="updateValue"
      class="formInput__input"
    />

    <div v-if="errorBorder" class="formInput__inputError" />

    <TransitionGroup name="error" tag="ul">
      <span v-for="item in error" :key="item.$uid" class="formInput__error">{{
        item.$message
      }}</span>
    </TransitionGroup>

    <FormClearButton v-if="value" @click="$emit('clearInput')" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value: string | any;
  error?: any;
}>();

const emit = defineEmits(["update:value", "clearInput"]);
const updateValue = (e: any) => emit("update:value", e.target.value);

const errorBorder = computed(() =>
  props.error[0] ? props.error[0].$params.type === "minLength" : null,
);
</script>

<style lang="scss" scoped>
.formInput {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding-bottom: 30px;

  &__label {
    font-size: 14px;
    color: $white-one;
    padding-bottom: 10px;
  }

  &__input {
    position: relative;
    height: 40px;
    font-size: 16px;
    border: 1px solid $blue-three;
    border-radius: 6px;
    padding-left: 20px;
    padding-right: 40px;
    transition: 0.3s cubic-bezier(0.3, 0, 0.1, 1);
    z-index: 20;

    @media (max-width: 576px) {
      padding-left: 10px;
      padding-right: 30px;
    }

    &:focus {
      font-size: 16px;
      color: $black-one;
      outline: 0;
      border: 1px solid $blue-three;
      box-shadow: 0px 0px 15px $white-one;
    }

    &::placeholder {
      font-family: "Montserrat-Regular", sans-serif;
      font-size: 16px;
      color: $black-mask-two;
    }

    &:focus::placeholder {
      color: transparent;
    }
  }

  &__error {
    position: absolute;
    top: 0;
    right: 0;
    width: fit-content;
    font-size: 12px;
    color: $red-four;
  }

  &__inputError {
    position: absolute;
    top: 24px;
    left: 0;
    width: 100%;
    height: 44px;
    background: $red-three;
    filter: blur(7px);
  }
}
</style>
