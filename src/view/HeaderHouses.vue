<template>
  <section :class="$style.bgHouses">

    <div :class="$style.wrapper">
     <div :class="$style.wrapperText">
       <h1 :class="$style.title">Список приоритетных условий, <br/> при покупке квартиры.</h1>
       <BaseButton title="Получить подборку"/>
     </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/_components/BaseButton.vue'
</script>

<style module>
.wrapper {
  width: 50%;
  padding: 25px 0 0 10%;
}

.title {

  font-weight: bold;
  color: #fff;
}

.bgHouses {
  width: 100%;
  background: #2c2c2c url('~@/assets/test.png') no-repeat center;
  height: 600px;
  background-size: cover;
}

.wrapperText {
  background: #2c3e50;
  border-radius: 8px;
  margin-top: 30%;
  padding: 15px;
}

</style>