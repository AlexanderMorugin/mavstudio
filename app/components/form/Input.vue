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
    <FormClearButton v-if="value" @click="$emit('clearInput')" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
}>();

const emit = defineEmits(["update:value", "clearInput"]);
const updateValue = (e: any) => emit("update:value", e.target.value);
</script>

<style lang="scss" scoped>
.formInput {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding-bottom: 30px;

  // border: 1px solid red;

  &__label {
    font-size: 14px;
    color: $white-one;
    padding-bottom: 10px;
  }

  &__input {
    height: 40px;
    font-size: 16px;
    border: 1px solid $blue-three;
    border-radius: 6px;
    padding-left: 20px;
    padding-right: 40px;
    transition: 0.3s cubic-bezier(0.3, 0, 0.1, 1);

    @media (max-width: 576px) {
      padding-left: 10px;
      padding-right: 30px;
    }

    &:focus {
      font-size: 16px;
      color: $black-one;
      outline: 0;
      border: 1px solid $blue-three;
      // outline: 1px solid $blue-three;
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

  // .form-input-error {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   font-size: 14px;
  //   line-height: 14px;
  //   color: $red-two;
  //   text-align: right;
  // }
}
</style>
