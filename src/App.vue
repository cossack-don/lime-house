<template>
<!--  https://vuelidate-next.netlify.app/#getting-started-1  - vue validate for vue 3 needed install <br/>-->
<!--  https://vee-validate.logaretm.com/v4/guide/composition-api/validation <br/>-->
<!--  vue-mask for numbers,string <br/>-->
<!--  https://reddeveloper.ru/blog/34/vklucenie-utf-8-v-jspdf-s-pomos-u-angular-->
<!--  https://github.com/parallax/jsPDF-->
  <HeaderHouses/>
  <div :class="$style.app">
    <h2 :class="$style.title">Подборка критериев:</h2>
    <form id="form" :class="$style.wrapper" @submit.prevent="generatePDF">
      <Item/>
      <CardDeveloper/>
      <BaseButton :class="$style.buttonSubmit" type="submit" title="Сформировать PDF" />
    </form>
    <pre>{{store.$state.dataForm}}</pre>
  </div>
</template>

<script lang="ts" setup>
import BaseButton from '@/components/_components/BaseButton.vue'
import CardDeveloper from '@/view/CardDeveloper.vue';
import HeaderHouses from '@/view/HeaderHouses.vue';
import Item from '@/components/Item.vue';
import { storeDataForm } from '@/stores/storeDataForm';
import { pdf } from '@/utils/generatePDF';

const store = storeDataForm();

const generatePDF =  () => {

  const values = Object.values(store.$state.dataForm.dataForm);

  pdf.text('Список приоритетных условий, при покупке квартиры', 10,10);
  pdf.text(
   `
   Название застройщика - ${values[0]}
   Ссылка на застройщика или их предлжения - ${values[1]}
   Омментарий о застройщике - ${values[2]}
   Максимальная сумма квартиры - ${values[3]}
   Процентная ставка - ${values[4]}
   Срок ипотеки - ${values[5]}
   Первоначальный взнос - ${values[6]}
   Переплата - ${values[7]}
  `
      , 20, 20);

  pdf.save("a4.pdf");
}
</script>

<style module>
.app {
  max-width: 800px;
  margin: 0 auto;
}

.wrapper {
  margin-bottom: 25px;
  padding: 15px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  background: #f0f3f6;
  position: relative;
}

.wrapper:before {
  content:'';
  position: absolute;
  width: 40%;
  height: 40%;
  top: 5%;
  left: -43%;
  background: url('~@/assets/home.png') no-repeat center;
  background-size: 100%;
  border-color: #0f0;
}

.wrapper:after {
  content: '';
  position: absolute;
  width: 40%;
  height: 40%;
  top: 40%;
  background: url('~@/assets/product.svg') no-repeat center;
  background-size: 100%;
  border-color: #0f0;
  right: -43%;
}

.buttonSubmit {
  margin-top: 15px;
  text-align: center;
}

.title {
  margin-top: -125px;
  text-align: center;
  padding: 25px;
  background: #08a652;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: #ffffff;
}
</style>
