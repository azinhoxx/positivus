<script setup>
import { onMounted } from 'vue';

import Button from './Button.vue';

//плавный скролл до якоря

onMounted(() => {
  const anchors = document.querySelectorAll('a.menu[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }
});
</script>

<template>
  <nav
    id="nav"
    class="font-grotesk flex items-center text-[20px] leading-[28px] gap-x-10 max-xl:hidden"
  >
    <a class="menu" href="#about" rel="noopener">About us</a>
    <a class="menu" href="#services" rel="noopener">Services</a>
    <a class="menu" href="#cases" rel="noopener">Use Cases</a>
    <a class="menu" href="#" rel="noopener">Pricing</a>
    <a class="menu" href="#" rel="noopener">Blog</a>
    <Button text="Request a quote" />
  </nav>
</template>
