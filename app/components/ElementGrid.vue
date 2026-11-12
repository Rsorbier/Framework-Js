<template>
  <div>
    <slot/>
  </div>
</template>

<script setup>

const props = defineProps({
        itemsAmount: {type: Number, default: 5},
        margin: {type: String, default: "auto"}
    })

    const width = `${Math.floor(100 / props.itemsAmount) - 2}%`
</script>

<style scoped>

div {
  display: flex;
  flex-wrap: wrap;
}

div > * {
  width: v-bind(width);
  margin: v-bind(margin);
}

</style>