<template id="home">

    <CustomModal v-if="showJoinModal">
        <GameJoinForm />
    </CustomModal>

    <div id="conteneur">

        <div class="button-container">
            <CustomButton id="new" text="Nouvelle partie" icon="la:plus-circle" size="150%" color="rgba(255, 255, 255, 0.6)" margin="auto" width="33%" height="6rem" disabled/>
            <CustomButton id="join" text="Rejoindre une partie" icon="material-symbols:play-circle" margin="auto" size="150%" width="33%" height="6rem" color="rgba(255, 255, 255, 0.6)" @buttonClicked="toggleModal()" />
        </div>
        <div class="button-container">
            <CustomButton id="history" text="Historique" icon="material-symbols:history" margin="auto" size="150%" width="33%" height="6rem" color="rgba(255, 255, 255, 0.6)" disabled/>
            <CustomLink to="/roles" text="Rôles" icon="iconoir:wolf-solid" margin="auto" size="150%" width="33%" height="6rem" color="rgba(255, 255, 255, 0.6)" />
        </div>

    </div>
</template>

<script setup>
import { useModalStore } from '#imports';

//   definePageMeta({
//     layout: "default"
//   })

    // const appStore = useAppStore() // uniquement pour les fonctions
    // const { darkMode } = storeToRefs(appStore) // pour valeurs réactives
    const modalStore = useModalStore()
    const { toggleModal } = useModalStore()
    const { showJoinModal } = storeToRefs(modalStore)

</script>

<style scoped>

div {
    display: flex;
    flex-wrap: wrap;
}

#conteneur {
    gap: 1em;
    margin-top: 3em;
}

.button-container {
    width: 100%;
}


</style>