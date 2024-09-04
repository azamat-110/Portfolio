<template>
  <swiper
    :navigation="true"
    :modules="modules"
    :breakpoints="swiperModules.breakpoints"
    space-between="25"
    class="swiper"
  >
    <swiper-slide
      class="swiper__item"
      v-for="(cards, i) in projectsStore"
      :key="i"
      @click="goToLink(cards.link)"
    >
        <img :src="setImage(cards.img)" :alt="cards.name" />
        <h2>
          {{ cards.title }}
        </h2>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { projects } from "../store/store.js";
import { Navigation } from "swiper/modules";
import { ref } from "vue";

const modules = ref([Navigation]);
const projectsStore = projects;

const swiperModules = ref({
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1450: {
      slidesPerView: 5,
    },
  },
});

const setImage = (path) => {
  return new URL(`../assets/images/${path}`, import.meta.url).href;
};

const goToLink = (link) => {
  window.location.href = link;
};
</script>


 