<template>

    <div v-if="!gameExist(route.params.id)">
        Erreur 404 : La partie n'existe pas
    </div>

    <div v-else>
        <h1>id de la partie : {{ route.params.id }}</h1>
    </div>
</template>

<script setup>

    import { useGameStore } from '#imports';

    const { gameExist } = useGameStore()

    const routeur = useRouter()
    const route = useRoute()

    route.params.id

</script>

<style>

</style>