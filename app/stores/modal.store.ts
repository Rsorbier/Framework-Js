
export const useModalStore = defineStore("modal", () => {

    const showJoinModal = ref(false)

    const toggleModal = () => {
        console.log('modal',)
        showJoinModal.value = !showJoinModal.value
    }

    return {
        toggleModal,
        showJoinModal
    }
})
