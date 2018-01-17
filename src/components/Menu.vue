<template>
  <header>
    <ul>
      <li>
        <h1>
          <router-link to="/" class="menu-item">Lilla Pip</router-link>
        </h1>
      </li>
      <li>
        <router-link to="/" class="menu-item">Bok</router-link>
      </li>
      <li>
        <router-link to="/admin" class="menu-item">Admin</router-link>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
@import "../sass/main.scss";
header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 5.5rem;
  padding: 0.5rem;
  background-color: rgba($color-primary-light, 0.4);
  padding-left: $gutter-small;
  padding-right: $gutter-small;
}

header ul {
  display: flex;
  line-height: 4em;
}

li {
  flex: 0 0 auto;
  margin: 0.2em;
  font-size: $font-size-default;
}

li:nth-child(1) {
  margin-right: auto;
}

a.menu-item {
  color: $color-off-white;
}

h1 {
  font-size: $font-size-x-large;
}
</style>
