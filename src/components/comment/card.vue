<script setup lang="ts">
import type { IComment } from '~/interfaces';

defineProps<{ comment: IComment }>();
const emit = defineEmits<{
  (event: 'delete', commentId: number): void;
}>();
</script>

<template>
  <div class="flex flex-row gap-2">
    <icon class="h-[46px] w-[46px]" name="i:avatar" />
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-3">
        <div class="text-xl/4 font-bold">
          {{ comment.user.fullName }}
        </div>
        <div class="text-xl/4">
          {{ comment.body }}
        </div>
        <div class="flex flex-row gap-2 text-sm items-center">
          <div class="text-[#040405]/20">Today</div>
          <div class="cursor-pointer text-primary underline underline-offset-4" @click="emit('delete', comment.id)">
            Удалить
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
