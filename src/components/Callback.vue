<template>
  <div>
    <h2 style='text-align: center; font-size: 2.2em;'>Callback</h2>

    <hr/>
    <p>Cookie: {{user.cookieVal}}</p>
    <p>First name: {{user.firstName}}</p>
    <p>Last Name: {{user.lastName}}</p>
    <p>Email: {{user.email}}</p>
    <p><img v-bind:src='user.photo' style='height: 200px;'></p>
    <hr/>

    <router-link to='/'>Home</router-link>
  </div>
</template>

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
        console.log(params);

        params.map((param) => {
          if (param.includes('access_token')) {
            const t = param.split('=');
            const accessToken = t[1];
            this.getUserInfo(accessToken);
          }
        })
      },

        getUserInfo(accessToken) {
            console.log('getUserInfo')
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
        console.log('Set cookie');
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = 'expires='+ d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
      }
    },

    created () {
      console.log('Callback!')
      this.getAccessToken();
    }
  }
</script>