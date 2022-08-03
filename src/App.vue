<template>
  <HeaderHouses/>
  <div :class="$style.app">


    <form :class="$style.wrapper" @submit.prevent="generatePDF">
      <List/>
      <CardDeveloper/>
      <BaseButton :class="$style.buttonSubmit" type="submit" title="Сформировать PDF" />
    </form>
  </div>
</template>

<script lang="ts" setup>
import BaseButton from '@/components/_components/BaseButton.vue'
import { reactive } from "vue";
import CardDeveloper from '@/components/CardDeveloper.vue';
import HeaderHouses from '@/view/HeaderHouses.vue';
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
  console.log(dataForm)
}
</script>

<style module>


.app {
  max-width: 920px;
  margin: 0 auto;
}

.wrapper {
  padding: 15px;
  border:2px solid #0f0;
  border-radius: 8px;
}


.buttonSubmit {
  margin-top: 15px;
  text-align: center;
}
</style>
