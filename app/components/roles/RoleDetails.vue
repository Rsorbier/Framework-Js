<template>
    <div>
        <h1>{{ role.name }}</h1><br>
        <img :src="role.image" :alt="`Logo du role de ${role.name}`">
        <h2>Rôle {{ role.side }}</h2>
        <p>{{ role.description }}</p>
    </div>
</template>

<script setup>

const props = defineProps({
        role: {type: Object, default: null},
})

</script>

<style scoped>

div {
    justify-content: center;
    text-align: center;
}

img {
    width: 25%;
    height: auto;
    border-radius: 10%;
}

p {
    font-size: 1.25em;
}

</style>