<template>
    <footer>
        <!-- <h1>Footer</h1> -->
        <Logo image="/images/logo.png" alt="logo" :show-text="false" width="5%"/>
        <!-- <CustomButton @buttonClicked="toggleDarkMode" :text="toggleDarkModeText" :show-icon="false" /> -->
    </footer>
</template>

<script setup>

    const appStore = useAppStore() // uniquement pour les fonctions
    const { toggleDarkMode } = appStore
    const { darkMode } = storeToRefs(appStore) // pour valeurs réactives

    const toggleDarkModeText = computed(() => {
        if (darkMode.value) {
            return "Thème clair"
        }
        return "Thème sombre"
    })

</script>

<style scoped>

footer {
    margin-top: 1em;
    width: 100%;
    display: flex;
    text-align: center;
}

</style>