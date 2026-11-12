<template>
    <ConnectionForm v-if="!isConnected" />
    <div v-else>
        <h1>{{ fullName }}</h1>
        <h2>Adresse mail : {{ connectedUser.value.mail }}</h2>
        <CustomButton text="Se déconnecter" :showIcon="false" @buttonClicked="deconnect" />
    </div>
</template>

<script setup>
import { useUserStore } from '~/stores/user.store'

    const userStore = useUserStore() 
    const {connect, deconnect} = userStore
    const { connectedUser, isConnected, fullName } = storeToRefs(userStore)

    console.log(connectedUser.value)
</script>

<style scoped>

</style>