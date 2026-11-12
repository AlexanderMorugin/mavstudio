<template>
  <header class="header">
    <ContainerPage desktopPadding class="header__container">
      <ButtonWithIcon
        name="menu"
        title="Меню"
        @handleClick="isMenuModalOpen = true"
      />
      <LogoForHeader />
      <ButtonWithIcon
        name="chat"
        title="Связаться"
        @handleClick="isChatModalOpen = true"
      />
    </ContainerPage>
  </header>

  <!-- Модалка Меню -->
  <ClientOnly>
    <Teleport to="#teleports">
      <Transition name="list">
        <ModalForHeader
          v-if="isMenuModalOpen"
          title="Меню"
          name="menu"
          @closeModal="isMenuModalOpen = false"
        />
      </Transition>
    </Teleport>
  </ClientOnly>

  <!-- Модалка Чата -->
  <!-- <Teleport to="#teleports">
    <Transition name="list">
      <ModalForHeader
        v-if="isChatModalOpen"
        :isModalOpen="isChatModalOpen"
        title="Связь"
        name="chat"
        @closeModal="isChatModalOpen = false"
      />
    </Transition>
  </Teleport> -->
</template>

<script setup lang="ts">
const isMenuModalOpen = ref(false);
const isChatModalOpen = ref(false);

// watch([isMenuModalOpen, isChatModalOpen], (newValue) => {
// watch(isMenuModalOpen, (newValue) => {
//   if (newValue) {
//     document.body.style.overflow = "hidden";
//   } else {
//     document.body.style.overflow = "auto";
//   }
// });
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  width: 100%;
  backdrop-filter: blur(15px) brightness(0.7);
  border-bottom: 1px solid $white-mask-three;
  z-index: 10;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    height: 70px;

    @media (max-width: 767px) {
      height: 60px;
    }
  }
}
</style>
