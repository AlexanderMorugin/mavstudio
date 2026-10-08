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
  <Teleport to="#teleports">
    <Transition name="top">
      <ModalBlockForHeader
        v-if="isMenuModalOpen"
        :isModalOpen="isMenuModalOpen"
        title="Меню"
        name="menu"
        @closeModal="isMenuModalOpen = false"
      />
    </Transition>
  </Teleport>

  <!-- Модалка Чата -->
  <Teleport to="#teleports">
    <Transition name="top">
      <ModalBlockForHeader
        v-if="isChatModalOpen"
        :isModalOpen="isChatModalOpen"
        title="Связь"
        name="chat"
        @closeModal="isChatModalOpen = false"
      />
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const isMenuModalOpen = ref(false);
const isChatModalOpen = ref(false);
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  width: 100%;
  backdrop-filter: blur(15px) brightness(80%);
  border-bottom: 1px solid $white-mask-three;
  z-index: 3;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    height: 70px;

    @media (max-width: 767px) {
      height: 60px;
    }
  }
}
</style>
