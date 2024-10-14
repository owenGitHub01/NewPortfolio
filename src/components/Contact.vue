<script setup>
import { isDark } from '../data';
import Swal from 'sweetalert2';
import { ref } from "vue";

const WEB3FORMS_ACCESS_KEY = "faaa35b7-03b2-44d8-b6d4-4c5df014727a";
const name = ref("")
const email = ref("")
const message = ref("")

const submitForm = async () => {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      name: name.value,
      email: email.value,
      message: message.value,
    }),
  });
  const result = await response.json();
  if (result.success) {
    Swal.fire({
      title: "From Submitted",
      text: "Your Information and Message has been submitted",
      icon: "success"
    });
    reset()

  }
}

const reset = () => {
  name.value = ""
  email.value = ""
  message.value = ""
}

</script>

<template>
  <div class="main">  
    <div class="container">
      <span class="big-circle" :class="{'big-circle-dark' : isDark, 'big-circle-light' : !isDark}"></span>
      <img src="../images/brightness.png" class="square" alt="" />
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Let's get in touch</h3>
          <p class="text">
            Hi, I’m Owen, a software developer with a passion for building beautiful and dynamic websites. Let’s connect!
          </p>

          <div class="social-media">
            <p>Connect with me :</p>
            <div class="social-icons">
              <a target="_blank" href="#">
                 <img class="fab" src="../images/linkedin.png" alt="">
              </a>
              <a target="_blank" href="#">                
                 <img src="../images/gmail.png" alt="">
              </a>
              <a target="_blank" href="#">                
                 <img src="../images/github.png" alt="">
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form @submit.prevent="submitForm" action="index.html" autocomplete="off">
            <h3 class="title">Contact Me</h3>
            <div class="input-container">
              <input placeholder="Name" type="text" name="name" class="input" v-model="name" />
              <!-- <label for="">Name</label> -->
              <!-- <span>Name</span> -->
            </div>
            <div class="input-container">
              <input placeholder="Email" type="email" name="email" class="input" v-model="email" />
              <!-- <label for="">Email</label> -->
              <!-- <span>Email</span> -->
            </div>
            <div class="input-container textarea">
              <textarea placeholder="message" name="message" class="input" v-model="message"></textarea>
              <!-- <label for="">Message</label> -->
              <!-- <span>Message</span> -->
            </div>
            <input type="submit" value="Send" class="btn" />
          </form>
        </div>
      </div>
    </div>   
  </div>
    
</template>

<style scoped>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


@keyframes appear {
  from {
    opacity: 0;
    transform: translateY(200px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}


.main {
  height: auto;
  text-align: left;
  width: 100%;

  animation: appear linear;
  animation-timeline: view();
  animation-range: entry 0;
}
.main h1 {
  margin: 0 auto;
  width: 90%;
  text-align: left;
}

.container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form {
  width: 100%;
  max-width: 820px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.contact-form {
  /* background-color: #1abc9c; */
  background-color: #333;
  position: relative;
}

.circle {
  border-radius: 50%;
  /* background: linear-gradient(135deg, transparent 20%, #dfdede); */
  background: linear-gradient(135deg, transparent 20%, #848484);
  position: absolute;
}

.circle.one {
  width: 130px;
  height: 130px;
  top: 130px;
  right: -40px;
}

.circle.two {
  width: 80px;
  height: 80px;
  top: 10px;
  right: 30px;
}

.contact-form:before {
  content: "";
  position: absolute;
  width: 26px;
  height: 26px;
  /* background-color: #1abc9c; */
  background-color: #333;
  transform: rotate(45deg);
  top: 50px;
  left: -13px;
}

form {
  padding: 2.3rem 2.2rem;
  z-index: 10;
  overflow: hidden;
  position: relative;
}

.title {
  color: #fff;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1;
  margin-bottom: 0.7rem;
}

.input-container {
  position: relative;
  margin: 1rem 0;
}

.input {
  width: 100%;
  outline: none;
  border: 2px solid #fafafa;
  background: none;
  padding: 0.6rem 1.2rem;
  color: #fff;
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  border-radius: 25px;
  transition: 0.3s;
}

textarea.input {
  padding: 0.8rem 1.2rem;
  min-height: 150px;
  border-radius: 22px;
  resize: none;
  overflow-y: auto;
}

.input-container label {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  padding: 0 0.4rem;
  color: #fafafa;
  font-size: 0.9rem;
  font-weight: 400;
  pointer-events: none;
  z-index: 1000;
  transition: 0.5s;
}

.input-container.textarea label {
  top: 1rem;
  transform: translateY(0);
}

.btn {
  padding: 0.6rem 1.3rem;
  background-color: orange;
  border: 2px solid orange;
  font-size: 18px;
  line-height: 1;
  border-radius: 25px;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  margin: 0;
}

.btn:hover {
  background-color: transparent;
  color: #fff;
}

.input-container span {
  position: absolute;
  top: 0;
  left: 25px;
  transform: translateY(-50%);
  font-size: 0.8rem;
  padding: 0 0.4rem;
  color: transparent;
  pointer-events: none;
  z-index: 500;
}

.input-container span:before,
.input-container span:after {
  content: "";
  position: absolute;
  width: 10%;
  opacity: 0;
  transition: 0.3s;
  height: 5px;
  background-color: #1abc9c;
  top: 50%;
  transform: translateY(-50%);
}

.input-container span:before {
  left: 50%;
}

.input-container span:after {
  right: 50%;
}

.input-container.focus label {
  top: 0;
  transform: translateY(-50%);
  left: 25px;
  font-size: 0.8rem;
}

.input-container.focus span:before,
.input-container.focus span:after {
  width: 50%;
  opacity: 1;
}

.contact-info {
  padding: 2.3rem 2.2rem;
  position: relative;
}

.contact-info .title {
  color: black;
}

.text {
  color: #333;
  margin: 1.5rem 0 2rem 0;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  width: 100%;
}

.information {
  display: flex;
  color: #555;
  margin: 0.7rem 0;
  align-items: center;
  font-size: 0.95rem;
}

.icon {
  width: 28px;
  margin-right: 0.7rem;
}

.social-media {
  padding: 2rem 0 0 0;
}

.social-media p {
  color: #333;
}

.social-icons {
  display: flex;
  margin-top: 0.5rem;
}

.social-icons a {
  width: 35px;
  height: 35px;
  border-radius: 5px;
  /* background: linear-gradient(45deg, #1abc9c, #149279); */
  color: #fff;
  text-align: center;
  line-height: 35px;
  margin-right: 0.5rem;
  transition: 0.3s;
}
.social-icons img {
  width: 35px;
  height: 35px;
  border-radius: 5px;
  /* background: linear-gradient(45deg, #1abc9c, #149279); */
  color: #fff;
  text-align: center;
  line-height: 35px;
  margin-right: 0.5rem;
  transition: 0.3s;

}

.social-icons a:hover {
  transform: scale(1.05);
}

.contact-info:before {
  content: "";
  position: absolute;
  width: 110px;
  height: 100px;
  border: 22px solid #1abc9c;
  border-radius: 50%;
  bottom: -77px;
  right: 50px;
  opacity: 0.3;
}

.big-circle {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #1cd4af, #159b80);
  bottom: 50%;
  right: 50%;
  transform: translate(-40%, 38%);
}

.big-circle:after {
  content: "";
  position: absolute;
  width: 360px;
  height: 360px;
  /* background-color: #333; */
  border-radius: 50%;
  top: calc(50% - 180px);
  left: calc(50% - 180px);
}

.big-circle-dark::after {
  background-color: #555;
}
.big-circle-light::after {
  background-color: #dfdede;
}
.square {
  position: absolute;
  height: 400px;
  top: 50%;
  left: 50%;
  transform: translate(181%, 11%);
  opacity: 0.2;
}

@media (max-width: 850px) {
  .form {
    grid-template-columns: 1fr;
  }

  .contact-info:before {
    bottom: initial;
    top: -75px;
    right: 65px;
    transform: scale(0.95);
  }

  .contact-form:before {
    top: -13px;
    left: initial;
    right: 70px;
  }

  .square {
    transform: translate(140%, 43%);
    height: 350px;
  }

  .big-circle {
    bottom: 75%;
    transform: scale(0.9) translate(-40%, 30%);
    right: 50%;
  }

  .text {
    margin: 1rem 0 1.5rem 0;
  }

  .social-media {
    padding: 1.5rem 0 0 0;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 1.5rem;
  }

  .contact-info:before {
    display: none;
  }

  .square,
  .big-circle {
    display: none;
  }

  form,
  .contact-info {
    padding: 1.7rem 1.6rem;
  }

  .text,
  .information,
  .social-media p {
    font-size: 0.8rem;
  }

  .title {
    font-size: 1.15rem;
  }

  .social-icons a {
    width: 30px;
    height: 30px;
    line-height: 30px;
  }

  .icon {
    width: 23px;
  }

  .input {
    padding: 0.45rem 1.2rem;
  }

  .btn {
    padding: 0.45rem 1.2rem;
  }
}

</style>
