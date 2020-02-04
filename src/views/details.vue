<template>
    <div class="forecast-container" v-if="weatherDetailedData">
        <h1 class="text-center">{{weatherDetailedData.title}} Weather</h1>
        <weather v-for="(consolidate, consolidateIndex) in consolidated" :key="consolidateIndex"
                 :title="title(consolidate.applicable_date)"
                 :icon="consolidate.weather_state_abbr"
                 :min-temprature="consolidate.min_temp"
                 :max-temprature="consolidate.max_temp"
                 :temprature="consolidate.the_temp"
        />
    </div>
</template>
<script>
    import {mapActions} from "vuex";
    import Weather from "../components/Weather";

    export default {
        data() {
            return {
                weatherDetailedData: null,
                weekDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
            }
        },
        components: {
            Weather
        },
        computed: {
            consolidated() {
                if (!this.weatherDetailedData) {
                    return;
                }
                return this.weatherDetailedData.consolidated_weather
            }
        },
        methods: {
            ...mapActions("weather", ["getByWoeid"]),
            title(date) {
                const day = new Date(date).getDay()
                return this.weekDays[day]
            },
            async fetchDetail() {
                const woeid = this.$route.params.woeid;
                this.weatherDetailedData = await this.getByWoeid(woeid)
            }
        },
        mounted() {
            this.fetchDetail()
        }
    };
</script>

<style scoped>
</style>
