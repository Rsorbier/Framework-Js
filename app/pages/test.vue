<template>
  
    <GameJoinForm />

    <ElementGrid :items-amount="5">
      <PokemonCard v-for="(pokemon, index) in pokemons" :key="`pokemon-${pokemon.name}`" :pokemon="pokemon.name" />
    </ElementGrid>

<!-- <UModal v-model:open="open">
    <UButton label="Open" color="neutral" variant="subtle" />

    <template #content>
      <Placeholder class="h-48 m-4" />
    </template>
  </UModal> -->

</template>

<script setup>

const { $pokemonApi } = useNuxtApp()

const pokemons = await $pokemonApi.getPokemons()

// const open = ref(false)

// defineShortcuts({
//   o: () => open.value = !open.value
// })

</script>

<style scoped>

</style>