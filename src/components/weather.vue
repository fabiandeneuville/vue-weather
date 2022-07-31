<template>
    
    <div class="weather">
        <div class="weather__location">
            <p>{{ location }}</p>
        </div>
        <div class="weather__country">
            <p>{{ country }}</p>
        </div>
        <div class="weather__description">
            <p>{{ description }}</p>
        </div>
        <div class="weather__temperature">
            <p>{{ temperature }}</p>
        </div>
        <div class="weather__humidity">
            <p>{{ humidity }}</p>
        </div>
        <div class="weather__sunrise">{{ sunrise }}</div>
        <div class="weather__sunset">{{ sunset }}</div>
    </div>

</template>

<script>

import store from '../store/store'

export default {
    name: 'weatherDisplay',
    computed : {

        location(){
            return store.state.location
        },
        country(){
            return store.state.country
        },
        description(){
            return store.state.description
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
