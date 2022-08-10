<template>
  <HeaderHouses/>

  <div :class="$style.app">
    <h2 :class="$style.title">Подборка критериев:</h2>

    <form id="form" :class="$style.wrapper" @submit.prevent="downloadPDF">
      <Item/>
      {{store.$state.dataForm}}2
      <CardDeveloper/>
      <BaseButton :class="$style.buttonSubmit" type="submit" title="Сформировать PDF" />
    </form>


  </div>
  <Cards/>
</template>

<script lang="ts" setup>
import BaseButton from '@/components/_components/BaseButton.vue'
import CardDeveloper from '@/view/CardDeveloper.vue';
import HeaderHouses from '@/view/HeaderHouses.vue';
import Cards from '@/view/Cards.vue';
import Item from '@/components/Item.vue';
import { storeDataForm } from '@/stores/storeDataForm';
import { pdf } from '@/utils';
import { generationPDF } from '@/utils/templatePDF';


const store = storeDataForm();

const downloadPDF =  () => {

  generationPDF()

  location.reload();

//  TODO Нужно отправлять + на бекенд в БД - если вдруг криво на пдф ляжет, чтобы вытащить с БД
// console.log(store.$state)
//   const values = Object.values(store.$state.dataForm);
//

  for(let k in store.$state.dataForm) {
   store.$state.dataForm[k] = ''
  }
  const pageCount = pdf.internal.getNumberOfPages();
  pdf.deletePage(2)



//
//   pdf.setFontSize(18)
//   pdf.text('Список приоритетных условий, при покупке квартиры', 10,10, );
//
//   pdf.setFontSize(14)
//   pdf.text(
//    `
//    Название застройщика:
//
//    ${values[0]}
//
//    Ссылка на застройщика или их предлжения -
//    ${values[1]}
//    Омментарий о застройщике - ${values[2]}
//    Максимальная сумма квартиры - ${values[3]}
//    Процентная ставка - ${values[4]}
//    Срок ипотеки - ${values[5]}
//    Первоначальный взнос - ${values[6]}
//    Переплата - ${values[7]}
//   `
//       , 10, 20);
//
//   pdf.setFontSize(14)
//   let count = 70
//   store.$state.dataComments.forEach((item) => {
//     pdf.text(  `
//     ${item.label}:
//     ${item.comments}
//     `, 10, count);
//     count+=15
//   })
//
//
//   pdf.save("a4.pdf");
}
</script>

<style module>
.app {
  max-width: 800px;
  margin: 0 auto;
}

body::-webkit-scrollbar {
  width: 9px;               /* ширина scrollbar */
}

body::-webkit-scrollbar-track {
  background: #f0f3f6;        /* цвет дорожки */
}

body::-webkit-scrollbar-thumb {
  background-color: #08a652;    /* цвет плашки */
  border-radius: 20px;       /* закругления плашки */
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
