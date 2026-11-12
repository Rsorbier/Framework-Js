export const useGameStore = defineStore("game", () => {

    const gameExist = (gameId: String) => {
        // call backend pour récupérer la partie si elle existe
        return false
    }

    return {
        gameExist
    }
})