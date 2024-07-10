<script setup>
defineProps({
  imageUrl: String,
  alt: String,
  name: String,
  job: String,
  aboutFirst: String
});
</script>

<template>
  <article
    class="font-grotesk flex flex-col border rounded-[45px] py-10 px-[35px] w-[387px] shadow-[0_5px_0_theme(colors.dark)]"
  >
    <div class="grid grid-cols-3 justify-between">
      <img :src="imageUrl" :alt="alt" />
      <div class="col-start-2 col-end-4 row-start-1 row-end-2 ml-5 self-end">
        <h4 class="font-medium sm:text-[20px] leading-[25.5px]">{{ name }}</h4>
        <span class="text-[18px] leading-[23px]">{{ job }}</span>
      </div>
      <svg
        class="col-start-3 col-end-4 row-start-1 row-end-2 justify-self-end"
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="17" cy="17" r="17" fill="black" />
        <path d="M9.31776 25H12.8131V13.6844H9.31776V25Z" fill="#B9FF66" />
        <path
          d="M9 10.0719C9 11.1875 9.90031 12.0906 11.0654 12.0906C12.1776 12.0906 13.0779 11.1875 13.0779 10.0719C13.0779 8.95625 12.1776 8 11.0654 8C9.90031 8 9 8.95625 9 10.0719Z"
          fill="#B9FF66"
        />
        <path
          d="M22.4517 25H26V18.7844C26 15.7562 25.3115 13.3656 21.7632 13.3656C20.0685 13.3656 18.9034 14.3219 18.4268 15.225H18.3738V13.6844H15.0374V25H18.5327V19.4219C18.5327 17.9344 18.7975 16.5 20.6511 16.5C22.4517 16.5 22.4517 18.2 22.4517 19.475V25Z"
          fill="#B9FF66"
        />
      </svg>
    </div>
    <hr class="my-7" />
    <p class="text-[18px] leading-[23px]" v-html="aboutFirst"></p>
  </article>
</template>
