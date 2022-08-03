<template>
<div :class="$style.wrapper">

    <div :class="$style.leftPart">
      <BaseInput
          v-model="formData.nameDeveloper"
          :class="$style.mb10"
          placeholder=""
          title-label="Название застройщика"
      />
      <BaseInput :class="$style.mb10" placeholder="" title-label="Сайт застройщика - url"/>
      <BaseTextarea title-label="Комментарии о застройщике"/>
    </div>

    <div :class="$style.rightPart">
      <BaseInput :class="$style.mb10" placeholder="" title-label="Максимальная сумма жилья"/>
      <BaseInput :class="$style.mb10" placeholder="" title-label="Cтавка - %"/>
      <BaseInput :class="$style.mb10" placeholder="" title-label="Срок ипотеки"/>
      <BaseInput :class="$style.mb10" placeholder="" title-label="Первоначальный взнос"/>
      <BaseInput placeholder="" title-label="Срок ипотеки"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseInput from '@/components/_components/BaseInput.vue';
import BaseTextarea from '@/components/_components/BaseTextarea.vue';
import { reactive, defineEmits } from "vue";

const formData = reactive({
  nameDeveloper:''
})
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