<template>

  <div :class="$style.app">
    <h2 :class="$style.title">Список приоритетных условий, при покупке квартиры.</h2>

    <List/>

    <CardDeveloper/>
  </div>

</template>

<script lang="ts" setup>
import CardDeveloper from '@/components/CardDeveloper.vue';
import List from './components/List.vue';
</script>
<style module>
.title {
  margin-top: 15px;
  text-align: center;
}

.app {
  max-width: 920px;
  margin: 0 auto;
}
</style>
