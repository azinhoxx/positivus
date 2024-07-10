<script setup>
import Button from './Button.vue';

const screenWidth = document.documentElement.clientWidth;
</script>

<template>
  <section class="max-w-[1440px] mx-auto xl:px-[100px] px-[50px] max-sm:px-5 mt-[100px]">
    <div class="relative min-[1180px]:py-[23.5px]">
      <div
        class="flex bg-grey rounded-[45px] md:p-[60px] p-[50px] max-md:w-full max-[1180px]:w-max mx-auto"
      >
        <div class="font-grotesk flex flex-col md:gap-y-[26px] gap-y-5 max-w-[500px]">
          <h3 class="font-medium sm:leading-[38.3px] sm:text-[30px] text-[26px] leading-[33.2px]">
            Let’s make things happen
          </h3>
          <p class="sm:text-[18px] sm:leading-[23px] text-[16px] leading-6">
            Contact us today to learn more about how our digital marketing services can help your
            business grow and succeed online.
          </p>
          <Button
            class="max-[1180px]:w-full text-center"
            :content="screenWidth < 768 ? 'Get your proposal' : 'Get your free proposal'"
            bgColor="bg-dark"
            textColor="text-white"
          />
        </div>
      </div>
      <img
        class="absolute top-0 xl:right-[135px] right-[50px] max-[1180px]:hidden"
        src="../img/cta_pic.png"
        alt="cta pic"
      />
    </div>
  </section>
</template>
