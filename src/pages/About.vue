<template>
  <div class="about__page">
    <section class="about container">
      <h3 class="about__content-title">aboutMe<span>( )</span></h3>
      <div class="about__content">
        <p class="about__content-descr">
          Hi, I'm Azamat Tursunboev, a Frontend Developer with a keen interest
          in creating interactive and user-friendly web applications. With a
          solid foundation in HTML, CSS, JavaScript, and Vue.js, I strive to
          build efficient and scalable solutions. My journey in web development
          started with curiosity and has transformed into a fulfilling career. I
          love continuously learning new
          technologies to stay ahead in the ever-evolving tech landscape.
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
              <!-- <router-link
                to="/about"
                class="about__points-study-link about__points-job-link"
              >
                More...
              </router-link> -->
            </div>
            <div class="about__points-study-logo about__points-job-logo">
              <img src="../assets/images/braces.svg" alt="braces" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="about__points container">
      <div class="about__points-goal">
        <div>
          <h3 class="about__content-title">
            goalsAndAmbitions<span>( )</span>
          </h3>
          <p class="about__content-descr">
            My goal is to become a leading web developer, creating innovative
            projects that inspire and improve lives. I'm committed to continuous
            professional growth and skill development.
          </p>
        </div>
        <img src="../assets/images/planning.svg" alt="goal" />
      </div>
      <div class="about__points-goal about__points-unique">
        <img src="../assets/images/development.svg" alt="development" />
        <div>
          <h3 class="about__content-title">uniqueness<span>( )</span></h3>
          <p class="about__content-descr">
            I'm known for my dedication to excellence and problem-solving
            skills. With strong analytical abilities, I excel at tackling
            projects of any complexity.
          </p>
        </div>
      </div>
      <div class="about__points-goal about__points-educating">
        <div>
          <h3 class="about__content-title">education<span>( )</span></h3>
          <p class="about__content-descr">
            I am a second-year student at the Faculty of Computer Engineering at
            Tashkent University of Information Technologies (TUIT). My
            experience includes web development, as well as proficiency in HTML,
            CSS, JavaScript, and frameworks such as Vue.
          </p>
        </div>
        <img src="../assets/images/education.svg" alt="education" />
      </div>
      <div class="about__points-goal about__points-unique">
        <img src="../assets/images/mail.svg" alt="mail" />
        <div>
          <h3 class="about__content-title">
            contactInformation<span>( )</span>
          </h3>
          <p class="about__content-descr">
            Feel free to reach out via email at
            <u>tursunbayevazamat565@gmail.com</u> or phone at <br />
            <u>+998 90 355 36 04</u>. You can also find me on LinkedIn and
            GitHub.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.about {
  &__page {
    padding-top: 150px;
    display: flex;
    flex-direction: column;
  }
  &__brief {
    display: flex;
    flex-direction: column;
  }
  &__points {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    &-goal {
      padding-bottom: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 250px;
      & h3 {
        font-size: 26px;
      }
      & p {
        text-align: left;
      }
      & img {
        max-width: 100%;
        height: 150px;
      }
    }
    &-unique {
      margin-left: auto;
    }
  }
}
</style>

