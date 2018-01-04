<template>
  <div class="chapter">
    <router-link :to="'/admin/chapters/' + chapter._id">{{chapter.title}}</router-link>
  </div>
</template>

<script>
export default {
  props: ["chapter"]
}
</script>

<style lang="scss" scoped>
  .chapter{
    height: 100px;
    width: 300px;
    background-color: red;
  }
</style>