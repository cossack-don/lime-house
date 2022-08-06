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
import {defineProps, watchEffect, toRefs, watch} from 'vue';
import { IBaseButton } from '@/components/_components/interfaces';
// ОШИБКУ КИДЕТ СМ СКОБКУ https://vuejs.org/guide/extras/reactivity-transform.html#refs-vs-reactive-variables

// const props = defineProps<IBaseButton>();
//https:cumsum.wordpress.com/2020/05/08/destructure-reactive-object-and-maintain-reactivity-in-vue-3/
// const props = defineProps<IBaseButton>()
//
// const { disabled = false } = toRefs(props)
// watch((disabled,( v, nv)) => {
// console.log(disabled)
// })

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
