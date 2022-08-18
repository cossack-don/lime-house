<template>
  <div
      :class="$style.wrapperInput"
  >
    <label
        :class="$style.label"
    >
      {{ props.titleLabel }}
      <VueNumberFormat
          :class="$style.input"
          :placeholder="props.placeholder"
          :disabled="props.disabled"
          :maxlength="maxlength"
          v-model:value="valueInputNumber"
          :options="options"
      ></VueNumberFormat>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits,ref } from 'vue';

interface IOptions {
  precision: number,
  prefix: string,
  suffix: string,
  decimal: string,
  thousand: string,
  acceptNegative: boolean,
  isInteger: boolean
}

interface IBaseInputNumber {
  modelValue?: string | number;
  type?: string;
  placeholder?: string;
  titleLabel?: string;
  disabled?: boolean;
  maxlength: string;
  options: IOptions
}

const props = defineProps<IBaseInputNumber>();

const valueInputNumber = ref('')
const emit = defineEmits(['update:modelValue']);
emit('update:modelValue',valueInputNumber)
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

.input:focus {
  border: 2px solid #494e53;
}

.input::placeholder {
  color: #504f4f;
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

.input[type="text"]:disabled {
  background: red;
}
</style>
