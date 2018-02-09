<template>
  <div class="artwork">
    <h1>{{currentArtwork.title}}</h1>

    <div class="image-container" >
      <div class="smallImage"  v-if="displayBlurred">
        <img :src="smallImageUrl" class="image">
      </div>
      <div class="largeImage" v-else>
        <img :src="largeImageUrl" class="image">
      </div>
    </div>

    <p class="comment-container" v-observe-visibility="visibilityChanged">
      Lorem ipsum dolor sit amet, civibus quaestio ut eam, nam ceteros vulputate te. Cu bonorum salutatus eum, nam ex debet iudico pertinacia. Mei ut mucius menandri, est modo legere in. 
    </p>
  </div>
</template>

<script>
  export default {
    props: ['currentArtwork'],
    data() {
      return {
        smallImageUrl: "",
        largeImageUrl: "",
        displayBlurred: true
      }
    },
    created() {
      this.smallImageUrl = `http://res.cloudinary.com/golizzard/image/upload/w_20,c_scale/${this.currentArtwork.image}`
    },
    methods: {
      visibilityChanged (isVisible, entry) {
        this.isVisible = isVisible
        
        if(entry.isIntersecting) {
          console.log(this.currentArtwork.title + " is now visible");
          this.largeImageUrl = `http://res.cloudinary.com/golizzard/image/upload/w_600,c_scale/${this.currentArtwork.image}`
          this.displayBlurred = false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/style";

  .artwork {
    background-color: #bdc3c7;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }
    
  h1 {
    flex: 0.1;
  }

  .image-container {
    flex: 0.6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .image {
    height: 50vh;
  }

  .comment-container {
    flex: 0.3;
    padding: 1em;
    font-size: $m-size;
    font-weight: 400;
    font-style: italic;
    tex-align: center;
  }
</style>