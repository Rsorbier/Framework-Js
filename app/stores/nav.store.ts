import navbarPages from "../datas/navbarPages.json" with { type: "json" };

export const useNavStore = defineStore("nav", () => {

    const getNavbarPages = () => {
        return navbarPages
    }

    return {
        getNavbarPages
    }
})