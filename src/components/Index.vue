<template>
  <div class="index">
    <div class="box">
        <h1 class="primary-header">
          <span class="primary-sub">Welcome to</span>
          <span class="primary-main">Helena Fogelberg</span>
          <span class="primary-main">Art</span>

          <ul class="button-row">
            <li>
              <router-link to="/artworks">
                Konst
              </router-link>
            </li>

            <li>
              <router-link to="#">
               Djurporträtt
              </router-link>
              </li>

            <li>
              <router-link to="/chapters">
                Böcker
              </router-link>
            </li>
          </ul>
        </h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../sass/main.scss";

.index {
  height: 100%;
  width: 100%;
  display:flex;
  align-items: center;
  justify-content: center;
}

.box {
  width: 100vw;
  height: 90vh;
  text-align: center;
  background-size: cover;
  background-position: top;
  background-image: linear-gradient( to left top, rgba($color-primary-light, 0.8), rgba($color-primary-dark, 0.8)), url("../assets/img/palette.jpg");
  display:flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
}

.button-row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  a {
    font-size: 3yarn.5rem;
    color: $color-index-links;
  }
}
</style>