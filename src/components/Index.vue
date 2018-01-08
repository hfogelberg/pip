<template>
  <div>
    <h2>Index</h2>

    <hr />
    <router-link to="/login">Login</router-link><br>
    <router-link to="/admin">Admin</router-link><br>
    <router-link to="/characters">Karaktärer</router-link> <br>
    <router-link to="/chapters">Kapitel</router-link>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/style.scss'
</style>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        user: {}
      }
    },

    methods: {
      getAccessToken() {
        const url = window.location.href ;
        console.log('Created', url);
        const params = url.split('&');

        params.map((param) => {
          if (param.includes('access_token')) {
            const t = param.split('=');
            const accessToken = t[1];
            this.getUserInfo(accessToken);
          }
        })
      },

      getUserInfo(accessToken) {
        const url = 'https://www.googleapis.com/oauth2/v2/userinfo?access_token=' + accessToken;
        axios.get(url)
          .then((res) => {
            const data = res.data;
            this.user = {
              cookieVal: Math.floor(Math.random() * 10000000 * Date.now()).toString(16),
              firstName: data.given_name,
              lastName: data.family_name,
              email: data.email,
              photo: data.picture
            };

            this.setCookie('peckling', this.user.cookieVal, 365);
            this.$store.dispatch('setUser', this.user);
            this.$router.push("/");
          })
          .catch((err) => {
              console.log(err);
              this.$router.push('login');
          });
      },

      setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = 'expires='+ d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
      }
    },

    created () {
      this.getAccessToken();

      if (!this.$store.getters.token) {
        this.$router.push("/login");
      }
    }
  }
</script>