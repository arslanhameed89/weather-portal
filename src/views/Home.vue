<template>
    <div>
        <div class="forecast-table">
            <div class="container">
                <weather-list></weather-list>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import WeatherList from "../components/WeatherList";
    import {mapActions, mapMutations, mapState} from "vuex";

    export default {
        name: 'home',
        data() {
            return {
                loadingMessage: null,
                defaults: [
                    {title: "Istanbul"},
                    {title: "Berlin"},
                    {title: "London"},
                    {title: "Helsinki"},
                    {title: "Dublin"},
                    {title: "Vancouver"}
                ]
            };
        },

        components: {
            WeatherList
        },
        computed: {
            ...mapState('weather', ['locations', 'errors'])
        },
        methods: {
            ...mapActions({
                "fetchWeatherDefaults": "weather/fetchWeatherDefaults",
                "fetchWeatherDetail": "weather/fetchWeatherDetail",
            }),
            ...mapMutations({
                'setLocations': 'weather/setLocations'
            })
        },
        async mounted() {
            const self = this;
            await this.setLocations(this.defaults)

            for (let i = 0; i < self.defaults.length; i++) {
                await this.fetchWeatherDefaults(self.defaults[i].title);
            }

            for (let i = 0; i < self.defaults.length; i++) {
                await this.fetchWeatherDetail(this.locations[i].woeid);
            }
        }
    }
</script>
