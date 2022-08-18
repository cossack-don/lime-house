<template>
<div :class="$style.wrapper">
    <div :class="$style.leftPart" >
<!--<pre>{{store.$state.dataForm}}</pre>-->
      <BaseInput
          v-model="store.$state.dataForm.developerName"
          :class="$style.mb10"
          placeholder=""
          title-label="Название застройщика"
      />
      <BaseInput
          v-model="store.$state.dataForm.urlDeveloperName"
          :class="$style.mb10"
          placeholder=""
          title-label="Сайт застройщика - url"
      />
      <BaseInput
          v-model="store.$state.dataForm.phone"
          :class="$style.mb10"
          placeholder=""
          v-maska="'+7-###-###-##-##'"
          title-label="Телефон"
      />
      <BaseTextarea
          v-model="store.$state.dataForm.commentsDeveloper"
          title-label="Комментарии о застройщике"
      />
    </div>
    <div :class="$style.rightPart">
      <BaseInputNumber
          maxlength="15"
          v-model="store.$state.dataForm.maximumApartmentAmount"
          :class="$style.mb10"
          title-label="Максимальная сумма жилья"
      />
      <BaseInputNumber
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
      <BaseInputNumber
          v-model="store.$state.dataForm.mortgageTerm"
          :class="$style.mb10"
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
<!--      <pre>{{v$.mortgageTerm}}</pre>-->
<!--      <div v-if="!v$.mortgageTerm.$invalid">Name field has an error.</div>-->

    </div>
  </div>
</template>

<script setup lang="ts">
import BaseInputNumber from '@/components/_components/BaseInputNumber.vue';
import BaseInput from '@/components/_components/BaseInput.vue';
import BaseTextarea from '@/components/_components/BaseTextarea.vue';
import { storeDataForm } from '@/stores/storeDataForm';
import useVuelidate from '@vuelidate/core'
import {computed, ref, watch} from "vue";
import { mapActions } from 'pinia'
import { required, minLength } from '@vuelidate/validators'
const store = storeDataForm();




// const test = (v) => {
//   return v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
// }
// ...mapActions(storeDataForm, ['increment'])
// const w = computed(() => {
//   return store.setNumbers()
//   // return test(store.$state.dataForm.maximumApartmentAmount);
// })
// type-based
// const emit = defineEmits<{
//   (e: 'change', id: number): void
//   (e: 'update', value: string): void
// }>()

const rules = computed(() => ({
  mortgageTerm: {
    required,
    minLength: minLength(2),

      $message:'222',


  },
}))
// const test = ref('')
// const TEST = computed(() => {
//   return store.setNumbers()
// })

const v$ = useVuelidate(rules, store.$state.dataForm)

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

.leftPart {
  width: 100%;
  padding: 15px;
}

.rightPart {
  width: 100%;
  padding: 15px;
}
</style>