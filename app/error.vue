<template>
  <div>
    <h1>{{ error.status }}</h1>
    <NuxtLink to="/">Перейти на главную</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();
</script>
