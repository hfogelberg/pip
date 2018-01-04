<template>
    <div>
        <h2>Home</h2>

        <a v-bind:href="this.uri">Signin</a>
    </div>
</template>

<script>
    const {GOOGLE_CLIENT_ID, GOOGLE_CALLBACK_URL} = require('../../config')
    export default {
        data() {
            return {
                uri: ''
            }
        },

        created() {       
            const uri1 = "https://accounts.google.com/o/oauth2/v2/auth?scope=" + encodeURIComponent("https://www.googleapis.com") + "/auth/userinfo.profile"
            const uri2 = "&include_granted_scopes=true&state=state_parameter_passthrough_value"
            const uri3 = "&redirect_uri=" + encodeURIComponent(GOOGLE_CALLBACK_URL)
            const uri4 = "&response_type=token&client_id=" + GOOGLE_CLIENT_ID
            const uri = uri1 + uri2 + uri3 + uri4

            this.uri = uri;
        }
    }
</script>