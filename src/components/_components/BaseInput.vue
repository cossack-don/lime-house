<template>
  <div
    :class="$style.wrapperInput"
  >
    <label
      :class="$style.label"
    >
      {{ props.titleLabel }}
      <input
        :class="$style.input"
        :type="props.type"
        :value="props.modelValue"
        :placeholder="props.placeholder"
        :disabled="props.disabled"
        @input="input"
      >
    </label>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: null,
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  titleLabel: {
    type: String,
    default: 'Title',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

interface ISyntheticEvent<T extends EventTarget> extends Event {
  target: T;
}

const emit = defineEmits(['update:modelValue']);

const input = (e:ISyntheticEvent<HTMLInputElement>) => {
  const { value } = e.target;
  emit('update:modelValue', value);
};
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
