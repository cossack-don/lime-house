<template>
  <div :class="$style.wrapper">
    <div
        :class="$style.item"
        v-for="(item, index) in store.$state.dataComments"
        :key="index"
    >
      <div style="display: flex; justify-content: space-between">
        <!-- checkbox -->
        <BaseCheckBox v-model:checked="item.checked" :labelText="item.label"/>
        <!-- tooltip -->
        <div :class="$style.toolTip">

         <template v-if="index === 2">
           <img
               src="@/assets/icon-quastion.svg"
               alt=""
               @mouseover="store.setPushMessage({toggle:true, description:item.textTooltip, title:item.label})"
               @mouseleave="store.setPushMessage({toggle:false, description:item.textTooltip, title:item.label})"
           >
         </template>
          <template v-else>
            <img
                src="@/assets/icon-quastion.svg"
                alt=""
                @mouseover="store.setPushMessage({toggle:true, description:item.textTooltip, title:item.label})"
                @mouseleave="store.setPushMessage({toggle:false, description:item.textTooltip, title:item.label})"
            >
          </template>
        </div>
      </div>
      <!-- textarea -->
      <BaseTextarea
          :class="[$style.textarea, {[$style.opacity]: !item.checked}]"
          :disabled="!item.checked"
          v-model="item.comments"
          title-label="Комментарий"
          placeholder="Описание"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseTextarea from '@/components/UI/BaseTextarea.vue'
import BaseCheckBox from '@/components/UI/BaseCheckBox.vue'
import { storeDataForm } from '@/stores/storeDataForm';
const store = storeDataForm();
</script>

<style module>
.opacity {
  opacity: 0.4;
}

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

.toolTip {
  padding: 5px;
  width: 25px;
  height: 25px;
  border-radius: 8px;
  position: relative;
}

.toolTip:hover {
  cursor: pointer;
}

.wrapper {
  width: 48%;
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
}

.textarea {
  margin-top: 10px;
}
</style>