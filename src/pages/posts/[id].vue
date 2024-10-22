<script setup lang="ts">
const route = useRoute();
const store = usePostsStore();
const commentsStore = useCommentsStore();
const { comments, page } = storeToRefs(commentsStore);
const postId = computed(() => parseInt(route.params.id as unknown as string));

await useAsyncData('post', () => store.fetchCurrentPost(postId.value));
await useAsyncData('comments', () => commentsStore.fetch(postId.value));

onUnmounted(() => {
  commentsStore.$reset();
});
</script>

<template>
  <div class="flex flex-col gap-10">
    <post-card :post="store.currentPost" @set-like-status="(status) => store.setLikeStatus(postId, status)" />
    <div class="flex flex-col gap-6">
      <div class="text-[28px]">{{ page.total }} комментариев</div>
      <comment-card
        v-for="(comment, i) in comments"
        :key="i"
        :comment="comment"
        @delete="(commentId) => commentsStore.deleteComment(commentId)"
      />
    </div>
  </div>
</template>
