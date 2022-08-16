<template>
<div :class="$style.wrapper">
    <div :class="$style.leftPart" >
<pre>{{store.$state.dataForm}}</pre>
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
      <BaseInput
          v-model="store.$state.dataForm.maximumApartmentAmount"
          :class="$style.mb10"
          placeholder=""
          v-maska="'## ### ###'"
          title-label="Максимальная сумма жилья"
      />
      <BaseInput
          v-model="store.$state.dataForm.interestRate"
          :class="$style.mb10"
          placeholder=""
          title-label="Cтавка - %"
          v-maska="'##,##'"
      />
      <BaseInput
          v-model="store.$state.dataForm.downPayment"
          :class="$style.mb10"
          placeholder=""
          v-maska="'## ### ###'"
          title-label="Первоначальный взнос"
      />
      <BaseInput
          v-model="store.$state.dataForm.mortgageTerm"
          placeholder=""
          title-label="Срок ипотеки - в годах"
          v-maska="'##'"
      />
<!--      <pre>{{v$.mortgageTerm}}</pre>-->
<!--      <div v-if="!v$.mortgageTerm.$invalid">Name field has an error.</div>-->

    </div>
  </div>
</template>

<script setup lang="ts">
import BaseInput from '@/components/_components/BaseInput.vue';
import BaseTextarea from '@/components/_components/BaseTextarea.vue';
import { storeDataForm } from '@/stores/storeDataForm';
import useVuelidate from '@vuelidate/core'
import { computed} from "vue";
import { required, email, minLength } from '@vuelidate/validators'
const store = storeDataForm();

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


const v$ = useVuelidate(rules, store.$state.dataForm)
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