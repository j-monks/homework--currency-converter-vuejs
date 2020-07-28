import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
        currencies: {},
        selectedCurrencyRate: null
    },

    computed: {},

    mounted() {
        this.getCurrencies();
    },

    methods: {
        getCurrencies: function() {
            fetch("https://api.exchangeratesapi.io/latest")
            .then(response => response.json())
            .then(currencies => this.currencies = currencies)
        }, 
    }
  })
})
