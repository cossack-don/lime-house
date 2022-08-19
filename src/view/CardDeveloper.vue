<template>
  <div   >
    <div :class="$style.wrapper">
      <div :class="$style.leftPart" >
        <BaseInput
            requiredStar
            :error="store.$state.isError"
            v-model="store.$state.dataForm.developerName"
            :class="$style.mb10"
            placeholder="Название застройщика"
            title-label="Название застройщика"
            maxlength="30"
        />
        <BaseInput

            v-model="store.$state.dataForm.urlDeveloperName"
            :class="$style.mb10"
            maxlength="30"
            placeholder="Сайт застройщика"
            title-label="Сайт застройщика"
        />
        <BaseInput
            v-model="store.$state.dataForm.phone"
            :class="$style.mb10"
            placeholder="Телефон"
            v-maska="'+7-###-###-##-##'"
            title-label="Телефон"
        />
        <BaseInput
            v-model="store.$state.dataForm.whatCity"
            :class="$style.mb10"
            maxlength="30"
            placeholder="Район и город недвижимости"
            title-label="Район и город недвижимости"
        />
        <BaseInput
            v-model="store.$state.dataForm.propertyLocation"
            :class="$style.mb10"
            maxlength="30"
            placeholder="Геолокация на карте"
            title-label="Геолокация на карте"
        />
        <BaseInput
            v-model="store.$state.dataForm.space"
            :class="$style.mb10"
            maxlength="0"
            disabled
            placeholder="Пустое место"
            title-label="Пустое место"
        />
      </div>
      <div :class="$style.rightPart">
        <BaseInputNumber
            requiredStar
            :error="store.$state.isError"
            maxlength="15"
            v-model="store.$state.dataForm.maximumApartmentAmount"
            :class="$style.mb10"
            title-label="Максимальная сумма жилья"
        />

        <BaseInputNumber
            requiredStar
            :error="store.$state.isError"
            v-model="store.$state.dataForm.interestRate"
            :class="$style.mb10"
            title-label="Cтавка - %"
            maxlength="6"
            :options="{
              precision: 1,
              prefix: '',
              suffix: ' %',
              decimal: ',',
              thousand: '',
              acceptNegative: false,
              isInteger: false}"
        />
        <!--      <BaseInput-->
        <!--          v-model="store.$state.dataForm.interestRate"-->
        <!--          :class="$style.mb10"-->
        <!--          placeholder=""-->
        <!--          title-label="Cтавка - %"-->
        <!--          v-maska="'##,##'"-->
        <!--      />-->
        <BaseInputNumber
            requiredStar
            :error="store.$state.isError"
            v-model="store.$state.dataForm.downPayment"
            :class="$style.mb10"
            title-label="Первоначальный взнос"
            maxlength="15"
        />
        <!--      <BaseInput-->
        <!--          v-model="store.$state.dataForm.mortgageTerm"-->
        <!--          placeholder=""-->
        <!--          title-label="Срок ипотеки - в годах"-->
        <!--          v-maska="'##'"-->
        <!--      />-->
        <!--              <pre>{{v$.mortgageTerm}}</pre>-->
<!--        <div v-if="!v$.mortgageTerm.$invalid">Name field has an error. /*#ff6a59 error border*/</div>-->
<!--        {{v$.mortgageTerm}}-->
<!--        :error="!v$.mortgageTerm.$invalid"-->
<!--        :class="[$style.mb10, {[$style.test]: !v$.mortgageTerm.$invalid}]"-->

        <BaseInputNumber
            requiredStar
            :error="store.$state.isError"
            v-model="store.$state.dataForm.mortgageTerm"
            :class="[$style.mb10]"
            title-label="Срок ипотеки"
            maxlength="6"

            :options="{
              precision: 0,
              prefix: '',
              suffix: ' лет',
              decimal: '',
              thousand: '',
              acceptNegative: false,
              isInteger: false}"
        />

        <BaseInputNumber
            v-model="store.$state.dataForm.incomeCustomer"
            :class="$style.mb10"
            title-label="Доход семьи/покупателя"
            maxlength="12"
        />
        <BaseInputNumber
            v-model="store.$state.dataForm.wishMonthlyPayment"
            :class="$style.mb10"
            title-label="Желаемый ежемесячный платёж"
            maxlength="12"
        />
      </div>
    </div>
    <BaseTextarea
        :class="$style.mt25"
        v-model="store.$state.dataForm.commentsDeveloper"
        title-label="Комментарии о застройщике"
        placeholder="Комментарии"
        maxlength="200"
        rows="3"
    />
  </div>
</template>

<script setup lang="ts">

import { storeDataForm } from '@/stores/storeDataForm';

import {computed, ref, watch} from "vue";
import { mapActions } from 'pinia'

const store = storeDataForm();

const isError = ref(false);


watch(store.$state.dataForm, (currentValue, oldValue) => {
  console.log(currentValue);

  if(currentValue.developerName !== '' && currentValue.urlDeveloperName !== '') {
    isError.value = true
  } else {
    isError.value = false
  }
// Если 4 нужных поля не заполнены, кнопка
});
</script>

<style module>

.wrapper {
  border:2px solid #08a652;
  border-radius: 8px;
  display: flex;
}
.input {
  outline: none;
  margin-top: 4px;
  border: 2px solid #08a652;
  border-radius: 8px;
  padding: 5px;
  background: #ffffff;
  font-size: 17px;
  font-weight: 400;
  line-height: 24px;
  color: #494e53;
}
.mb10 {
  margin-bottom: 10px;
}

.mt25 {
  margin-top: 25px;
}

.leftPart {
  width: 100%;
  padding: 15px;
}

.rightPart {
  width: 100%;
  padding: 15px;
}
</style>