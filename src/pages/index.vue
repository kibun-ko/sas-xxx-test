<script setup lang="ts">
const store = usePostsStore();

await useAsyncData('posts', () => store.fetch());
</script>

<template>
  <div class="flex flex-col gap-8">
    <post-card
      v-for="(post, i) in store.posts.slice(0, 5)"
      :key="i"
      :post="post"
      @set-like-status="(status) => store.setLikeStatus(post.id, status)"
    ></post-card>
  </div>
</template>

<style scoped></style>
