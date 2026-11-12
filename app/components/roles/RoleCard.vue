<template>
  <div>
    <img :src="image" :alt="alt" class="clickable">
    <h2>{{ props.name }}</h2>
  </div>
</template>

<script setup>

    const props = defineProps({
        image: { type: String, default: null},
        name: { type: String, default: null},
        alt: { type: String, default: null},
    })
</script>

<style scoped>

div {
  display: flex;
  flex-wrap: wrap;
}

img {
  image-rendering: pixelated;
  width: 100%;
  height: auto;
  border-radius: 10%;
}

h2 {
  width: 100%;
  text-align: center;
  margin-top: 0;
  
}

</style>