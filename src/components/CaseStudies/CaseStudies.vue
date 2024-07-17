<script setup>
import BlockTitle from '../BlockTitle.vue';
import Card from './Card.vue';
</script>

<template>
  <section class="max-w-[1440px] mx-auto xl:px-[103px] px-[50px] max-sm:px-5">
    <BlockTitle
      heading="Case Studies"
      description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      width="max-w-[580px]"
    />
    <div class="xxl:bg-dark xxl:rounded-[45px] xxl:py-[70px] xxl:px-[60px]">
      <div
        class="flex max-[950px]:flex-col max-xl:gap-5 justify-between xxl:h-[186px] max-[950px]:items-center"
      >
        <Card
          class="max-xxl:bg-dark max-xxl:text-white max-xxl:rounded-[45px] max-xxl:px-[50px] max-xxl:py-[42px] max-xxl:w-[350px] max-[400px]:max-w-full"
          content="For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."
        />
        <hr class="h-[186px] border-l border-solid border-white mx-[63.5px] max-xxl:hidden" />
        <Card
          class="max-xxl:bg-dark max-xxl:text-white max-xxl:rounded-[45px] max-xxl:px-[50px] max-xxl:py-[42px] max-xxl:w-[350px] max-[400px]:max-w-full"
          content="For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic."
        />
        <hr class="h-[186px] border-r border-solid border-white mx-[63.5px] max-xxl:hidden" />
        <Card
          class="max-xxl:bg-dark max-xxl:text-white max-xxl:rounded-[45px] max-xxl:px-[50px] max-xxl:py-[42px] max-xxl:w-[350px] max-[400px]:max-w-full"
          content="For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."
        />
      </div>
    </div>
  </section>
</template>
