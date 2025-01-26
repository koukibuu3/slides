<template>
  <div class="splash">
    <h1 class="text-5xl text-center my-40 py-20">{{ mainTitle }}</h1>
    <div class="absolute top-0 bottom-0 left-0 right-0" style="z-index: -1;">
      <img :src="image" class="object-cover" />
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    image: string;
    mainTitle: string;
  }>();
</script>

<style>
.splash h1 {
  color: #fff !important;
  background-color: #009244 !important;
}
</style>
