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
    class="text-[20px] leading-[28px] px-[35px] py-5 border rounded-[14px] border-[#191A23] size-max"
    :class="[bgColor, textColor]"
    rel="noopener"
  >
    {{ content }}
  </a>
</template>
