<template>
  <div
    :class="$style.wrapperInput"
  >
    <label
      :class="$style.label"
    >
      <span :class="$style.header">
        <span>{{ props.titleLabel }}</span>
        <span v-if="props.requiredStar" :class="$style.star">*</span>
      </span>
      <input
        :class="[$style.input, {[$style.error]: props.error}]"
        :error="props.error"
        :type="props.type"
        :value="props.modelValue"
        :maxlength="props.maxlength"
        :placeholder="props.placeholder"
        :disabled="props.disabled"
        @input="emit('update:modelValue', $event.target.value)"
      >
    </label>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

interface IBaseInput {
  modelValue: string | number;
  type: string;
  placeholder: string;
  titleLabel: string;
  disabled: boolean;
  maxlength: string;
  error: boolean;
}

// Падают ошибки в консоль если задаю по ТС типы !! Нужно разбираться
// runtime-core.esm-bundler.js?5c40:38 [Vue warn]: Missing required prop: "disabled"
// const props = defineProps<IBaseInput>();
const props = defineProps({
  modelValue: { type: String },
  type: {
    type: String
  },
  placeholder:{
    type: String
  },
  titleLabel:{
    type: String
  },
  disabled: {
    type: Boolean
  },
  maxlength: {
    type: String
  },
  error: {
    type: Boolean
  },
  requiredStar:{
    type: Boolean,
    default:false
  }
})
const emit = defineEmits(['update:modelValue']);

// first variant @input="emit('update:modelValue', $event.target.value)"

// 2 variants emit
// const input = (e:ISyntheticEvent<HTMLInputElement>) => {
//   const { value } = e.target;
//   emit('update:modelValue', value);
// };
// interface ISyntheticEvent<T extends EventTarget> extends Event {
//   target: T;
// }
</script>

<style module>
.input::-webkit-outer-spin-button,
.input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.wrapperInput {
  width: 100%;
}

.input {
  outline: none;
  margin-top: 4px;
  border: 2px solid #08a652;
  border-radius: 8px;
  padding: 5px;
  background: #ffffff;
  font-size: 17px;
  font-weight: 400;
  line-height: 24px;
  color: #494e53;
}

.input:before {
  content: '1';
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  height: 100px;
  background: red;
}

.input:focus {
  border: 2px solid #494e53;
}

.input::placeholder {
  color: #cfcccc;
}

.label {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #08a652;
}

.input:disabled {
  background: #eaeaea;
  border: 2px solid #242629;
}

.error {
  border: solid #ff6a59 2px;
}

.input.error:focus {
  border: 2px solid #ff6a59;
}

.header {
  display: flex;
}

.star {
  margin-left: 2px;
  color: #ff6a59;
  font-size: 18px;
}
</style>
