<script setup>
defineProps({
  content: String,
  bgColor: {
    type: String,
    default: 'bg-white'
  },
  textColor: {
    type: String,
    default: 'text-[#000]'
  }
});
</script>

<template>
  <a
    href="#"
    class="sm:text-[20px] sm:leading-7 text-[18px] leading-6 px-[35px] sm:py-5 py-4 border rounded-[14px] border-[#191A23] size-max"
    :class="[bgColor, textColor]"
    rel="noopener"
  >
    {{ content }}
  </a>
</template>
