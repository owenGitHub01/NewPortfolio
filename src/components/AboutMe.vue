<script setup>

import { ref } from 'vue';
import { isDark } from '../data';

let info = [
  {
    title: "Hi I'm Owen",
    bio: "I'm a passionate software developer looking for an opportunity to express my hardwork ethic and love for software. I’m currently learning full-stack development, with a focus on C# and Vue JS. I am based in Bicester, Oxfordshire.",
  },
  {
    title: "My Journey",
    bio: "I started coding as my farther needed a simple contact form for his customers to enter some form of data, I was intrigued and looked into web development and absolutely loved it. I love problem soliving and creating things others can use with ease.",
  },
  {
    title: "Current Skills",
    bio: "I have a good knowledge of the basics such as Javascript, CSS and HTML. I have since got very comfortable with both Vue JS and React JS. I am looking to expand my current basic knowledge of C# and continue developing applications in Vue and React!"
  },
  {
    title: "Personal Touch",
    bio: "In my free time I continue on with my studies and developing applications, if I am not studying or resuming my studies, I enjoy watching and playing football as well as walking my dog, he's a gorgeous chocolate miniature dachshund called Dash!"
  }
]
const length = info.length

let curActive = ref(0)

const changeCur = (value) => {
  console.log(value)
  curActive.value = value - 1
}
const changeLeft = () => {
  if(curActive.value === 0){
    curActive.value = length - 1
  }
  else {
    curActive.value--
  }
}
const changeRight = () => {
  if(curActive.value === length - 1){
    curActive.value = 0
  }
  else {
    curActive.value++
  }
}

</script>

<template>
  <div class="main">
    <div class="w90">
      <div class="border" v-for="(about, index) in info">
        <div :class="{'text-light': isDark, 'text-dark' : !isDark, 'border-none' : index !== curActive }" v-if="index === curActive">
          <div>
            <div class="title">
              <h1>{{about.title}}</h1>
            </div>
          </div>
          <p class="bio">{{ about.bio }}</p>
          <div class="btns">
            <span :class="{'text-light': isDark, 'text-dark' : !isDark}" class="btn left" :onclick="changeLeft"><</span>
            <div class="point" v-for="a in length" :onclick="() => changeCur(a)"></div>
            <span :class="{'text-light': isDark, 'text-dark' : !isDark}" class="btn right" :onclick="changeRight">></span>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<style scoped>


.main {
  width: 100%;
}
.main .get {
  text-align: center;
  padding: 4rem 0 0;
}

.w90 {
  width: 90%;
  height: 20rem;
}

.border {
  text-align: center;
  margin: 5rem 0 3rem;
}

.title {
  margin-bottom: 8px;
  color: cadetblue;
}
.bio {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  width: 380px;
  margin: 0 auto;
}

.btns {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
}
.btn {
  font-size: 40px;
  background-color: inherit;
  cursor: pointer;
  margin: 0 32px;
}

.show-light {
  background-color: aliceblue;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
.show-dark {
  background-color: black;
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

.point {
  height: 20px;
  width: 20px;
  background-color: rgb(203 213 225);
  border-radius: 50%;
  margin: 0 8px;
  cursor: pointer;
}


</style>
