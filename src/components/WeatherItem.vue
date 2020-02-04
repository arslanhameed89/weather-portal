<template>
    <weather :title="title"
             :temprature="temp"
             :min-temprature="minTemp"
             :max-temprature="maxTemp"
             :icon="icon"
             @detailPage="onDetailPage"
    ></weather>
</template>

<script>
    import Weather from "./Weather";

    export default {
        name: 'WeatherList',
        components: {
            Weather
        },
        props: ['item'],
        computed: {
            consolidated() {
                if (this.item && this.item.consolidated_weather) {
                    return this.item.consolidated_weather[0]
                }
                return null
            },
            title() {
                return this.item.title
            },
            minTemp() {
                if (this.consolidated !== null) {
                    return this.consolidated.min_temp
                }
                return null
            },
            temp() {
                if (this.consolidated !== null) {
                    return this.consolidated.the_temp
                }
                return null
            },
            maxTemp() {
                if (this.consolidated !== null) {
                    return this.consolidated.max_temp
                }
                return null
            },
            icon() {
                if (this.consolidated !== null) {
                    return this.consolidated.weather_state_abbr
                }
                return null
            },

        },
        methods: {
            onDetailPage() {
                this.$router.push({name: 'weather-detail', params: {woeid: this.item.woeid}})
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
