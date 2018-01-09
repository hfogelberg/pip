<template>
  <div>
    <h2>Inloggning</h2>
    <a v-bind:href="this.uri"><img src="../assets/img/google-login.svg"></a>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getConfig")
  },

  computed: {
    uri() {
      const uri1 = "https://accounts.google.com/o/oauth2/v2/auth?scope=" + encodeURIComponent("https://www.googleapis.com") + "/auth/userinfo.profile"
      const uri2 = "&include_granted_scopes=true&state=state_parameter_passthrough_value"
      const uri3 = "&redirect_uri=" + encodeURIComponent(this.$store.getters.googleCallbackUrl)
      const uri4 = "&response_type=token&client_id=" + this.$store.getters.googleClientId
      const uri = uri1 + uri2 + uri3 + uri4

      return uri;
    }
  }

}
</script>