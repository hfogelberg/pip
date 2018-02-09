<template>
  <section class="admin">
    <h2 class="secondary-header">Admin</h2>
    <ul>
      <li class="section-list-item u-center-text u-margin-bottom-small">
        <router-link to="/admin/characters">Karaktärer</router-link>
      </li>
      <li class="section-list-item u-center-text u-margin-bottom-small">
        <router-link to="/admin/chapters">Kapitel</router-link>
      </li>
      <li class="section-list-item u-center-text u-margin-bottom-small">
        <router-link to="/admin/art">Konstverk</router-link>
      </li>
    </ul>
  </section>  
</template>

<style lang="scss" scoped>
@import "../../sass/main.scss";
</style>