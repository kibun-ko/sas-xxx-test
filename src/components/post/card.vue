<script setup lang="ts">
import type { IPostEnriched } from '~/interfaces';

defineProps<{ post: IPostEnriched }>();
defineEmits<{
  (event: 'set-like-status', status: boolean | null): void;
}>();
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex flex-col gap-4">
      <div class="text-[28px] font-bold">
        {{ post.title }}
      </div>
      <div class="text-xl">
        {{ post.body }}
      </div>
    </div>
    <div class="flex flex-row gap-2 text-sm/[10px] items-center">
      <post-reaction-buttons
        :like-status="post.likeStatus"
        :likes="post.reactions.likes"
        :dislikes="post.reactions.dislikes"
        @set-like-status="(status) => $emit('set-like-status', status)"
      />
      <nuxt-link class="cursor-pointer text-primary underline underline-offset-4" :to="`/posts/${post.id}`">
        Open comments
      </nuxt-link>
      <div class="text-[#040405]/20">Today</div>
      <div class="flex" v-for="(tag, i) in post.tags" :key="i">
        <icon class="h-[20px]" v-if="i === 0" name="i:tail" />
        <div class="inline-flex p-1 bg-[#787880]/10 items-center rounded-[3px]">
          <div>{{ tag }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
