<script setup>
import Link from '../Link.vue';

defineProps({
  content: String
});
</script>

<template>
  <div class="flex flex-col gap-[10px] xxl:w-[286px]">
    <p
      class="font-grotesk text-white sm:text-[18px] sm:leading-[23px] xxl:w-[286px] text-[16px] leading-6"
    >
      {{ content }}
    </p>
    <Link
      :isCircle="false"
      arrowColor="fill-green"
      textColor="text-green"
      flexDirection="flex-row-reverse"
    />
  </div>
</template>
