<template>

  <div :class="$style.app">
    <h2 :class="$style.title">Список приоритетных условий, при покупке квартиры.</h2>


<!--    <form @submit.prevent="sendForm">-->

<!--    </form>-->
    <List/>

    <CardDeveloper/>
  </div>

</template>

<script lang="ts" setup>
import CardDeveloper from '@/components/CardDeveloper.vue';
import List from './components/List.vue';
import { jsPDF } from "jspdf";

// Default export is a4 paper, portrait, using millimeters for units
// const doc = new jsPDF();
//
// doc.text("Hello world!", 10, 10);
// doc.save("a4.pdf");
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
