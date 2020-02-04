<template>
  <div id="app">
    <div class="site-content">
      <div class="site-header">
        <div class="container">
          <a href="index.html" class="branding">
            <img src="images/logo.png" alt="" class="logo">
            <div class="logo-type">
              <h1 class="site-title">Company name</h1>
              <small class="site-description">tagline goes here</small>
            </div>
          </a>

          <!-- Default snippet for navigation -->
          <div class="main-navigation">
            <button type="button" class="menu-toggle"><i class="fa fa-bars"></i></button>
            <ul class="menu">
              <li class="menu-item current-menu-item"><a href="index.html">Home</a></li>
              <li class="menu-item"><a href="news.html">News</a></li>
              <li class="menu-item"><a href="live-cameras.html">Live cameras</a></li>
              <li class="menu-item"><a href="photos.html">Photos</a></li>
              <li class="menu-item"><a href="contact.html">Contact</a></li>
            </ul> <!-- .menu -->
          </div> <!-- .main-navigation -->

          <div class="mobile-navigation"></div>

        </div>
      </div> <!-- .site-header -->

      <div class="hero" data-bg-image="images/banner.png">
        <div class="container">
          <form  @submit.prevent="search" class="find-location">
            <input type="text" v-model="input" placeholder="Find your location...">
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
