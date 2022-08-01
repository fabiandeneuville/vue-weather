import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state : {
        'displayWeather' : false,     
        'location' : undefined,
        'country' : undefined,
        'localTime' : undefined,
        'description' : undefined,
        'iconUrl' : undefined,
        'temperature' : undefined,
        'humidity' : undefined,
        'sunrise' : undefined,
        'sunset' : undefined,
    },
    getters : {

    },
    mutations : {
        displayWeather(state, boolean){
            state.displayWeather = boolean
        },
        setLocation(state, location){
            state.location = location
        },
        setCountry(state, country){
            state.country = country
        },
        setLocalTime(state, time){
            state.localTime = time
        },
        setDescription(state, description){
            state.description = description
        },
        setIconUrl(state, iconUrl){
            state.iconUrl = iconUrl
        },
        setTemperature(state, temperature){
            state.temperature = temperature
        },
        setHumidity(state, humidity){
            state.humidity = humidity
        },
        setSunrise(state, sunrise){
            state.sunrise = sunrise
        },
        setSunset(state, sunset){
            state.sunset = sunset
        }
    },
    actions : {

    }
})