<template>
  <div :class="$style.wrapper">
    <itemCard v-for="item in 10" :key="item"/>
  </div>

</template>

<script setup>
import itemCard from '@/components/Item.vue'

</script>

<style module>
.wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
}
</style>