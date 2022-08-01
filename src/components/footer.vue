<template>
    
    <div>
        <footer class="footer">
            <p class="footer__text">Les données météo proviennent de l'API <a v-bind:href="apiUrl" target="blank">OpenWeather</a></p>
            <p class="footer__text">L'utilisation de l'application est limités à 1000 recherches par mois.</p>
            <p class="footer__text">Fabian Deneuville - {{ currentYear }}</p>
        </footer>
    </div>

</template>

<script>

export default {
    name: 'footerBlock',
    data(){
        return {
            apiUrl: 'https://openweathermap.org/current',
            currentYear : undefined
        }
    },
    methods: {
        getCurrentYear(){
            const year = new Date().getFullYear()
            this.currentYear = year
        }
    },
    created(){
        this.getCurrentYear()
    }
}

</script>