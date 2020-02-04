<template>
  <div id="app">
    <div class="site-content">
      <div class="site-header">
        <div class="container">
          <a href="/" class="branding">
            <img src="images/logo.png" alt="" class="logo">
            <div class="logo-type">
              <h1 class="site-title">Weather App</h1>
              <small class="site-description">Mauqah Vue Js Test</small>
            </div>
          </a>

        </div>
      </div> <!-- .site-header -->

      <div class="hero" data-bg-image="./assets/images/banner.png">
        <div class="container">
          <form  @submit.prevent="search" class="find-location">
            <input type="text" class="search-input" v-model="input" placeholder="Find your location...">
            <input type="submit" value="Find">
          </form>

        </div>
      </div>
      <router-view/>
    </div>

  </div>
</template>
<script>
  export default {
    data () {
      return {
        input: null
      }
    },
    methods: {
      search() {
        this.$router.push({ name: 'search', params: { input: this.input }})
      }
    },
    mounted () {
      this.input = this.$route.params.input
    }
  }
</script>



<style>
  @import "assets/style.css";
</style>
