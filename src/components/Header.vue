<template>
  <header>
    <ul>
      <li><h1><router-link to="/">Lilla Pip</router-link></h1></li>
      <li><router-link to="/">Bok</router-link>
      <li><router-link to="/admin">Admin</router-link></li>
    </ul>
  </header>
</template>


<style lang="scss" scoped>
  header {
    position: fixed;
    left: 0;
    top:0;
    width: 100vw;
    height: 5.5rem;
    padding: 0.5rem;
    background-color: rgba(41, 128, 185, 0.4);
  }

  header ul {
    list-style: none;
    display: flex;
    line-height: 4em;
    color: #bdc3c7;
  }

  li {
    flex: 0 0 auto;
    margin: 0.2em;
  }

  li:nth-child(1) {
    margin-right: auto;
  }

  header a {
    color: rgb(236, 240, 241);
  }
</style>