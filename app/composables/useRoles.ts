import roles from "../datas/roles.json" with { type: "json" };

export const useRolesStore = defineStore("roles", () => {

    const getRoles = () => {
        return roles
    }

    return {
        getRoles
    }
})