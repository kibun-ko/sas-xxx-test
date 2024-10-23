<script setup lang="ts">
import type { IComment } from '~/interfaces';
import { getNoun } from '~/utils/noun';

const props = defineProps<{ total: number; comments: IComment[] }>();
const postFix = computed(() => getNoun(props.total, 'комментарий', 'комментария', 'комментариев'));

defineEmits<{
  (event: 'delete', commentId: number): void;
}>();
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="text-[28px]">{{ total }} {{ postFix }}</div>
    <comment-card
      v-for="(comment, i) in comments"
      :key="i"
      :comment="comment"
      @delete="(commentId) => $emit('delete', commentId)"
    />
  </div>
</template>
