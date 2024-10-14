<script setup>

import { isDark } from '../data';

</script>

<template>
  <div class="main" :class="{'tech-dark' : isDark, 'tech-light' : !isDark}">
    <h1 class="text-light" :class="{'text-light' : !isDark, 'text-dark' : isDark}">Tools</h1>
    <div class="logos">
      <div class="logos-slide">
        <img src="../images/tech/document.png" alt="">
        <img src="../images/tech/physics.png" alt="">
        <img src="../images/tech/js.png" alt="">
        <img src="../images/tech/css-3.png" alt="">
        <img src="../images/tech/social.png" alt="">
        <img src="../images/tech/bootstrap.png" alt="">
        <img src="../images/tech/wind.png" alt="">
        <img src="../images/tech/c-sharp.png" alt="">
      </div>
      <div class="logos-slide">
        <img src="../images/tech/document.png" alt="">
        <img src="../images/tech/physics.png" alt="">
        <img src="../images/tech/js.png" alt="">
        <img src="../images/tech/css-3.png" alt="">
        <img src="../images/tech/social.png" alt="">
        <img src="../images/tech/bootstrap.png" alt="">
        <img src="../images/tech/wind.png" alt="">
        <img src="../images/tech/c-sharp.png" alt="">
      </div>
      <div class="logos-slide">
        <img src="../images/tech/document.png" alt="">
        <img src="../images/tech/physics.png" alt="">
        <img src="../images/tech/js.png" alt="">
        <img src="../images/tech/css-3.png" alt="">
        <img src="../images/tech/social.png" alt="">
        <img src="../images/tech/bootstrap.png" alt="">
        <img src="../images/tech/wind.png" alt="">
        <img src="../images/tech/c-sharp.png" alt="">
      </div>
      <div class="logos-slide">
        <img src="../images/tech/document.png" alt="">
        <img src="../images/tech/physics.png" alt="">
        <img src="../images/tech/js.png" alt="">
        <img src="../images/tech/css-3.png" alt="">
        <img src="../images/tech/social.png" alt="">
        <img src="../images/tech/bootstrap.png" alt="">
        <img src="../images/tech/wind.png" alt="">
        <img src="../images/tech/c-sharp.png" alt="">
      </div>
    </div>
  </div>
</template> 

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.tech-dark {
  background-color: rgb(203 213 225);

}
.tech-light {
  /* background-color: rgb(63 63 70); */
  background-color: rgb(82 82 91);
}

.main {
  height: auto;
  text-align: center;
  padding: 2rem 0;
  margin: 4rem 0;
}
.main h1 {
  font-size: 40px;
}
.main-img {
  width: 32px;
}

@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.logos {
  overflow: hidden;
  padding: 20px 0;
  white-space: no-wrap;
  display: flex;
}
.logos-slide {
  display: inline-block;  
  display: flex;
  animation: 25s slide infinite linear;
}
.logos-slide img {
  height: 50px;
  margin: 0 28px;
}

@media only screen and (min-width: 800px){

  .logos-slide img {
    margin: 0 40px;
  }
}


@media only screen and (min-width: 1200px){

  .logos-slide img {
    margin: 0 48px;
  }
}

</style>
