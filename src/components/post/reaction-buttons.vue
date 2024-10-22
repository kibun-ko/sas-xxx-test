<script setup lang="ts">
const { likeStatus, likes, dislikes } = defineProps<{ likeStatus: boolean | null; likes: number; dislikes: number }>();

const emit = defineEmits<{
  (event: 'set-like-status', status: boolean | null): void;
}>();

const updateLikeStatus = (isLike: boolean) => {
  if (likeStatus === null || likeStatus !== isLike) {
    emit('set-like-status', isLike);
  } else {
    emit('set-like-status', null);
  }
};
</script>

<template>
  <div class="text-light-black justify-start items-center gap-px inline-flex">
    <button
      class="pl-3 pr-2 py-2 justify-start items-center gap-1.5 inline-flex rounded-l-[30px]"
      :class="{
        'bg-[#ff3b30] text-white': likeStatus === true,
        'bg-[#040405]/5 text-light-black': likeStatus !== true,
      }"
      @click="updateLikeStatus(true)"
    >
      <icon class="h-[11px]" :name="`i:like-${likeStatus ? 'filled' : 'outline'}`"></icon>
      <span>Like</span>
      <span class="text-right" :class="{ 'opacity-30': likeStatus !== true }">{{ likes }}</span>
    </button>
    <button
      class="pl-3 pr-2 py-2 justify-start items-center gap-1.5 inline-flex rounded-r-[30px]"
      :class="{
        'bg-light-black text-white': likeStatus === false,
        'bg-[#040405]/5 text-light-black': likeStatus !== false,
      }"
      @click="updateLikeStatus(false)"
    >
      <icon class="h-[11px]" :name="`i:dislike-${likeStatus === false ? 'filled' : 'outline'}`"></icon>
      <span>Trash</span>
      <span class="text-right" :class="{ 'opacity-30': likeStatus !== false }">{{ dislikes }}</span>
    </button>
  </div>
</template>
