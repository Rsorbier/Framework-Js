<template>
  <h1>Erreur</h1>
  <p>La partie demandée n'existe pas</p>
</template>

<script setup>
    import { useGameStore } from '#imports';

    const { gameExist } = useGameStore()

    const routeur = useRouter()

</script>

<style>

</style>