<template>
  <div>
    <label :class="$style.label">
      <p :class="$style.text">{{ props.titleLabel }}</p>
      <textarea
          :disabled="props.disabled"
          :class="$style.textarea"
          :value="props.modelValue"
          :placeholder="props.placeholder"
          @input="updateInput"
      ></textarea>

    </label>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';
import { IBaseTextarea } from '@/components/_components/interfaces';

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  titleLabel: {
    type: String,
    default: 'title-label',
  },
  placeholder: {
    type: String,
    default: '',
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
}

.textarea:hover {
  cursor: pointer;
}

.textarea:focus {
  border: 2px solid #494e53;
}

.textarea::placeholder {
  color: #504f4f;
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
</style>