<template>
  <div :class="$style.wrapper">
    <label :class="$style.label">
      {{props.titleLabel}}
      <textarea
          :disabled="props.disabled"
          :class="$style.textarea"
      >
      </textarea>
    </label>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  titleLabel: {
    type: String,
    default: 'title-label',
  },
})
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