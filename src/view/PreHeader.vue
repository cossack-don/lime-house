<template>
  <div :class="[$style.header, $style.animation]">
    <img :class="$style.logo" src="@/assets/lime.svg" alt="">
    <h2>Lime House</h2>
  </div>
</template>

<style module>
.animation {
  border: none;
  position: relative;
  z-index: 0;
}

.animation:before {
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
}

.animation:before {
  opacity: 1;
}

.animation:after {
  z-index: -1;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
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