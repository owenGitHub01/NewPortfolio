<script setup>
import { onMounted, ref } from "vue";
import { animate, spring } from "motion"

import { isDark, changeColour } from "../data";

let mode = ref("dark")

onMounted(() => {
  const animation = animate(".box", {scale: 1.1},
    {
      duration: 4,
      easing: spring(),
      repeat: Infinity,
      direction: "alternate"
    }
  )
})

</script>

<template>
  <div class="main" >
    <div class="flex-b w90">
      <div>
        <h2 class="p8 rotate" :class="{ 'light' : !isDark, 'dark' : isDark }">It's me</h2>
        <h1 class="box" :class="{ 'text-light' : isDark, 'text-dark' : !isDark }">Owen</h1>
      </div>
      <div>
        <button class="toggle" :onclick="changeColour">
          <img class="show" v-if="isDark" src="../images/sun.png" alt="">
          <img v-if="!isDark" src="../images/brightness.png" alt="">
        </button>
      </div>
    </div>
    
    
  </div>
  
</template>

<style scoped>


*{
  padding: 0;
  margin: 0;
}

.main {
  width: 100%;
  padding: 12px 0 2rem;
}


.box {
  width: auto;
  padding: 4px;
  height: auto;
  border-radius: 5px;
  text-align: center;
}

.rotate {
  rotate: -10deg;
  margin: 4px 0 8px;
}

.toggle {
  background-color: inherit;
  border: none;
  cursor: pointer;
}
.toggle img {
  width: 40px;
}

.show {
  color: white;
}
</style>
