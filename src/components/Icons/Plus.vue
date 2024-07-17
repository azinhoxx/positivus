<script setup>
defineProps({
  isActive: Boolean
});
</script>

<template>
  <svg
    class="cursor-pointer shrink-0 min-[980px]:w-[58px] min-[980px]:h-[59px] size-[30px]"
    viewBox="0 0 59 59"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23" />
    <path
      :d="
        isActive
          ? 'M20 32.14V26.5H37.76V32.14H20'
          : 'M25.6 41.58V31.86H16V26.22H25.6V16.5H31.48V26.22H41.08V31.86H31.48V41.58H25.6Z'
      "
      fill="#191A23"
    />
  </svg>
</template>
