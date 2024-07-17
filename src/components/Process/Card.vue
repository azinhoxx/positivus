<script setup>
import { ref } from 'vue';

import Plus from '../Icons/Plus.vue';

const props = defineProps({
  number: String,
  title: String,
  content: String,
  isOpen: {
    type: Boolean,
    default: false
  }
});

const isOpen = ref(props.isOpen);

const screenWidth = document.documentElement.clientWidth;
</script>

<template>
  <div
    class="font-grotesk border border-solid flex flex-col xmd:p-[41px_60px_41px_60px] p-5 rounded-[45px] shadow-[0_5px_0_theme(colors.dark)]"
    :class="isOpen ? 'bg-green' : 'bg-grey'"
  >
    <div class="flex justify-between items-center gap-x-[10px]">
      <div class="flex xmd:gap-x-[25px] sm:gap-x-[33px] gap-x-[20px] items-center">
        <span class="font-medium xmd:text-[60px] text-[30px] xmd:leading-[77px] leading-[38px]">{{
          number
        }}</span>
        <h3
          class="font-medium xmd:text-[30px] text-[18px] xmd:leading-[38px] leading-[23px] w-full"
        >
          {{ title }}
        </h3>
      </div>
      <Plus @click="isOpen = !isOpen" :isActive="isOpen" />
    </div>
    <div v-show="isOpen">
      <hr class="my-[30px]" />
      <p class="xmd:text-[18px] xmd:leading-[23px] text-[16px] leading-[24px] max-w-[1114px]">
        {{ content }}
      </p>
    </div>
  </div>
</template>
