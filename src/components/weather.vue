<template>
    
    <div v-if="displayWeather" class="weather">
        <div class="weather__location weather__info">
            <span class="weather__info__legend">Ville :</span>
            <p class="weather__info__text">{{ location }}</p>
        </div>
        <div class="weather__country weather__info">
            <span class="weather__info__legend">Pays :</span>
            <p class="weather__info__text">{{ country }}</p>
        </div>
        <div class="weather__description weather__info">
            <span class="weather__info__legend">Temps :</span>
            <img v-bind:src="iconUrl" v-bind:alt="description">
            <p class="weather__info__text">{{ description }}</p>
        </div>
        <div class="weather__temperature weather__info">
            <span class="weather__info__legend">Température :</span>
            <p class="weather__info__text">{{ temperature }}</p>
        </div>
        <div class="weather__humidity weather__info">
            <span class="weather__info__legend">Humidité :</span>
            <p class="weather__info__text">{{ humidity }}</p>
        </div>
        <div class="weather__sunrise weather__info">
            <span class="weather__info__legend">Lever du soleil :</span>
            <p class="weather__info__text">{{ sunrise }}</p>
        </div>
        <div class="weather__sunset weather__info">
            <span class="weather__info__legend">Coucher du soleil :</span>
            <p class="weather__info__text">{{ sunset }}</p>
        </div>
    </div>

</template>

<script>

import store from '../store/store'

export default {
    name: 'weatherDisplay',
    computed : {

        displayWeather(){
            return store.state.displayWeather
        },
        location(){
            return store.state.location
        },
        country(){
            return store.state.country
        },
        description(){
            return store.state.description
        },
        iconUrl(){
            return store.state.iconUrl
        },
        temperature(){
            return store.state.temperature
        },
        humidity(){
            return store.state.humidity
        },
        sunrise(){
            return store.state.sunrise
        }, 
        sunset(){
            return store.state.sunset
        }
    }
}

</script>
