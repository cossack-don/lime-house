<template>
  <div  style="width: 48%;" >
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
            placeholder="Ссылка на яндекс карты"
            title-label="Ссылка на яндекс карты"
        />
        <BaseInputNumber
            maxlength="15"
            v-model="store.$state.dataForm.priceOffer"
            :class="$style.mb10"
            title-label="Цена за текущее предложение"
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
        <BaseInputNumber
            requiredStar
            :error="store.$state.isError"
            v-model="store.$state.dataForm.downPayment"
            :class="$style.mb10"
            title-label="Первоначальный взнос"
            maxlength="15"
        />
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
        :class="$style.mt13"
        v-model="store.$state.dataForm.commentsDeveloper"
        title-label="Комментарии о застройщике"
        placeholder="Комментарии"
        maxlength="200"
        rows="5"
    />
  </div>
</template>

<script setup lang="ts">
import { storeDataForm } from '@/stores/storeDataForm';
import { computed } from "vue";
// TODO переписать потом store.state на computed
const store = storeDataForm();
</script>

<style module>
.wrapper {
  border:2px solid #08a652;
  border-radius: 8px;
  display: flex;
}

.mb10 {
  margin-bottom: 10px;
}

.mt13 {
  margin-top: 13px;
}

.leftPart {
  width: 100%;
  padding: 32px;
}

.rightPart {
  width: 100%;
  padding: 32px;
}
</style>