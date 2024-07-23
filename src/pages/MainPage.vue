<template>
  <div>
    <header class="header container">
      <div class="header__content">
        <h1 class="header__content-posttitle">Hello, i am</h1>
        <h2 class="header__content-title">
          &lt; Azamat <br />
          Tursunboev /&gt;
        </h2>
        <p class="header__content-descr">Frontend Developer</p>
        <div class="header__content-progress">
          <div class="header__content-progress-exp">
            <span>1</span>
            <p>year of experience</p>
          </div>
          <div class="header__content-progress-projects">
            <span>9</span>
            <p>projects comleted around the world</p>
          </div>
        </div>
      </div>
      <div class="header__avatar">
        <img
          class="header__avatar-person"
          src="../assets/images/person.png"
          alt="person"
        />
        <div class="header__avatar-vue header__avatar-skills">
          <img src="../assets/images/vue.svg" alt="vue" />
        </div>
        <div class="header__avatar-js header__avatar-skills">
          <img src="../assets/images/js.svg" alt="vue" />
        </div>
        <div class="header__avatar-html header__avatar-skills">
          <img src="../assets/images/html.svg" alt="vue" />
        </div>
        <div class="header__avatar-css header__avatar-skills">
          <img src="../assets/images/css.svg" alt="vue" />
        </div>
        <div class="header__avatar-sass header__avatar-skills">
          <img src="../assets/images/sass.svg" alt="vue" />
        </div>
        <div class="header__avatar-git header__avatar-skills">
          <img src="../assets/images/git.svg" alt="vue" />
        </div>
      </div>
    </header>
    <section class="about container">
      <h3 class="about__content-title">aboutMe<span>( )</span></h3>
      <div class="about__content">
        <p class="about__content-descr">
          Hi, I'm Azamat Tursunboev, a Frontend Developer with a keen interest
          in creating interactive and user-friendly web applications. With a
          solid foundation in HTML, CSS, JavaScript, and Vue.js, I strive to
          build efficient and scalable solutions. My journey in web development
          started with curiosity and has transformed into a fulfilling career. I
          love continuously learning new technologies to stay ahead in the
          ever-evolving tech landscape.
        </p>
        <div class="about__points">
          <div class="about__points-job">
            <div class="about__points-job-titles">
              <h4 class="about__points-job-title">Frontend Developer</h4>
              <router-link to="/projects" class="about__points-job-link">
                Projects
              </router-link>
            </div>
            <div class="about__points-job-logo">
              <img src="../assets/images/job.svg" alt="job" />
            </div>
          </div>
          <div class="about__points-study about__points-job">
            <div class="about__points-study-titles about__points-job-titles">
              <h4 class="about__points-study-title about__points-job-title">
                Student
              </h4>
              <router-link
                to="/about"
                class="about__points-study-link about__points-job-link"
              >
                More...
              </router-link>
            </div>
            <div class="about__points-study-logo about__points-job-logo">
              <img src="../assets/images/braces.svg" alt="braces" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="skills container">
      <div class="skills__content">
        <h2 class="skills__content-title">skills<span>( )</span></h2>
        <div class="skills__content-img">
          <img
            v-for="(links, i) in skills"
            :key="i"
            :src="setImage(links)"
            alt="htlm"
          />
        </div>
      </div>
    </section>
    <section class="projects container">
      <div class="projects__content">
        <h2 class="projects__content-title">projects<span>( )</span></h2>
        <div class="projects__content-cards">
          <ProjectsSwiper />
        </div>
        <div class="projects__left">
          <img
            style="transform: rotate(180deg)"
            src="../assets/images/right.svg"
            alt="left"
          />
        </div>
        <div class="projects__right">
          <img src="../assets/images/right.svg" alt="right" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ProjectsSwiper from "../components/ProjectsSwiper.vue";
import { skills } from "../store/store";

const setImage = (path) => {
  return new URL(`${path}`, import.meta.url).href;
};
</script>

 