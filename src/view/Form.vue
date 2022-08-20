<template>
  <div :class="$style.app">
    <h2 :class="$style.title">Подборка критериев:</h2>

    <form @submit.prevent="downloadPDF">
      <div
          id="form"
          :class="$style.wrapper"
      >
        <Criterions/>
        <CardDeveloper/>

      </div>

      <BaseButton
          :class="$style.buttonSubmit"
          type="submit"
          title="Сформировать PDF"
      />
    </form>


  </div>
</template>

<script setup lang="ts">
import { storeDataForm } from '@/stores/storeDataForm';
import { generationPDF } from '@/utils/templatePDF';
// components
import CardDeveloper from '@/view/CardDeveloper.vue';
import Criterions from '@/view/Criterions.vue';

const store = storeDataForm();

const downloadPDF =  () => {
  // ТУТ Список обязательных полей. Если они пустые, мы не отправляем форму
  // не генерим ПДФ - а подсвечиваем поля с обязательными
  if(store.$state.dataForm.developerName === ''
      || store.$state.dataForm.mortgageTerm === ''
      || store.$state.dataForm.downPayment === ''
      || store.$state.dataForm.interestRate === ''
      || store.$state.dataForm.maximumApartmentAmount === ''
  ) {

    store.setError(true)
    store.setErrorPushMessage()
  } else {
    store.setError(false)
    store.setSuccessPushMessage()
    generationPDF();
    // без релоада не очищает пдф поля
    // location.reload();

    for(let k in store.$state.dataForm) {
      store.$state.dataForm[k] = ''
    }
    //  TODO Нужно отправлять + на бекенд в БД - если вдруг криво на пдф ляжет, чтобы вытащить с БД
    console.log('SUBMIT')
  }
}
</script>

<style module>
.app {
  /*max-width: 800px;*/
  margin: 0 auto;
}

.wrapper {
  display: flex;
  justify-content: space-between;
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