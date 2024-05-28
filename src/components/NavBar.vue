<template>
    <nav class="nav" :class="{ scrolled: scroll > 0 }">
        <div class="container nav__content">
            <router-link to="/">
                <a href="" class="nav__content-logo">
              <span>Azamat</span> Tursunboev
            </a>
            </router-link>
            <ul class="nav__list">
                <li>
                    <router-link to="/" class="nav__list-link"> Home </router-link>
                </li>
                <li>
                    <router-link to="/about" class="nav__list-link"> About </router-link>
                </li>
                <li>
                    <router-link to="/skills" class="nav__list-link">
                        Skills
                    </router-link>
                </li>
                <li>
                    <router-link to="/projects" class="nav__list-link">
                        Projects
                    </router-link>
                </li>
            </ul>
            <div class="nav__socials">
                <ul class="nav__socials-list">
                    <li>
                        <a href="https://www.linkedin.com/in/azamat-r/" class="nav__socilas-list-link">
                  <img src="../assets/images/linkedin.svg" alt="LinkedIn" />
                </a>
                    </li>
                    <li>
                        <a href="https://github.com/azamat-110" class="nav__socilas-list-link">
                  <img src="../assets/images/github.svg" alt="GitHub" />
                </a>
                    </li>
                    <li>
                        <a href="https://www.telegram.me/azamatr_110" class="nav__socilas-list-link">
                  <img src="../assets/images/telegram.svg" alt="Telegram" />
                </a>
                    </li>
                    <button class="nav__socials-list-btn" @click="changeModal">
                <img
                  class="nav__socials-list-btn-img"
                  src="../assets/images/email.svg"
                  alt="email"
                />
                <img
                  class="nav__socials-list-btn-hover"
                  src="../assets/images/email_hover.svg"
                  alt=""
                />
                Contact me
              </button>
                </ul>
            </div>
        </div>
        <div class="modal" v-if="showModal">
            <div class="modal__window">
                <div class="modal__window-head">
                    <h2 class="modal__window-title">Contacts</h2>
                    <button @click="changeModal">
                <img src="../assets/images/close.svg" alt="close" />
              </button>
                </div>
                <p class="modal__window-phone">
                    Phone number: <br /> +998 (90) 355 36 04
                </p>
                <p class="modal__window-email">
                    Email: <br /> tursunbayevazamat565@gmail.com
                </p>
                <div class="modal__window-linkedin">
                    <img src="../assets/images/link.svg" alt="linkedIn" />
                    <a href="https://www.linkedin.com/in/azamat-r/">LinkedIn</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from "vue";

let scroll = ref(0);
const showModal = ref(0);
const changeModal = () => {
    showModal.value = !showModal.value;
};

window.addEventListener("scroll", () => {
    scroll.value = window.scrollY;
});
window.addEventListener("click", (event) => {
    let modal = ref(document.querySelector(".modal"));
    console.log(event.target);
    if (event.target == modal.value) {
        showModal.value = !showModal.value;
    }
});
</script>

 