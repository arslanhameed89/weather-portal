<template>
    <div class="forecast-container">
        {{locations}}
      <weather v-for="i in locations" :key="i"
               title="berlin"
               temprature="18"
               min-temprature="10"
               max-temprature="25"
      ></weather>
    </div>
</template>

<script>
    import Weather from "./Weather";
    import {mapActions, mapState} from "vuex";

    export default {
        name: 'WeatherList',
        components: {
            Weather
        },
        computed: {
            ...mapState('weather', ['locations', 'errors'])
        },
        methods: {
            ...mapActions({
                "fetchWeatherDefaults": "weather/fetchWeatherDefaults",
                "fetchDetail": "weather/fetchDetail",
            })
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
