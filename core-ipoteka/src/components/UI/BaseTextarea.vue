<template>
  <div>
    <label :class="$style.label">
      <span :class="$style.text">{{ props.titleLabel }}</span>
      <textarea
          :disabled="props.disabled"
          :class="[$style.textarea, {[$style.error]: props.error}]"
          :error="props.error"
          :value="props.modelValue"
          :maxlength="props.maxlength"
          :placeholder="props.placeholder"
          @input="updateInput"
          :rows="props.rows"
      ></textarea>
    </label>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';

// interface  IBaseTextarea {
//   modelValue: string | number;
//   disabled: boolean;
//   titleLabel: string;
//   placeholder: string;
//   maxlength: string;
//   rows: string;
//   error: boolean;
// }
// const props = defineProps<IBaseTextarea>()
const props = defineProps({
  modelValue: { type: String },
  disabled: {
    type: Boolean
  },
  titleLabel: {
    type: String
  },
  placeholder: {
    type: String
  },
  maxlength: {
    type: String
  },
  rows: {
    type: String
  },
  error: {
    type: Boolean
  },
})
interface ISyntheticEvent<T extends EventTarget> extends Event {
  target: T;
}

const emit = defineEmits(['update:modelValue']);

const updateInput = (e:ISyntheticEvent<HTMLInputElement>) => {
  const { value } = e.target;
  emit('update:modelValue', value);
};
</script>

<style module>
.textarea {
  width: 100%;
  resize: none;
  border: 2px solid #08a652;
  border-radius: 8px;
  padding: 5px;
  background: #ffffff;
  font-size: 17px;
  font-weight: 400;
  line-height: 24px;
  color: #494e53;
  margin-top: 4px;
}

.textarea:hover {
  cursor: pointer;
}

.textarea:focus {
  border: 2px solid #494e53;
}

.textarea::placeholder {
  color: #cfcccc;
}

.textarea:disabled {
  opacity: 0.4;
}

.label {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #08a652;
}

.text {
  margin-bottom: 5px;
}

.error {
  border: solid #ff6a59 2px;
}

.textarea.error:focus {
  border: 2px solid #ff6a59;
}
</style>