<script setup lang="ts">
import type { IComment } from '~/interfaces';

defineProps<{ total: number; comments: IComment[] }>();
defineEmits<{
  (event: 'delete', commentId: number): void;
}>();
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="text-[28px]">{{ total }} комментариев</div>
    <comment-card v-for="(comment, i) in comments" :key="i" :comment="comment" />
  </div>
</template>
