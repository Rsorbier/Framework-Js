export default defineNuxtPlugin((nuxtApp) => {

    const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric&lang=fr'

    const meteoApi = {
        // ensemble des call Api
        getMeteo: async (city) => {
            return await $fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric&lang=fr')
        },

        setMeteo: async (city, data) => {
            return await $fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric&lang=fr', {
                method: 'POST',
                body: 'data'
            })
        },

    }

    return {
        provide: {
            meteoApi
        }
    }
})