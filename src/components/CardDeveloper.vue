<template>
<div :class="$style.wrapper">


    <div :class="$style.leftPart">
      <label :class="[$style.label, $style.halfWidth]">
        Название застройщика
        <input type="text">
      </label>

      <label :class="[$style.label, $style.halfWidth]">
        url - ссылка на застройщика
        <input type="text">
      </label>

      <label :class="[$style.label, $style.halfWidth]">
        Комментарии о застройщике
        <textarea></textarea>
      </label>
    </div>

<div :class="$style.rightPart">
  <label :class="[$style.label, $style.halfWidth]">
    Максимальная сумма жилья
    <input type="text">
  </label>
  <label :class="[$style.label, $style.halfWidth]">
    % ставка
    <input type="text">
  </label>

  <label :class="[$style.label, $style.halfWidth]">
    Срок ипотеки
    <input type="text">
  </label>

  <label :class="[$style.label, $style.halfWidth]">
    Первоначальный взнос
    <input type="text">
  </label>

  <label :class="[$style.label, $style.halfWidth]">
    Переплата
    <input type="text">
  </label>
</div>



  </div>


</template>

<script>
export default {
  name: "CardDeveloper"
}
</script>

<style module>
.wrapper {
  background: #ffffff;
  padding: 15px;
  border-radius: 8px;
  display: flex;
}

.label {
  display: flex;
  flex-direction: column;
}

.halfWidth {
  /*width: 50%;*/
}

.leftPart {
  width: 100%;
}

.rightPart {
  width: 100%;
}
</style>