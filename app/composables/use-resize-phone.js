const isScreenPhone = ref(null);
const windowWidth = ref(null);

export function useResizePhone() {
  onMounted(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
  });

  onUnmounted(() => {
    window.removeEventListener("resize", resizeHandler);
  });

  const resizeHandler = () => {
    windowWidth.value = window.innerWidth;

    if (windowWidth.value <= 576) {
      isScreenPhone.value = true;
      return;
    }

    isScreenPhone.value = false;
  };

  return {
    isScreenPhone,
  };
}
