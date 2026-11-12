<template>

<Teleport to="body">
  <Transition name="modal" appear>
    <div class="modal" @click.self="toggleModal(showJoinModal)">
      <div class="modal-content">
        <slot />
      </div>
    </div>
  </Transition>
</Teleport>

</template>

<script setup>

  import { useModalStore } from '#imports';

    const { toggleModal } = useModalStore()
    const { showJoinModal } = storeToRefs(useModalStore())

</script>

<style scoped>

.modal-content {
  margin: auto;
  width: 40%;
  height: 30%;
  background-color: white;
  align-self: center;
  border-radius: 20px;
  padding: 10px;
}

.modal {
  display: flex;
  position: absolute;
  z-index: 64;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  align-items: center;
}


</style>