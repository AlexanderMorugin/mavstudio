const isScreenTablet = ref(null);
const windowWidth = ref(null);

export function useResizeTablet() {
  onMounted(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
  });

  onUnmounted(() => {
    window.removeEventListener("resize", resizeHandler);
  });

  const resizeHandler = () => {
    windowWidth.value = window.innerWidth;

    if (windowWidth.value <= 1023) {
      isScreenTablet.value = true;
      return;
    }

    isScreenTablet.value = false;
  };

  return {
    isScreenTablet,
  };
}
