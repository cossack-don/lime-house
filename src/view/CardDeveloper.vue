<template>
<div :class="$style.wrapper">
<pre>{{store.$state.dataForm}}</pre>
    <div :class="$style.leftPart" >
      <BaseInput
          v-model="store.$state.dataForm.dataForm.developerName"
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
      <BaseTextarea
          v-model="store.$state.dataForm.commentsDeveloper"
          title-label="Комментарии о застройщике"
      />
    </div>
    <div :class="$style.rightPart">
      <BaseInput
          v-model="store.$state.dataForm.maximumApartmentAmount"
          :class="$style.mb10"
          placeholder=""
          title-label="Максимальная сумма жилья"
      />
      <BaseInput
          v-model="store.$state.dataForm.interestRate"
          :class="$style.mb10"
          placeholder=""
          title-label="Cтавка - %"
      />
      <BaseInput
          v-model="store.$state.dataForm.downPayment"
          :class="$style.mb10"
          placeholder=""
          title-label="Первоначальный взнос"
      />
      <BaseInput
          v-model="store.$state.dataForm.mortgageTerm"
          placeholder=""
          title-label="Срок ипотеки"
      />
      <BaseInput
          v-model="store.$state.dataForm.overpayment"
          :class="$style.mb10"
          placeholder=""
          title-label="Переплата"
      />
      <div v-if="v$.developerName.$error">Name field has an error.</div>111111
      <pre>{{ v$.developerName.$error.$message}}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseInput from '@/components/_components/BaseInput.vue';
import BaseTextarea from '@/components/_components/BaseTextarea.vue';
import { reactive, defineEmits, ref } from "vue";
import { storeDataForm } from '@/stores/storeDataForm';

const store = storeDataForm();

// type-based
// const emit = defineEmits<{
//   (e: 'change', id: number): void
//   (e: 'update', value: string): void
// }>()

interface IFormData {
  nameDeveloper:string
}
const nameDeveloper = ref('');

const formData = reactive<IFormData>({
  nameDeveloper:''
})
console.log(nameDeveloper)
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

.leftPart {
  width: 100%;
  padding: 15px;
}

.rightPart {
  width: 100%;
  padding: 15px;
}
</style>