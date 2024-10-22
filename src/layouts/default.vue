<script setup lang="ts">
</script>

<template>
  <div class="h-full pt-4 px-8">
    <div class="flex flex-col gap-2.5">
      <nuxt-link class="text-center text-primary text-[40px] mb-12" to="/">ikakprosto.ru</nuxt-link>
      <div class="flex justify-center mb-10">
        <div class="w-[676px]">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
