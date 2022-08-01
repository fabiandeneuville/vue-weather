<template>
    
    <div class="search">
        <label class="search__label" for="position">Entrez le nom d'une ville</label>
        <input class="search__input" type="text" id="position" name="position" spellcheck="false" v-on:keydown.enter="getMeteo" v-model="requestLocation">
        <button class="search__button pill-button" v-on:click="getMeteo">Valider</button>
        <p class="search__error">{{ errorMessage }}</p>
    </div>


</template>

<script>

import axios from 'axios'

import store from '../store/store'

export default {
    name : 'searchBlock',
    data(){
        return {
            requestLocation: '',
            api_key: process.env.VUE_APP_KEY,
            requestUrl: 'https://api.openweathermap.org/data/2.5/weather?',
            errorMessage: ''
        }
    },
    methods : {
        formatTime(time){

            if(time < 10){
                return '0' + time
            } else {
                return time
            }

        },
        convertTimeStamp(timestamp){

            const date = new Date(timestamp * 1000);
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const time = `${this.formatTime(hours)}:${this.formatTime(minutes)}`;
            return time;

        },
        getMeteo(){

            if(this.requestLocation === ''){

                this.displayErrorMessage('Veuillez-renseigner un nom de ville !')

            } else {

                this.removeErrorMessage()

                axios
                .get(`${this.requestUrl}q=${this.requestLocation}&units=metric&appid=${this.api_key}&lang=fr`)
                .then(response => {
                    const iconUrl = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
                    store.commit('setLocation', response.data.name)
                    store.commit('setCountry', response.data.sys.country)
                    store.commit('setDescription', response.data.weather[0].description)
                    store.commit('setIconUrl', iconUrl)
                    store.commit('setTemperature', response.data.main.temp+'°C')
                    store.commit('setHumidity', response.data.main.humidity+'%')
                    store.commit('setSunrise', this.convertTimeStamp(response.data.sys.sunrise))
                    store.commit('setSunset', this.convertTimeStamp(response.data.sys.sunset))
                    store.commit('displayWeather', true)
                })
                .catch(() => {
                    this.displayErrorMessage('Destination introuvable. Veuillez essayer avec une orthographe différente.')
                })

            }
        },
        displayErrorMessage(message){

            this.errorMessage = message;

        },
        removeErrorMessage(){

            this.errorMessage = '';

        }
    }
}

</script>