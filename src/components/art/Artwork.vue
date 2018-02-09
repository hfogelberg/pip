<template>
  <div class="artwork">
    <h2 class="art-title">{{currentArtwork.title}}</h2>

    <div class="flip-container">
      <div class="card">
        <div class="card__side card__side--front">
          <div class="image-container" >
            <div class="image smallImage"  v-if="displayBlurred">
              <img :src="smallImageUrl" class="image" v-observe-visibility="visibilityChanged">
            </div>
            <div class="largeImage" v-else>
              <img :src="largeImageUrl" class="image">
            </div>
          </div>
        </div>

        <div class="card__side card__side--back">
          <p class="comment-container" v-observe-visibility="visibilityChanged">
            Lorem ipsum dolor sit amet, civibus quaestio ut eam, nam ceteros vulputate te. Cu bonorum salutatus eum, nam ex debet iudico pertinacia. Mei ut mucius menandri, est modo legere in. 
          </p>
        </div>
      </div>
    </div>
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
        console.log("Visibility Changed");
        this.isVisible = isVisible
        
        if(entry.isIntersecting) {
          console.log(this.currentArtwork.title + " is now visible");
          this.largeImageUrl = `http://res.cloudinary.com/golizzard/image/upload/w_700,c_scale/${this.currentArtwork.image}`
          this.displayBlurred = false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../sass/main.scss";

  .artwork {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    jsutify-content: space-between;
  }
    
  .art-title {
    text-align: center;
    color: $color-primary-dark;
    font-size: 6rem;
    font-weight: 400;
    font-family: "La Belle Aurore", cursive;
  }

  .image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .image {
    height: 65vh;
    borde-radius: 10px;
    box-shadow: 0 15px 20px rgba($color-black, 0.4);
  }

  .comment-container {
    flex: 0.3;
    padding: 1rem;
    font-weight: 400;
    font-style: italic;
    tex-align: center;
  }
</style>