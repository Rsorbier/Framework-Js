<template>
        <NuxtLink 
        v-for="(page, index) in pages" :key="`navBarElement-${page.id}`" 
        :to="page.link"
        id="link"
        >
            <CustomButton :text="page.title" :icon="page.icon"/>
        </NuxtLink>
</template>

<script setup>

const { getNavbarPages } = useNavStore()

    const pages = getNavbarPages()
</script>

<style scoped>

#link {
    margin: 0.5em;
}

</style>