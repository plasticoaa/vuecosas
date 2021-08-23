const app = Vue.createApp({
    data() {
        return {
            message: 'Mensaje reactivo'
        }
    },

    methods: {
        changeMessage() {
            console.log('asdfas')
            this.message = "mensaje cambiado"
        }
    }


})
app.mount('#myApp')