<template>
<div :class="$style.wrapper">

    <div :class="$style.leftPart">
      <BaseInput :class="$style.mb5" placeholder="" title-label="Название застройщика"/>
      <BaseInput :class="$style.mb5" placeholder="" title-label="Сайт застройщика - url"/>
      <BaseTextarea/>
    </div>

    <div :class="$style.rightPart">
      <BaseInput :class="$style.mb5" placeholder="" title-label="Максимальная сумма жилья"/>
      <BaseInput :class="$style.mb5" placeholder="" title-label="Cтавка - %"/>
      <BaseInput :class="$style.mb5" placeholder="" title-label="Срок ипотеки"/>
      <BaseInput :class="$style.mb5" placeholder="" title-label="Первоначальный взнос"/>
      <BaseInput placeholder="" title-label="Срок ипотеки"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseInput from '@/components/_components/BaseInput.vue'
import BaseTextarea from '@/components/_components/BaseTextarea.vue'
</script>

<style module>
.wrapper {
  background: #2c2c2c;
  border:2px solid #0f0;
  border-radius: 8px;
  display: flex;
}

.mb5 {
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