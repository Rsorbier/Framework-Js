import { defineRule, configure } from 'vee-validate';
import { required, email, min, max, regex } from '@vee-validate/rules';

const Fonction = (value) => {
    if (!value) {
        return "qqc"
    }
}

export default defineNuxtPlugin((nuxtApp) => {
    defineRule("required", required);
    defineRule("email", email);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("maFonction", Fonction);
})

configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: false,
    validateOnModelUpdate: true
})