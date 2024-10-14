<script setup>
import { isDark } from '../data';

import vue from '../images/tech/document.png'
import react from '../images/tech/physics.png'
import tailwind from '../images/tech/wind.png'
import css from '../images/tech/css-3.png'
import bootstrap from '../images/tech/bootstrap.png'

import photoAge from '../images/projects/portfolio-age.png'
import photoCw from '../images/projects/portfollio-cw.png'
import photoQuiz from '../images/projects/portfolio-quiz.png'
import photoPc from '../images/projects/portfolio-pc.png'

const projects = [
  {
    img: photoPc,
    title: "Pearce Coaching",
    briefBio: "Pearce Coaching is a website that displays my services in 1-2-1 football coaching. Built in Vue, this website is for those who look to improve their fitness or football goals.",
    links: {
      web: "https://www.pearcecoaching.co.uk/",
      git: false
    },
    tech: {
      photo1: vue,
      photo2: css
    }
  },
  {
    img: photoCw,
    title: "ConnectWave",
    briefBio: "Shop for the best deals and the best prices at ConnectWave. A simple yet beautiful frontend CRUD application.",
    links: {
      web: "https://owengithub01.github.io/ConnectWaveProject/#/",
      git: "https://github.com/owenGitHub01/ConnectWaveProject"
    },
    tech: {
      photo1: vue,
      photo2: tailwind
    }
  },
  {
    img: photoQuiz,
    title: "Frontend Quiz",
    briefBio: "This is a frontend quiz to test your knowledge of the frontend languages! Selected between 3 languages. 10 questions with a results page displaying your final results.",
    links: {
      web: "https://owengithub01.github.io/ReactQuiz/",
      git: "https://github.com/owenGitHub01/ReactQuiz"
    },
    tech: {
      photo1: react,
      photo2: tailwind
    }
  },
  {
    img: photoAge,
    title: "Age Calculator",
    briefBio: "This is an age calculator. You input whatever date you wish, and the result will be how many years, months, and days have passed since.",
    links: {
      web: "https://domail.co.uk/owen/AgeChal/index.html",
      git: false
    },
    tech: {
      photo1: react,
      photo2: bootstrap
    }
  },
]


</script>

<template>
  <div class="main" :class="{'text-light' : !isDark, 'text-dark' : isDark}">
    <h1 class="center" :class="{'text-light' : isDark, 'text-dark' : !isDark}">Projects</h1>
    <div class="grid">
      <div v-motion-roll-visible-left class="border" :class="{'border-light' : isDark, 'border-dark' : !isDark }" v-for="project in projects">
        <h1 class="w90">{{ project.title }}</h1>
        <div class="img-div">
          <img class="img" :src="project.img" alt="">      
        </div>
        <p class="w90 font">{{ project.briefBio }}</p>
        <div class="tech">
          <p>Built With:</p>
            <div class="flex">
              <img :src="project.tech.photo1" alt="" class="tech-icon">
              <img :src="project.tech.photo2" alt="" class="tech-icon">
            </div>
          </div>
        <div class="local-flex w90">
          <div>
            <img class="icon" src="../images/world-wide-web.png" alt="">
            <a class="a" :class="{'text-light' : !isDark, 'text-dark' : isDark}" target="_blank" :href="project.links.web">View</a>
          </div>
            <div>
              <img class="icon" src="../images/tech/social.png" alt="">
              <a v-if="project.links.git" class="a" :class="{'text-light' : !isDark, 'text-dark' : isDark}" target="_blank" :href="project.links.git">GitHub</a>
              <a v-if="!project.links.git" class="a2" :class="{'text-light' : !isDark, 'text-dark' : isDark}" :href="project.links.git">Unavailable</a>
            </div>
          </div>
      </div>
    </div>
    <!-- <div v-motion-roll-visible-left class="border" :class="{'border-light' : isDark, 'border-dark' : !isDark }" v-for="project in projects">
      <h1 class="w90">{{ project.title }}</h1>
      <div class="img-div">
        <img class="img" :src="project.img" alt="">      
      </div>
      <p class="w90">{{ project.briefBio }}</p>
      <div class="local-flex w90">
        <div>
          <img class="icon" src="../images/world-wide-web.png" alt="">
          <a class="a" :class="{'text-light' : !isDark, 'text-dark' : isDark}" :href="project.links.web">View</a>
        </div>
          <div>
            <img class="icon" src="../images/tech/social.png" alt="">
            <a v-if="project.links.git" class="a" :class="{'text-light' : !isDark, 'text-dark' : isDark}" :href="project.links.git">GitHub</a>
            <a v-if="!project.links.git" class="a2" :class="{'text-light' : !isDark, 'text-dark' : isDark}" :href="project.links.git">Unavailable</a>
          </div>
        </div>
    </div> -->
  </div>
</template> 

<style scoped>

/* 
@keyframes appear {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  } 
} */

.font {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.main {
  padding: 6rem 0;
}

.center {
  text-align: center;
}

.grid {
  display: grid;
}

.border {
  border: 1px solid black;
  padding: 1rem 0 2rem;
  width: 90%;
  max-width: 600px;
  border-top-left-radius: 12px;
  margin: 2rem auto 6rem;
  box-shadow: rgba(192, 190, 191, 0.4) 5px 5px, rgba(125, 124, 124, 0.3) 10px 10px, rgba(70, 69, 70, 0.2) 15px 15px, rgba(32, 31, 32, 0.1) 20px 20px, rgba(22, 22, 22, 0.05) 25px 25px;
  
}

.border-light {
  background-color: #eee;
}
.border-dark {
  background-color: #444;
}

.img-div {
  margin: 0 auto;
  width: 90%;
}


.img {
  width: 100%;
  height: 400px;    
}

.tech {
  width: 90%;
  margin: 0 auto;
  padding-top: 1.5rem;
}
.tech div {
  margin-top: 8px;
}
.tech p {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.tech-icon {
  width: 32px;
  height: 32px;
  margin: 0 16px 0 4px;
}

.local-flex {
  display: flex;  
  justify-content: space-around;
  padding-top: 20px;
}
.local-flex div {
  align-items: center;
  display: flex;
}
.a {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 20px;
  padding-left: 8px;
}
.a2 {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 20px;
  padding-left: 8px;
  text-decoration: none;
}
.icon {
  height: 40px;
  width: 40px;
}


@media only screen and (min-width: 1200px){

  .grid {
    grid-template-columns: 1fr 1fr;
  }
}

</style>
