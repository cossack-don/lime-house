<template>
  <section>
    <PreHeader/>
    <div :class="$style.bgHouses">
      <div :class="$style.wrapper">

        <div :class="$style.wrapperText">
          <h1 :class="$style.title">
            Список приоритетных условий, <br/>
            при покупке квартиры
          </h1>
          <a href="#form" :class="$style.link">
            Хочу заполнить и распечатать
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import PreHeader from '@/view/PreHeader.vue';
</script>

<style module>
.wrapper {
  margin-left: 10%;
}

.title {
  font-size: 23px;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 50px;
}

.bgHouses {
  width: 100%;
  background: #2c2c2c url('~@/assets/bg-home.png') no-repeat center;
  height: 600px;
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0px 20px 9px 0px rgb(34 60 80 / 23%);
}

.wrapperText {
  background: #ffffff;
  border-radius: 8px;
  padding: 25px 15px 35px 15px;
}

.link {
  border: solid #08a652 2px;
  border-radius: 8px;
  padding: 15px;
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