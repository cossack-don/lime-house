<template>
  <div :class="$style.wrapperCheckBox">
    <label>
      <input type='checkbox' :class="$style.input">
      <span>{{props.title}}</span>
    </label>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps({
  connectLabelWithId:{
    type:String,
    default:'test-label'
  },
  title:{
    type:String,
    default:'Title'
  }
})

</script>

<style module>
.wrapperCheckBox {
  width: 100%;
}

.input {
  margin-right: 8px;
}
</style>