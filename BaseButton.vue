<template>
  <div>
    <button
      :class="[$style.buttonRed, {[$style.buttonGray]: props.grayButton}]"
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
  grayButton: {
    type: Boolean,
    default: false,
  },
});
</script>

<style module>
.buttonRed {
  border:none;
  border-radius: 8px;
  padding: 14px 24px;
  background: #E30611;
  font-size: 17px;
  font-weight: bold;
  line-height: 24px;
  color: #FFFFFF;
}

.buttonRed:hover,:focus {
  cursor: pointer;
}

.buttonRed:disabled {
  cursor: default;
  background: #BCC3D07F;
  color: #969FA8;
}

.buttonGray {
  background: #F2F3F7;
  color:#000000;
}
</style>
