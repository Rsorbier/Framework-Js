<template>
    <div>
        <label for="textInput">{{ fieldName }} : </label>
        <Icon v-if="showIcon && iconPosition==='left'" :name="icon" />
        <input :type="type" id="textInput" v-model="value"/>
        <Icon v-if="showIcon && iconPosition==='right'" :name="icon" />
        <span>{{ errorMessage }}</span>
    </div>
</template>

<script setup>

const props = defineProps({
    fieldName: {type: String, default: ''},
    type: {type: String, default: "text"},
    errorMessage: {type: String, default: ""},
    icon: {type: String, default: ""},
    showIcon: {type: Boolean, default: true},
    iconPosition: {type: String, default: "left"},    
})

const value = defineModel()

</script>

<style scoped>

</style>