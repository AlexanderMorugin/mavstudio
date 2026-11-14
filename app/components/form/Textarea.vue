<template>
  <div class="formTextarea">
    <label class="formTextarea__label">{{ label }}</label>
    <textarea
      :placeholder="placeholder"
      :value="value"
      @input="updateValue"
      class="formTextarea__input"
    />

    <!-- <TransitionGroup name="list" tag="ul">
      <span v-for="item in error" :key="item.$uid" class="form-input-error">{{
        item.$message
      }}</span>
    </TransitionGroup> -->

    <FormClearButton v-if="value" @click="$emit('clearInput')" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
  // type: string;
  name: string;
  placeholder: string;
  value: string;
}>();

const emit = defineEmits(["update:value", "clearInput"]);
const updateValue = (e: any) => emit("update:value", e.target.value);
</script>

<style lang="scss" scoped>
.formTextarea {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-items: center;

  &__label {
    font-size: 14px;
    color: $white-one;
    padding-bottom: 10px;
  }

  &__input {
    min-height: 100px;
    border-radius: 6px;
    font-family: "Montserrat-Regular", sans-serif;
    font-size: 16px;
    color: $black-one;
    border: 1px solid $blue-three;
    padding: 20px 40px 20px 20px;
    transition: 0.3s cubic-bezier(0.3, 0, 0.1, 1);

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
}
</style>
