<template>
  <div class="projects container">
    <div class="projects__content">
      <h2 class="projects__content-title">projects<span>( )</span></h2>
      <div class="projects__content-cards">
        <div
          class="projects__content-card"
          v-for="(cards, i) in projects"
          :key="i"
        >
          <img
            class="projects__content-card-img"
            :src="setImage(cards.img)"
            :alt="cards.name"
          />
          <div class="projects__content-card-info">
            <h2>
              {{ cards.title }}
            </h2>
            <p class="projects__content-card-info-descr">
              {{ cards.descr }}
            </p>
            <p class="projects__content-card-info-tech">
              Tech stack : {{ cards.tech }}
            </p>
            <div class="projects__content-card-links">
              <a :href="cards.link">
                <img src="../assets/images/link.svg" alt="link" />
                <span>Live Preview</span>
              </a>
              <a :href="cards.codeLink">
                <img
                  style="transform: scale(0.8)"
                  src="../assets/images/github.svg"
                  alt="github"
                />
                <span>View Code</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { projects } from "../store/store.js";

const setImage = (path) => {
  return new URL(`../assets/images/${path}`, import.meta.url).href;
};

const goToLink = (link) => {
  window.location.href = link;
};
</script>

<style lang="scss" scoped>
.projects {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 40px;
  &__content {
    &-title {
      text-align: center;
    }
    &-cards {
      display: grid;
      align-items: center;
      justify-content: center;
      grid-template-columns: repeat(3, 1fr);
      gap: 50px;
    }
    &-card {
      display: flex !important;
      flex-direction: column;
      border-radius: 15px;
      overflow: hidden;
      &-img {
        max-width: 100%;
        height: 174px;
      }
      &-info {
        font-family: "Montserrat";
        font-size: 22px;
        font-weight: 700;
        text-align: center;
        background: rgb(67, 67, 67);
        padding: 5px;
        transition: 0.5s;
        color: rgb(255, 255, 255);
        & h2 {
          font-size: 22px;
          padding: 5px;
        }
        &-descr {
          color: rgb(204, 204, 204);
          font-family: "Montserrat";
          font-size: 18px;
          font-weight: 300;
          line-height: 26px;
          letter-spacing: 0px;
          text-align: left;
          max-width: 310px;
          padding: 0 15px 15px;
          min-height: 170px;
        }
        &-tech {
          color: rgb(255, 255, 255);
          font-family: "Montserrat";
          font-size: 18px;
          font-weight: 400;
          line-height: 26px;
          letter-spacing: 0px;
          text-align: left;
          max-width: 310px;
          padding: 0 15px;
        }
      }
      &-links {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: rgb(255, 255, 255);
        font-family: "Montserrat";
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0px;
        text-align: left;
        & a {
          color: rgb(255, 255, 255);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: 15px;
          text-decoration-line: underline;
        }
      }
    }
  }
}
</style>