<template>
  <div class="forecast-container">
    <div v-if="loading">Searching for location {{input}}, please wait...</div>
    <span v-else>
      <span v-if="locations.length > 0">
        <h3>Search result of {{input}}.</h3>
        <weather-item v-for="(item, itemIndex) in locations" :key="itemIndex"
                      :item="item"
        ></weather-item>

      </span>
      <div v-else>No results were found. Try changing the keyword!</div>
    </span>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'
 import WeatherItem from "../components/WeatherItem";
  export default {
    data () {
      return {
        loading: true
      }
    },
    components: {
      WeatherItem
    },
    computed: {
      ...mapState('weather', ['locations', 'error']),
      input () {
        return this.$route.params.input
      }
    },
    watch: {
      $route() {
        this.searchLocation()
      }
    },
    methods: {
      ...mapActions('weather', ['lookup', 'fetchWeatherDetail']),
      async getDetails() {
        if (!this.locations) return

        for (let i=0; i < this.locations.length; i++) {
          await this.fetchWeatherDetail(this.locations[i].woeid);
        }
      },
      async searchLocation () {
        this.loading = true
        try {
          await this.lookup(this.input)
          this.loading = false
          this.getDetails()
        } catch(err) {
          console.log(err)
        }
      }
    },
    mounted () {
     if (this.input) {
        this.searchLocation()
      }
    }
  }
</script>
