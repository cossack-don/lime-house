<template>
  <div>
    <button
      :class="$style.button"
      :disabled="props.disabled"
      :type="props.type"
    >
      {{ props.title }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: 'Title',
  },
  type: {
    type: String,
    default: 'button',
  },
});
</script>

<style module>
.button {
  border: solid #0f0 2px;
  border-radius: 8px;
  padding: 5px;
  background: #0f0;
  font-size: 17px;
  line-height: 24px;
  color: #000;
}

.button:hover {
  color: #0f0;
  transition: 0.5s;
  cursor: pointer;
  border: 2px solid #0f0;
  background: #000;
}

.button:disabled {
  cursor: default;
  background: #BCC3D07F;
  color: #969FA8;
}
</style>
