<script setup>
import { ref } from 'vue';

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
  <article
    class="font-grotesk border border-solid flex flex-col xmd:p-[41px_60px_41px_60px] p-[30px] rounded-[45px] shadow-[0_5px_0_theme(colors.dark)]"
    :class="isOpen ? 'bg-green' : 'bg-grey'"
  >
    <div class="flex justify-between items-center">
      <div class="flex xmd:gap-x-[25px] gap-x-[33px] items-center">
        <span class="font-medium xmd:text-[60px] text-[30px] xmd:leading-[77px] leading-[38px]">{{
          number
        }}</span>
        <h3
          class="font-medium xmd:text-[30px] text-[18px] xmd:leading-[38px] leading-[23px] w-full"
        >
          {{ title }}
        </h3>
      </div>
      <div>
        <svg
          class="cursor-pointer"
          :class="screenWidth < 980 ? 'w-[30px] h-[30px]' : ''"
          @click="isOpen = !isOpen"
          width="58"
          height="59"
          viewBox="0 0 59 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23" />
          <path
            :d="
              isOpen
                ? 'M20 32.14V26.5H37.76V32.14H20'
                : 'M25.6 41.58V31.86H16V26.22H25.6V16.5H31.48V26.22H41.08V31.86H31.48V41.58H25.6Z'
            "
            fill="#191A23"
          />
        </svg>
      </div>
    </div>
    <div v-show="isOpen">
      <hr class="my-[30px]" />
      <p class="xmd:text-[18px] xmd:leading-[23px] text-[16px] leading-[24px] max-w-[1114px]">
        {{ content }}
      </p>
    </div>
  </article>
</template>
