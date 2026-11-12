// l'utilisateur connecté

// utilisateur connecté
// fonction pour déco (= supprimer store)
// fonction de connexion
// afficher profil dans une page
// afficher si user connecté dans navbar

export const useUserStore = defineStore("user", () => {
    const connectedUser = reactive({})

    const connect = (firstName: String, lastName: String, password: String, mail: String) => {
        connectedUser.value = { firstName: firstName, lastName: lastName, password: password, mail: mail }
    }

    const deconnect = () => {
        connectedUser.value = null
    }

    const isConnected = computed(() => !!connectedUser.value)

    const fullName = computed(() => {
        if (isConnected) {
            return `${connectedUser.value.firstName} ${connectedUser.value.lastName}`
        }
    })

    return {
        connectedUser,
        connect,
        deconnect,
        isConnected,
        fullName,
    }
})