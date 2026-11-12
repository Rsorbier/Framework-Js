<template>
<div>
    <form method="post" novalidate @submit.prevent="onSubmit">
        <CustomInput v-model="nameValue" fieldName="Nom" :errorMessage="nameErrorMessage"/>
        <CustomInput v-model="firstnameValue" fieldName="Prénom" :errorMessage="firstnameErrorMessage"/>
        <CustomInput v-model="emailValue" fieldName="Adresse Mail" :errorMessage="emailErrorMessage" icon="material-symbols:attach-email" />
        <!-- <CustomInput v-model="passwordValue" fieldName="Mot de passe" :errorMessage="passwordErrorMessage" /> -->
        <button type="submit" :disabled="isSubmitting">Se connecter</button>
    </form>
</div>
</template>

<script setup>
import { useForm, useField } from 'vee-validate';
import { useUserStore } from '~/stores/user.store';

const userStore = useUserStore() // uniquement pour les fonctions
    const {connect} = userStore

const { handleSubmit, isSubmitting } = useForm({
    initialValues: {
        name: "",
        firstname: "",
        email: "",
        password: "",
    }
})

const { value: nameValue, errorMessage: nameErrorMessage } = useField("name", "required|min:3")
const { value: firstnameValue, errorMessage: firstnameErrorMessage } = useField("firstname", "required|min:3")
const { value: emailValue, errorMessage: emailErrorMessage } = useField("email", "required|email")
// const { value: passwordValue, errorMessage: passwordErrorMessage } = useField("password", "required")

const onSubmit = handleSubmit((values) => {
    connect(values.firstname, values.name, values.password, values.email)
})

</script>

<style scoped>

</style>