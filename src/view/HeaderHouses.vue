<template>
  <section :class="$style.bgHouses">

    <div :class="$style.wrapper">
     <div :class="$style.wrapperText">
       <h1 :class="$style.title">Список приоритетных условий,
         <br/> при покупке квартиры
       </h1>
       <a href="#form" :class="$style.link">Хочу заполнить и распечатать</a>
     </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/_components/BaseButton.vue'
</script>

<style module>
.wrapper {
  margin-left: 10%;
}

.title {
  font-size: 23px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 15px;
}

.bgHouses {
  width: 100%;
  background: #2c2c2c url('~@/assets/test.png') no-repeat center;
  height: 600px;
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.wrapperText {
  width: 400px;
  background: #2c3e50;
  border-radius: 8px;
  padding: 15px 15px 20px 15px;
}

.link {
  border: solid #08a652 2px;
  border-radius: 8px;
  padding: 5px;
  background: #08a652;
  font-size: 17px;
  line-height: 24px;
  color: #ffffff;
  text-decoration: none;
}

.link:hover {
  color: #494e53;
  transition: 0.5s;
  cursor: pointer;
  border: 2px solid #f0f3f6;
  background: #f0f3f6;
}
</style>