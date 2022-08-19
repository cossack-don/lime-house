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

// interface IBaseButton {
//   disabled: boolean;
//   title: string;
//   type: string;
// }
const props = defineProps({
  disabled: { type: Boolean },
  title: {
    type: String
  },
  type: {
    type: String
  }
})
// const props = defineProps<IBaseButton>();
</script>

<style module>
.button {
  border: solid #08a652 2px;
  border-radius: 8px;
  padding: 10px 15px;
  background: #08a652;
  font-size: 17px;
  line-height: 24px;
  color: #ffffff;
}

.button:hover {
  color: #494e53;
  transition: 0.5s;
  cursor: pointer;
  border: 2px solid #494e53;
  background: #f0f3f6;
}

.button:disabled {
  cursor: default;
  background: #BCC3D07F;
  color: #969FA8;
}
</style>
