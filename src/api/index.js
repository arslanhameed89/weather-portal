import axios from 'axios';

const baseURL = 'http://localhost/weather.php'

const searchUrl =  (keyword) => {
    return `${baseURL}?command=search&keyword=${keyword}`
}
const locationUrl = (woeid) => {
    return `${baseURL}?command=location&woeid=${woeid}`
}

const errorHandler = (e) => {
    const error = new Error(e)
    error.message = e.response.data
    throw error
}

export default {
    searchByKeyword(keyword) {

        return new Promise((resolve, reject) => {
            fetch(searchUrl(keyword))
                .then((response) => {
                    return response.json();
                })
                .then((myJson) => {
                    resolve(myJson)
                })
                .catch((error) => {
                    reject(error.message)
                });
        })
        /*return axios.get(searchUrl(keyword)).then(r  => {
            console.log(r, 'basit')
            return r.data
        } ).catch(errorHandler)*/
    },
    getByWoeid(woeid) {
        return axios.get(locationUrl(woeid)).then(r => r.data).catch(errorHandler)
    }
}
