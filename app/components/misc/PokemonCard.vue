<template class="defaultCursor">

    <RoleCard :name="pokemon" :alt="pokemon" :image="image"/>
  
</template>

<script setup>

const { $pokemonApi } = useNuxtApp()

const props = defineProps({
        pokemon: {type: String, default: ""}
    })

    const image = ref(await $pokemonApi.getSprite(props.pokemon))


</script>

<style scoped>

</style>