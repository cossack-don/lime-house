<template>
  <div :class="[$style.header, $style.cont]">
    <img :class="$style.logo" src="@/assets/lime.svg" alt="">
    <h2>Lime House</h2>
  </div>
  <section :class="$style.bgHouses">

    <div :class="$style.wrapper">
     <div :class="$style.wrapperText">
       <h1 :class="$style.title">Список приоритетных условий,
         <br/> при покупке квартиры
       </h1>
       <a href="#form" :class="$style.link">Хочу заполнить и распечатать</a>
     </div>

    </div>
<!--    <div :class="$style.cont" >-->
<!--      <img src="@/assets/man.png" alt="" width="200">-->
<!--    </div>-->
  </section>
</template>

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

.cont {
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
  position: relative;
  z-index: 0;
  margin-left: auto;
  margin-bottom: auto;
  /*margin-top: 25px;*/
  margin-right: 25px;
}

.cont:before {
  content: '';
  background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
  position: absolute;
  top: -2px;
  left:-4px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity .3s ease-in-out;
  /*border-radius: 50%;*/
}

.cont:before {
  opacity: 1;
}

.cont:after {
  z-index: -1;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  /*border-radius: 50%;*/
}

@keyframes glowing {
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
}

.logo {
  width: 40px;
  height: 40px;
  margin-right: 5px;
  margin-left: 8px;
}

.header {
  width: 100%;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  padding: 5px;
  color:#ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>