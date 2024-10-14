<script setup>
import WorkingOn from './WorkingOn.vue';
import AboutMe from './AboutMe.vue';

import { isDark } from '../data';

import { ref } from 'vue';

let chosenActive = ref(false)

const changeActive = (value) => {
  chosenActive.value = value
}

</script>

<template>
  <div class="options">
    <h2 :onclick="() => changeActive(true)" :class="{'text-light' : isDark, 'text-dark': !isDark, 'underline' : chosenActive}">About Me</h2>
    <p>|</p>
    <h2 :onclick="() => changeActive(false)" :class="{'text-light' : isDark, 'text-dark': !isDark, 'underline' : !chosenActive}">What Next..</h2>
  </div>
  <div>
    <AboutMe v-if="chosenActive"></AboutMe>
    <WorkingOn v-if="!chosenActive"></WorkingOn>
  </div>
</template>

<style>

.options {
  display: flex;
  justify-content: center;
  align-items: center;
}
.options p {
  margin: 0 12px;
  font-size: 40px;
  color: white;
}
.options h2 {
  cursor: pointer;
}

.underline {
  text-decoration: underline;
}

</style>
