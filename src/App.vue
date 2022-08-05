<template>
  https://vuelidate-next.netlify.app/#getting-started-1  - vue validate for vue 3 needed install <br/>
  <HeaderHouses/>
  <div :class="$style.app">
    <h2 :class="$style.title">Подборка критериев:</h2>
    <form id="form" :class="$style.wrapper" @submit.prevent="generatePDF">
      <Item/>
      <CardDeveloper/>
      <BaseButton :class="$style.buttonSubmit" type="submit" title="Сформировать PDF" />
    </form>
  </div>
</template>

<script lang="ts" setup>
import BaseButton from '@/components/_components/BaseButton.vue'
import CardDeveloper from '@/view/CardDeveloper.vue';
import HeaderHouses from '@/view/HeaderHouses.vue';
import Item from '@/components/Item';
import { doc } from '@/utils/generatePDF'

const generatePDF = () => {
  console.log('generate-pdf')
  // doc.text(text, 10, 10);
  doc.save("a4.pdf");
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
  border-radius: 8px;
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
  background: url('~@/assets/man.png') no-repeat center;
  background-size: 100%;
  border-color: #0f0;
  right: -43%;
}

.buttonSubmit {
  margin-top: 15px;
  text-align: center;
}

.title {
  text-align: center;
  padding: 25px;
}
</style>
