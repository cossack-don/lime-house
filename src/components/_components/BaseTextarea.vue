<template>
  <div :class="$style.wrapper">
    <label :class="$style.label">
      {{props.titleLabel}}
      <textarea
          rows="2"
          cols="2"
          :disabled="props.disabled"
          :class="$style.textarea"
          :value="props.modelValue"
          :placeholder="props.placeholder"
          @input="updateInput"
      >
      </textarea>
    </label>
  </div>
</template>

<script setup lang="ts">
import {defineEmits, defineProps} from 'vue';

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
.wrapper {
}

.textarea {
  width: 100%;
  height: 150px;
  resize: none;
  border: 2px solid #0f0;
  border-radius: 8px;
  padding: 5px;
  background: #888;
  font-size: 17px;
  font-weight: 400;
  line-height: 24px;
  color: #fff;
}

.textarea:hover {
  cursor: pointer;
}

.textarea:focus {
  border: 2px solid #fff;
}

.textarea::placeholder {
  color: #504f4f;
}

.label {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #0f0;
}
</style>