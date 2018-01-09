<template>
  <header>
    <ul>
      <li><h1><router-link to='/'>Lilla Pip</router-link></h1></li>
      <li><router-link to="/login">Login</router-link></li>
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
    height: 4rem;
    padding: 0.5rem;
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

  a {
    font-size: 1.2em;
    font-weight: 300;
  }

  a.admin {
    opacity: 0;
    margin-right: 3em;
  }

  a.admin:hover {
    opacity: 1;
  }

  a:hover {
    font-size: 1.4em;
    text-decoration: none;
  }

  a:link {
    text-decoration: none;
  }

  a:visited{
    text-decoration: none;
  }

  a:focus {
    text-decoration: none;
  }

  a:active {
    text-decoration: none;
  }
</style>