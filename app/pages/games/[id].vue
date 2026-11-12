<template>

    <div>
        <h1>id de la partie : {{ route.params.id }}</h1>
    </div>
    
</template>

<script setup>

    import { useGameStore } from '#imports';

    const { gameExist } = useGameStore()

    const routeur = useRouter()
    const route = useRoute()

    route.params.id

    routeur.push({name: 'games'})

    watch(gameExist, () => {
        if (!gameExist) {
            routeur.push({path: "/games"})
        }
    })

</script>

<style>

</style>