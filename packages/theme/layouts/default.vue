<template>
  <div class="slidev-layout default">
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>

<style>
.slidev-layout.default h1 {
  font-weight: 900;
}

.slidev-layout.default h1+* {
  margin-top: 2.5rem;
}


.slidev-layout.default h2 {
  font-size: 1.8rem;
}

.slidev-layout.default h3 {
  margin-top: 1.5rem;
  text-indent: 2rem;
  color: #009244;
}

.slidev-layout.default h3+* {
  text-indent: 2rem;
}
</style>
