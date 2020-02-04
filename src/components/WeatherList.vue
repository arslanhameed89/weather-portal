<template>
    <div class="forecast-container">
        <weather-item v-for="(item, itemIndex) in locations" :key="itemIndex"
                      :item="item"
        ></weather-item>
    </div>
</template>

<script>
    import WeatherItem from "./WeatherItem";
    import {mapActions, mapState} from "vuex";

    export default {
        name: 'WeatherList',
        components: {
            WeatherItem
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
