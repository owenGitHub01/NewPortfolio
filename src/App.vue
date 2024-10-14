<script setup>

import Header from './components/Header.vue';
import Bio from './components/Bio.vue';
import TechStack from './components/TechStack.vue';
import Projects from './components/Projects.vue';
import Options from './components/Options.vue';
import Contact from './components/Contact.vue';


import WorkingOn from './components/WorkingOn.vue';

import { isDark } from './data';

</script>

<template>
  <div :class="{'bg-dark' : isDark, 'bg-light' : !isDark}">
    <div>
    <Header></Header>
    <Bio></Bio>
    <TechStack></TechStack>
    <Projects></Projects>
    <Options></Options>
    <Contact></Contact>
    </div>
  </div>
</template>

<style>

*{
  padding: 0;
  margin: 0;
  font-family: 'Courier New', Courier, monospace;
}

.flex {
  display: flex;
}
.flex-b {
  display: flex;
  justify-content: space-between;
}
.flex-e {
  display: flex;
  justify-content: space-evenly;
}

.w90 {
  width: 90%;
  margin: 8px auto 0;
  align-items: center;
}


.p8 {
  padding: 8px;
}


.bg-light {
  background-color: rgb(226 232 240);
}
.light {
  background-color: #999;
  color: white;
}
.text-light {
  color: white;
}
.bg-dark {
  background-color: rgb(82 82 91);
}
.dark {
  background-color: white;
  color: black;
}
.text-dark {
  color: black;
}

.colour {
  height: 30rem;
  background-color: #eee;
}
</style>
