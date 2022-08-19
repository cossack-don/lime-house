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
      <VueNumberFormat
          :class="[$style.input, {[$style.error]: props.error}]"
          :error="props.error"
          :placeholder="props.placeholder"
          :disabled="props.disabled"
          :maxlength="props.maxlength"
          v-model:value="valueInputNumber"
          :options="props.options"
      ></VueNumberFormat>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits,ref } from 'vue';

// interface IOptions {
//   precision: number,
//   prefix: string,
//   suffix: string,
//   decimal: string,
//   thousand: string,
//   acceptNegative: boolean,
//   isInteger: boolean
// }

// interface IBaseInputNumber {
//   modelValue: string | number;
//   type: string;
//   placeholder: string;
//   titleLabel: string;
//   disabled: boolean;
//   maxlength: string;
//   error: boolean;
//   options: IOptions;
//   requiredStar: boolean;
// }

const props = defineProps({
  // modelValue: { type: String  },
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
  options: {
    type: Object
  },
  requiredStar:{
    type: Boolean,
    default:false
  },
})

// const props = defineProps<IBaseInputNumber>();

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
