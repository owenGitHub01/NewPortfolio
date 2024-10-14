<script setup>
import { ref } from 'vue';
import { isDark } from '../data';

let show = ref(false)

const change = (val) => {
  show.value = val
}

</script>

<template>
  <div class="main">
    <p class="w90 p" :class="{'text-dark' : !isDark, 'text-light' : isDark}">I am eager to continue developing my C# understanding because it is a powerful and versatile programming language that plays a key role in modern software development. I want to strengthen my coding skills and understand object-oriented programming better, and C# seems like the perfect language for that journey. My goal is to gain hands-on experience through projects, exploring C#’s features and understanding how to solve real-world problems effectively.</p>
    <div class="w90" :class="{'text-dark' : !isDark, 'text-light' : isDark}">
      <div v-if="!show" class="btn-div">
        <button :onclick="() => change(true)" :class="{'text-light' : isDark, 'text-dark': !isDark}" class="btn">See What I'm Building!</button>
      </div>
      <div v-motion-roll-bottom v-if="show" class="onShow">
        <img class="img" src="../images/projects/portfolio-next.png" alt="">
        <h1 class="title">SafeBank</h1>
        <p class="bio">Introducing a front and backend project I am currently building, SafeBank is a banking project where you can signup and login to your bank, transfer and request money from other SafeBank users!</p>
        <h5>Keep Up To Date...</h5>
        <div class="flex-local">
          <img class="icon" src="../images/github.png" alt="">
          <a target="_blank" href="https://github.com/owenGitHub01/safebank">Git Repo</a>
        </div>
        <div class="btn-div">
          <button :class="{'text-light' : isDark, 'text-dark': !isDark}" class="btn" :onclick="() => change(false)">Show Less</button>
        </div>
        
      </div> 
      
    </div>
  </div>
</template>

<style scoped>

*{
  padding: 0;
  margin: 0;
  font-family: 'Courier New', Courier, monospace;
}

.main {
  width: 100%;
  /* background-color: rgb(82 82 91); */  
  /* --s: 229px; control the size
  --c1: #1d1d1d;
  --c2: #4e4f51;
  --c3: #3c3c3c;
  
  background:
    repeating-conic-gradient(from 30deg,#0000 0 120deg,var(--c3) 0 180deg) 
     calc(.5*var(--s)) calc(.5*var(--s)*0.577),
    repeating-conic-gradient(from 30deg,var(--c1) 0 60deg,var(--c2) 0 120deg,var(--c3) 0 180deg);
  background-size: var(--s) calc(var(--s)*0.577); */
}
.w90 {
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
}

.btn-div {
  width: 100%;
  text-align: center;
}
.btn {
  width: 300px;
  height: 30px;
  font-size: 18px;
  margin: 2rem 0;
  border: none;
  background-color: cadetblue;
  border-radius: 12px;
  cursor: pointer;
}

.p {
  margin: 2rem auto 4rem;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.img {
  width: 100%;
  height: 400px;
}

.title {
  margin: 1rem 0 .3rem;
  color: cadetblue;
}

.bio {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.flex-local {
  display: flex;
  align-items: center;
}

h5 {
  padding: 2rem 0 .5rem;
}

.icon {
  width: 40px;
  height: 40px;
}

a {
  padding-left: 8px;
  color: white;
}

</style>
