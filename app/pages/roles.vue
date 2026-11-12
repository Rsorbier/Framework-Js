<template>
  <ElementGrid v-if="selectedRole === null" :items-amount="5">
    <RoleCard v-for="(role, index) in roles" :key="`role-${role.name}`" :name="`${role.name}`" :image="`${role.image}`" @click="() => {selectedRole = role}" />
  </ElementGrid>
  <div v-else>
    <div>
      <CustomButton text="Retour" icon="material-symbols:arrow-back" :icon-after-text="false" @buttonClicked="() => {selectedRole = null}"/>
    </div>
    <RoleDetails :role="selectedRole"/>
  </div>
</template>

<script setup>
  import { useRolesStore } from '#imports';

  const { getRoles } = useRolesStore();
  const roles =  getRoles();
  let selectedRole = ref(null)

</script>

<style scoped>

</style>