<template>
  <div class="slidev-layout fact">
    <div class="my-auto w-full">
      <slot />
      <div class="p-8 absolute top-12 bottom-12 left-12 right-12 light:bg-green-100 dark:bg-green-900 -z-10" />
    </div>
  </div>
</template>

<style>
.fact h1 {
  color: #fff !important;
  font-weight: 900 !important;
  background-color: #009244 !important;
  padding: 1.2rem 1rem !important;
  text-align: center;
  position: absolute;
  top: 120px;
  left: 120px;
  right: 650px;
}

.fact p {
  margin: 1rem 0 !important;
  font-size: 2.3rem !important;
  font-weight: 900 !important;
  line-height: 1.5 !important;
}

.fact p {
  margin: 0 4rem !important;
}

.fact h1+p {
  margin: 12rem 4rem 0 !important;
}
</style>
