<template>

  <div :class="$style.app">
    <h2 :class="$style.title">Список приоритетных условий, при покупке квартиры.</h2>



    <form :class="$style.wrapper" @submit.prevent="generatePDF">
      <List/>
      <CardDeveloper/>
      <button type="submit">Сформировать pdf</button>
    </form>
  </div>
</template>

<script lang="ts" setup>

import { reactive } from "vue";
import CardDeveloper from '@/components/CardDeveloper.vue';
import List from './components/List.vue';
import { doc } from '@/utils/generatePDF'

const dataForm = reactive({

  developerName:'', // название застройщика
  urlDeveloperName:'', // ссылка на застройщика или их предлжения
  commentsDeveloper:'', // комментарий о застройщике
  maximumApartmentAmount:'', // максимальная сумма квартиры
  interestRate:'', // процентная ставка
  downPayment:'', // первоначальный взнос
  overpayment:'', // переплата
})

const generatePDF = () => {
  console.log('generate-pdf')
  doc.text("Hello world!", 10, 10);
  doc.save("a4.pdf");
}
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

.wrapper {
  padding: 15px;
  border:2px solid #0f0;
  border-radius: 8px;
}
</style>
