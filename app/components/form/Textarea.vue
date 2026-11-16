<template>
  <div class="formTextarea">
    <label :for="props.name" class="formTextarea__label">{{
      props.label
    }}</label>
    <textarea
      :type="props.type"
      :id="props.name"
      :name="props.name"
      :placeholder="props.placeholder"
      :value="props.value"
      @input="updateValue"
      :class="[
        'formTextarea__input',
        { formTextarea__input_error: errorBorder },
      ]"
    />

    <TransitionGroup name="error" tag="ul">
      <span
        v-for="item in error"
        :key="item.$uid"
        class="formTextarea__error"
        >{{ item.$message }}</span
      >
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
.formTextarea {
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

    &_error {
      box-shadow: 0px 0px 15px $red-four;

      &:focus {
        box-shadow: 0px 0px 15px $red-four;
      }
    }
  }

  &__error {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    font-size: 12px;
    color: $red-four;
    text-align: right;
  }
}
</style>
