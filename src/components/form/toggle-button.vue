<script setup lang="ts">
const {
  activeBg = 'bg-[#ff3b30]',
  inactiveBg = 'bg-[#040405]/5',
  activeText = 'text-white',
  inactiveText = 'text-light-black',
} = defineProps<{ activeBg?: string; inactiveBg?: string; activeText?: string; inactiveText?: string }>();

const model = defineModel({ type: Boolean, default: false });

const updateValue = () => {
  model.value = true;
};
</script>

<template>
  <button
    class="pl-3 pr-2 py-2 justify-start items-center gap-1.5 inline-flex"
    :class="{
      [activeBg]: model,
      [activeText]: model,
      [inactiveBg]: !model,
      [inactiveText]: !model,
    }"
    @click="updateValue"
  >
    <slot></slot>
  </button>
</template>
