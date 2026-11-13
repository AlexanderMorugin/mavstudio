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
          @closeModal="closeModal"
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

const closeModal = () => {
  isMenuModalOpen.value = false;
};

watch(isMenuModalOpen, (newValue) => {
  let html = document.documentElement;
  let marginSize = window.innerWidth - html.clientWidth;

  if (newValue) {
    document.body.style.overflow = "hidden";

    if (marginSize) {
      html.style.marginRight = marginSize + "px";
    }
  } else {
    html.style.marginRight = "";
    document.body.style.overflow = "auto";
  }
});

const handleKeyDown = (e: any) => {
  if (e.key === "Escape" && isMenuModalOpen) {
    e.preventDefault();
    closeModal();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeyDown);
});
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
