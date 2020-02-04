import Vue from 'vue'
import weather from '@/api/index'

export default {
    namespaced: true,
    state: {
        locations: null,
        error: null
    },
    mutations: {
        setLocations(state, locations) {
            state.locations = locations
        },
        updateLocations(state, location) {
            const updatedItems = state.locations.map(l => {
                if (l.title === location.title)
                    l = location
                return l
            })
            Vue.set(state, 'locations', updatedItems)
        },
        setError(state, error) {
            state.error = error
        }
    },
    actions: {
        async searchByKeyword(ctx, keyword) {
            return await weather.searchByKeyword(keyword)
        },
        async getByWoeid(ctx, woeid) {
            return await weather.getByWoeid(woeid)
        },
        async lookup({commit, dispatch}, keyword) {
            commit('setLocations', null)
            commit('setError', null)

            try {
                const response = await dispatch('searchByKeyword', keyword)
                commit('setLocations', response)
            } catch (err) {
                commit('setError', err.message)
            }
        },
        async fetchWeatherDefaults({commit, dispatch}, keyword) {
            try {
                const response =  await dispatch('searchByKeyword', keyword)
                //console.info(response.shift(),"kaka roya")
                //let dummy = '[{"title":"Berlin","location_type":"City","woeid":638242,"latt_long":"52.516071,13.376980"}]';
                commit('updateLocations', response.shift())
            } catch (err) {
                commit('setError', err.message)
            }
        },
        async fetchWeatherDetail({commit, dispatch}, woeid) {
            try {
                const data = await dispatch('getByWoeid', woeid)
                commit('updateLocations', data)
            } catch (err) {
                commit('setError', err)
            }
        }
    }
}
