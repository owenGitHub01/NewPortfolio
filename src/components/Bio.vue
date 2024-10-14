<script setup>

import { isDark } from '../data';

</script>

<template>
  <div class="main">
    <div class="available flex">
      <div class="circle"></div>
      <p :class="{'available-dark' : isDark, 'available-light' : !isDark}">Available for work</p>
    </div>
    <div class="flex-local width">
      <img class="img" src="../images/IMG_E6548.JPG" alt="">
      <div class="rest">
        <p :class="{'text-dark' : !isDark, 'text-light' : isDark}" class="p">A hard working, passionate software develop</p>
        <div class="flex-2 icons">
          <a target="_blank" href="https://www.linkedin.com/in/owen-pearce-283388263/">
            <img src="../images/linkedin.png" alt="">
          </a>
          <a target="_blank" href="https://github.com/owenGitHub01">
            <img src="../images/github.png" alt="">
          </a>
          <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=owen@domail.co.uk">
            <img src="../images/gmail.png" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.main {
  height: 25rem;
}

.available {
  justify-content: center;
  align-items: center;
  padding-top: 6rem;
}
.circle {
  background-color: rgb(163 230 53);
  border: 2px solid  rgb(236 252 203);
  height: 20px;
  width: 20px;
  border-radius: 50%;
  transition: all 1s ease-in-out;
}
.circle:hover {
  width: 28px;
  height: 28px;
}
.available p {
  padding-left: 8px;
}

.available-dark {
  color: rgb(236 252 203);
}
.available-light {
  color: rgb(101 163 13);
}

.flex-local {
  display: flex;
  justify-content: center;
}

.width {
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  padding: 8px 0;
  align-items: center;
  padding-top: 2rem;
}

.img {
  width: 220px;
  height: 220px;
  
  border-radius: 50%;
  
}

.p {
  width: 100%;
  padding-left: 16px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.flex-2 {
  display: flex;
}
.flex-2 * {
  margin: 0 4px 0;
}
.icons {
  width: 90%;
  padding-left: 16px;
  padding-top: 12px;
}
.icons img {
  width: 40px;
  border: none;
}

</style>
