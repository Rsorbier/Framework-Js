<template>
        <img :src="image" :alt="imageAlt">
        {{ text }}
</template>

<script setup>

const props = defineProps({
        text: { type: String, default: ""},
        image: {type: String, default: ""},
        imageAlt: {type: String, default: ""},
        showImage: {type: Boolean, default: true},
        showText: {type: Boolean, default: true},
        width: {type: String, default: "auto"},
        height: {type: String, default: "auto"},
    })

</script>

<style scoped>

img {
    height: v-bind(height);
    width: v-bind(width);
    border-radius: 10%;
}

</style>