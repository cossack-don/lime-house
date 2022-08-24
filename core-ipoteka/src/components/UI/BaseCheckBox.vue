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

<script  setup lang="ts">
import { defineProps, defineEmits } from 'vue';
const emit = defineEmits(['update:checked']);

const change = (e:Event) => {
  const { checked } = e.target as HTMLInputElement;
  emit('update:checked', checked);
};

// interface IBaseCheckbox {
//   checked: boolean;
//   labelText: string;
// }
const props = defineProps({
  checked: { type: Boolean },
  labelText: {
    type: String
  },
})
// const props = defineProps<IBaseCheckbox>();
</script>

<style module>
.checkboxContainer {
  display: flex;  gap: 8px;
}

.labelCheckedTest {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  color: #08a652;
  cursor: pointer;
}

.inputCheckbox {
  position: relative;
  display: grid;
  place-content: center;
  width: 16px;
  height: 16px;
  margin: 0;
  appearance: none;
  background-color: #ffffff;
  border: 2px solid #08a652;
  border-radius: 4px;
  transform-style: preserve-3d;
  cursor: pointer;
}

.inputCheckbox:checked {
  background: #ffffff url('~@/assets/check.svg') no-repeat center;
  border-color: #08a652;
}
</style>