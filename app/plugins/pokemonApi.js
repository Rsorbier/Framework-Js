export default defineNuxtPlugin((nuxtApp) => {

    const baseURL = 'https://pokeapi.co/api/v2'

    const pokemonApi = {
        // ensemble des call Api
        getPokemons: async () => {
            const callApi = await $fetch(`${baseURL}/pokemon`)
            return callApi.results
        },

        getPokemon: async (pokemon) => {
            return await $fetch(`${baseURL}/pokemon/${pokemon}`)
        },

        getSprite: async (pokemon) => {
            const callApi = await $fetch(`${baseURL}/pokemon/${pokemon}`)
            return callApi.sprites.front_default
        }

        // setMeteo: async (city, data) => {
        //     return await $fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric&lang=fr', {
        //         method: 'POST',
        //         body: 'data'
        //     })
        // },

    }

    return {
        provide: {
            pokemonApi
        }
    }
})