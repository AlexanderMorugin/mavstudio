<template>
  <header class="header">
    <div v-if="props.theme === 'white'" class="header__overlay" />
    <ContainerPage desktopPadding class="header__container">
      <ButtonWithIcon
        :theme="props.theme"
        name="menu"
        title="Меню"
        @handleClick="isMenuModalOpen = true"
      />
      <LogoForHeader />
      <ButtonWithIcon
        :theme="props.theme"
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
const props = defineProps<{
  theme: string;
}>();

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

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: $white-one;
    filter: blur(100px);
    backdrop-filter: blur(15px);
  }

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
