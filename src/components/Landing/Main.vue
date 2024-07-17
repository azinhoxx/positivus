<script setup>
import Button from '../Button.vue';
</script>

<template>
  <section
    id="about"
    class="flex max-xlg:flex-col justify-between max-w-[1440px] mx-auto xl:px-[100px] px-[50px] max-sm:px-5 sm:my-[70px] mt-10 mb-[60px] max-xlg:items-center"
  >
    <div class="font-grotesk flex flex-col xlg:gap-y-[35px] max-w-[531px]">
      <h1 class="sm:text-[60px] font-medium sm:leading-[77px] text-[43px] leading-[54.9px]">
        Navigating the digital landscape for success
      </h1>
      <img
        class="self-center w-[600px] px-[14px] xlg:hidden max-xlg:mt-2.5 max-xlg:mb-5"
        src="../../img/main_pic.png"
        alt="main pic"
      />
      <p class="sm:text-[20px] sm:leading-[28px] text-[16px] leading-6">
        Our digital marketing agency helps businesses <br />
        grow and succeed online through a range of <br />
        services including SEO, PPC, social media marketing, and content creation.
      </p>
      <Button
        class="max-xlg:mt-10 max-xlg:w-full text-center"
        text="Book a consultation"
        bgColor="bg-dark"
        textColor="text-white"
      />
    </div>
    <img class="self-center w-[600px] max-xlg:hidden" src="../../img/main_pic.png" alt="main pic" />
  </section>
</template>
