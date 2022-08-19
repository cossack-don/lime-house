<template>
  <div :class="$style.wrapper">
    <Transition
        :enter-from-class="$style.enterFrom"
        :leave-to-class="$style.leaveTo"
        :leave-active-class="$style.leaveActive"
        :enter-active-class="$style.enterActive"
    >
      <div
          v-if="storeState.pushMessage.toggle"
          :class="$style.pushMessage"
      >
        <h4 :class="$style.messageTitle">{{ storeState.pushMessage.title }}</h4>
        <p :class="$style.messageBody">{{ storeState.pushMessage.description }}</p>
      </div>
    </Transition>

    <HeaderHouses/>
    <Form/>
    <Cards/>
  </div>
</template>

<script lang="ts" setup>
import Form from '@/view/Form.vue';
import HeaderHouses from '@/view/HeaderHouses.vue';
import Cards from '@/view/Cards.vue';
import { storeDataForm } from '@/stores/storeDataForm';

const storeState = storeDataForm().$state;
</script>

<style module>
.wrapper {
  position: relative;
}
.pushMessage {
  position: fixed;
  z-index: 2;
  right: 0;
  top: 0;
  border: 4px solid #08a652;
  height: 200px;
  color: #08a652;
  width: 20%;
  padding: 15px;
  border-radius: 8px;
  background: #fff;
  margin: 15px;
  box-shadow: 8px 0px 8px 0px rgb(34 60 80 / 11%);
}

.messageTitle {
  text-align: center;
  margin-bottom: 15px;
}

.messageBody {
  background: #f0f3f6;
  height: 80%;
  padding: 15px;
  border-radius: 8px;
  line-height: 1.5;
}
/*animation push-message*/
.enterActive {
  transition: all 0.3s ease-out;
}

.leaveActive {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.enterFrom,
.leaveTo{
  transform: translateX(20px);
  opacity: 0;
}
</style>