<template>
  <div
    :class="$style.wrapperInput"
  >
    <label
      :for="props.idLabel"
      :class="$style.label"
    >
      {{ props.titleLabel }}
      <input
        :id="props.idLabel"
        :class="$style.input"
        :type="props.type"
        :value="props.modelValue"
        :placeholder="props.placeholder"
        :disabled="props.disabled"
        @input="input"
      >
    </label>
    <!-- <div>Error block</div> -->
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
  idLabel: {
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
  border: 1px solid #BCC3D07F;
  border-radius: 8px;
  padding: 14px 0 14px 12px;
  background: #F2F3F7;
  font-size: 17px;
  font-weight: 400;
  line-height: 24px;
  color: #000000;
}

.input:focus {
  border: 1px solid #007CFF;
}

.input::placeholder {
  color: #969FA8;
}

.label {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #626C77;
}
</style>
