<script setup>
import Heading from './Heading.vue';

defineProps({
  heading: String,
  description: String,
  width: String,
  additional: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div
    class="max-[1060px]:flex-col max-[1060px]:items-center gap-y-[30px] font-grotesk flex gap-x-10 lg:mt-[140px] mt-[60px] lg:mb-20 mb-10"
  >
    <Heading :content="heading" :additional="additional" />
    <p
      class="sm:text-[18px] sm:leading-[23px] text-[16px] leading-[24px] max-sm:text-center max-sm:max-w-full"
      :class="width"
    >
      {{ description }}
    </p>
  </div>
</template>
