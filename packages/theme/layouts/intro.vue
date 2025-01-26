<template>
  <div class="intro">
    <h1 :style="{ fontSize: computedFontSize, backgroundColor: baseColor }">{{ mainTitle }}</h1>
    <h2 class="light:text-gray-800 dark:text-gray-200">{{ subTitle }}</h2>
    <p class="absolute bottom-10 right-8 text-2xl light:text-gray-800 dark:text-gray-200">{{ createdAt }}</p>
    <div class="absolute top-0 bottom-0 left-0 right-0" style="z-index: -1;">
      <img :src="image" class="-ml-14 -mt-10" />
      <div class="p-8 absolute top-0 bottom-0 left-140 right-0 light:bg-white dark:bg-black" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  const props = defineProps<{
    image: string;
    mainTitle: string;
    subTitle: string;
    baseColor: string;
    createdAt: string;
  }>();

  const computedFontSize = computed(() => {
    const length = props.mainTitle.length;
    const minSize = 2; // 最小フォントサイズ（rem）
    const maxSize = 5; // 最大フォントサイズ（rem）
    const idealSize = Math.min(maxSize, Math.max(minSize, maxSize - length * 0.15));
    return `${idealSize}rem`;
  });
</script>

<style>
.intro h1 {
  color: #fff !important;
  font-weight: 900 !important;
  /* background-color: #009244 !important; */
  padding: 1.5rem 1rem !important;
  text-align: center;
  position: absolute;
  top: 250px;
  left: 250px;
  right: 0;
}

.intro h2 {
  font-weight: 900 !important;
  font-size: 2.5rem !important;
  position: absolute;
  top: 180px;
  right: 2rem;
}
</style>


