<script setup>
defineProps({
  content: {
    type: String,
    required: true
  },
  additional: {
    type: String,
    default: ''
  },
  textColor: {
    type: String,
    default: 'text-dark'
  },
  bgColor: {
    type: String,
    default: 'bg-green'
  },
  tag: {
    type: String,
    default: 'h2'
  }
});
</script>

<template>
  <div class="flex flex-col">
    <component
      :is="tag"
      class="font-grotesk font-medium size-max rounded-[7px] px-[7px]"
      :class="[
        textColor,
        bgColor,
        tag === 'h2'
          ? 'sm:text-[40px] sm:leading-[51px] text-[36px] leading-[45.9px]'
          : 'sm:text-[30px] sm:leading-[38.3px] text-[26px] leading-[33.2px]'
      ]"
    >
      {{ content }}
    </component>
    <component
      :is="tag"
      v-if="additional"
      class="font-grotesk font-medium size-max rounded-[7px] px-[7px]"
      :class="[
        textColor,
        bgColor,
        tag === 'h2'
          ? 'sm:text-[40px] sm:leading-[51px] text-[36px] leading-[45.9px]'
          : 'sm:text-[30px] sm:leading-[38.3px] text-[26px] leading-[33.2px]'
      ]"
    >
      {{ additional }}
    </component>
  </div>
</template>
