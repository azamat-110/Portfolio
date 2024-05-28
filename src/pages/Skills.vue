<template>
  <div class="skills">
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
    <div class="skills__info container">
      <h2>Additional technologies and skills</h2>
      <div class="skills__info-points">
        <div class="skills__info-point">
          <img src="../assets/images/html.svg" alt="htlm" />
          <p>HTML</p>
        </div>
        <div class="skills__info-point">
          <img src="../assets/images/css.svg" alt="htlm" />
          <p>CSS</p>
        </div>
        <div class="skills__info-point">
          <img src="../assets/images/js.svg" alt="htlm" />
          <p>JavaScript</p>
        </div>
        <div class="skills__info-point">
          <img src="../assets/images/vue.svg" alt="htlm" />
          <p>Vue.js</p>
        </div>
        <div class="skills__info-point">
          <img src="../assets/images/git.svg" alt="htlm" />
          <p>Git</p>
        </div>
        <div class="skills__info-point">
          <img src="../assets/images/github.svg" alt="htlm" />
          <p>GitHub</p>
        </div>
        <div class="skills__info-point">
          <img src="../assets/images/sass.svg" alt="htlm" />
          <p>SASS</p>
        </div>
        <div class="skills__info-point">
          <img src="../assets/images/vscode.svg" alt="htlm" />
          <p>VSCode</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { skills } from "../store/store";

const setImage = (path) => {
  return new URL(`${path}`, import.meta.url).href;
};
</script>

<style lang="scss" scoped>
.skills {
  padding-top: 70px;
  padding-bottom: 70px;

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &-points {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 250px !important;
      gap: 50px;
    }
    & h2 {
      color: rgb(255, 255, 255);
      font-family: "Montserrat";
      font-size: 32px;
      font-weight: 500;
      line-height: 26px;
      padding-bottom: 50px;
    }
    & img {
      max-width: 100%;
      height: 30px;
    }

    & p {
      color: rgb(255, 255, 255);
      font-family: "Montserrat";
      font-size: 28px;
      font-weight: 700;
      line-height: 26px;
    }

    &-point {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
}

.skills {
  &__content {
    padding-bottom: 0;
  }
}
</style>