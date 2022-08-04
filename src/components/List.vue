<template>
  <div :class="$style.wrapper">
    <Item v-for="(item, ) in store.$state.dataForm.listCriterial" v-model="store.$state.dataForm.listCriterial[index]" :key="item" />
  </div>

</template>

<script setup>
import Item from '@/components/Item.vue'
import { storeDataForm } from '@/stores/storeDataForm';

const store = storeDataForm();
</script>

<style module>
.wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
}
</style>