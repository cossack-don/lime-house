<template>
  <div
      :class="$style.checkboxContainer"
  >
    <label
        :class="$style.labelCheckedTest"
    >
      <input
          :class="$style.inputCheckbox"
          type="checkbox"
          :checked="props.checked"
          @change="change"
      >
      {{ props.labelText }}
    </label>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits(['update:checked']);

const change = (e:Event) => {
  const { checked } = e.target as HTMLInputElement;
  emit('update:checked', checked);
};

const props = defineProps({
  checked: {
    type: Boolean,
    default: true,
  },
  labelText: {
    type: String,
    default: 'Текст',
  },
});
</script>

<style module>
.checkboxContainer {
  display: flex;  gap: 8px;
}

.labelCheckedTest {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 17px;
  font-weight: 400;
  line-height: 24px;
  color: #0f0;
  cursor: pointer;
}

.inputCheckbox {
  position: relative;
  display: grid;
  place-content: center;
  width: 16px;
  height: 16px;
  margin: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #2c2c2c;
  border: 2px solid #0f0;
  border-radius: 4px;
  transform-style: preserve-3d;
  cursor: pointer;
}

.inputCheckbox:checked {
  background: #2c2c2c url('~@/assets/check.svg') no-repeat center;
  border-color: #0f0;
}
</style>