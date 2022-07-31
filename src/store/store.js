import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state : {     
        'location' : undefined,
        'country' : undefined,
        'description' : undefined,
        'temperature' : undefined,
        'humidity' : undefined,
        'sunrise' : undefined,
        'sunset' : undefined,
    },
    getters : {

    },
    mutations : {
        setLocation(state, location){
            state.location = location
        },
        setCountry(state, country){
            state.country = country
        },
        setDescription(state, description){
            state.description = description
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