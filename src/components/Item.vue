<template>
<!--<div :class="$style.wrapperItem">-->

  <div :class="$style.item">
    <div style="display: flex; justify-content: space-between">
      <div>
        <label>
          <input type='checkbox' :class="$style.input">
          <span>title</span>
        </label>
      </div>

      <div>icon ?</div>
    </div>


    <input placeholder="Комментарий" type="text">


  </div>


<!--  <div :class="$style.toolTip">-->
<!--    <img src="@/assets/quastion.svg" alt="">-->
<!--    <div :class="$style.www">WWW</div>-->
<!--  </div>-->
<!--  https://www.sravni.ru/bank/sberbank-rossii/ipoteka/-->
<!--  https://www.sberbank.ru/ru/person/credits/homenew-->
<!--</div>-->





</template>

<script setup>
import DataTerms from "@/Data";
import BaseCheckBox from "@/components/BaseCheckBox";
</script>

<style module>
.item {
  width: 24%;
  padding: 15px;
  border-radius: 8px;
  background: #ffffff;
  margin-bottom: 15px;
  margin-left: 15px;
  margin-right: 15px;
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.11);
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
</style>