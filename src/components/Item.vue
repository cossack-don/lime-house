<template>
<!--<div :class="$style.wrapperItem">-->
  <div :class="$style.wrapper">
    <div :class="$style.item" v-for="(item, index) in store.$state.dataForm.listlistCriterial" :key="index">
      <div style="display: flex; justify-content: space-between">
        <BaseCheckBox v-model:checked="item.checked" title="t"/>
        <img src="@/assets/icon-quastion.svg" alt="">
      </div>
      <BaseTextarea :class="$style.textarea" :disabled="!item.checked" v-model="item.comments"  title-label="Комментарий"/>
    </div>
  </div>



<!--  <div :class="$style.toolTip">-->
<!--    <img src="@/assets/quastion.svg" alt="">-->
<!--    <div :class="$style.www">WWW</div>-->
<!--  </div>-->
<!--  https://www.sravni.ru/bank/sberbank-rossii/ipoteka/-->
<!--  https://www.sberbank.ru/ru/person/credits/homenew-->
<!--</div>-->
</template>

<script setup lang="ts">
import BaseTextarea from '@/components/_components/BaseTextarea.vue'
import BaseCheckBox from '@/components/_components/BaseCheckBox.vue'
import DataTerms from "@/Data";
import { storeDataForm } from '@/stores/storeDataForm';
import {defineEmits} from "vue";
const emit = defineEmits(['test']);
const input = (value:any) => {
  emit('test', value);
};
const store = storeDataForm();
</script>

<style module>
.item {
  width: 30%;
  padding: 15px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 15px;
  margin-left: 10px;
  margin-right: 10px;
  box-shadow: 8px 0px 8px 0px rgba(34, 60, 80, 0.11);
}

.wrapperItem {
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
}

.toolTip {
  padding: 5px;
  width: 25px;
  height: 25px;
  background: #08a652;
  border-radius: 8px;

  position: relative;
}

.toolTip:hover {
  cursor: pointer;
}

.www {
  position: absolute;
  margin-top: 5px;
  left: -65px;
  visibility: hidden;
  opacity: 0;
  transition: visibility ease 0s, opacity ease 1s;
  background: red;
  width: 150px;
  padding: 5px;
  border-radius: 8px;
}

.toolTip:hover .www{
  visibility: visible;
  opacity: 1;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
}

.textarea {
  margin-top: 10px;
}
</style>