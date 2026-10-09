<template>
  <footer class="footer">
    <LogoForFooter :theme="props.theme" />

    <div>
      bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
      bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
      bla bla bla
    </div>
  </footer>
</template>

<script setup lang="ts">
const props = defineProps<{
  theme: string;
}>();
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 200px;
  overflow: hidden;
  margin-top: 60px;
}
</style>
