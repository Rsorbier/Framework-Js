<template>
     <button @click="validClick" :disabled="disabled" :class="{'clickable': clickable, 'disabled': disabled}">

        <Icon v-if="showIcon && !iconAfterText" :name="icon" />
        {{ text }}
        <Icon v-if="showIcon && iconAfterText" :name="icon" />
        
     </button>
</template>

<script setup>

    const props = defineProps({
        text: { type: String, default: ""},
        showIcon: {type: Boolean, default: true},
        icon: {type: String, default: "ion:alert-circled"},
        size: {type: String, default: "100%"},
        color: {type: String, default: "white"},
        margin: {type: String, default: "unset"},
        width: {type: String, default: "unset"},
        height: {type: String, default: "unset"},
        clickable: {type: Boolean, default: true},
        iconAfterText: {type: Boolean, default: true},
        disabled: {type: Boolean, default: false},
    })

    const emit = defineEmits(["buttonClicked"])

    const validClick = (event) => {
        console.log(event)
        emit("buttonClicked", event)
    }

    // const sizeTest = ref(size)
</script>

<style scoped>

button {
    font-size: v-bind(size);
    background-color: v-bind(color);
    border-radius: 20px;
    margin: v-bind(margin);
    width: v-bind(width);
    height: v-bind(height);
}

</style>