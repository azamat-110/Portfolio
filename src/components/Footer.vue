<template>
  <footer class="footer">
    <div class="footer__content container">
      <a href="" class="nav__content-logo footer__content-logo">
        <span>A</span>T
      </a>

      <ul class="footer__content-links">
        <li>
          <div class="footer__content-contacts">
            <p>+998 90 355 36 04</p>
            <p>tursunbayevazamat565@gmail.com</p>
          </div>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/azamat-r/"
            class="nav__socilas-list-link"
          >
            <img src="../assets/images/linkedin.svg" alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/azamat-110"
            class="nav__socilas-list-link"
          >
            <img src="../assets/images/github.svg" alt="GitHub" />
          </a>
        </li>
        <li>
          <a
            href="https://www.telegram.me/azamatr_110"
            class="nav__socilas-list-link"
          >
            <img src="../assets/images/telegram.svg" alt="Telegram" />
          </a>
        </li>
      </ul>
    </div>
    <div class="footer__line container"></div>
    <div class="footer__afterline container">
      <ul class="footer__list">
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
      <div class="footer__afterline-autor">
        Designed and built by <span>Azamat</span> with
        <span>Love & Coffee</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>
