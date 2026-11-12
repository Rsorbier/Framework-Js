<template>
    <form method="post" novalidate @submit.prevent="onSubmit">
        <CustomInput v-model="codeValue" fieldName="Code de la partie" :errorMessage="codeErrorMessage"/>
        <button type="submit">Rejoindre</button>
        <div v-if="showError" class="invalidGame">Impossible de rejoindre. La partie n'existe pas ou plus</div>
    </form>
</template>

<script setup>
    import { useForm, useField } from 'vee-validate';
    import { useGameStore } from '#imports';

    const { handleSubmit, isSubmitting } = useForm({
        initialValues: {
            code: "",
        }
    })

    const { gameExist } = useGameStore()

    const { value: codeValue, errorMessage: codeErrorMessage } = useField("code", "required|min:6|max:6")

    const onSubmit = handleSubmit((values) => {
        if (gameExist(values.code)) {
            window.location.replace(`/games/${values.code}`)
        }
        else {
            showError = true
        }
    })

    let showError = ref(false)

</script>

<style scoped>

.invalidGame {
    margin-top: 10px;
    background-color: rgba(255, 0, 0, 0.4);
}

</style>