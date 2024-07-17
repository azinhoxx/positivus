<script setup>
import CardList from './CardList.vue';
import BlockTitle from '../BlockTitle.vue';
</script>

<template>
  <section class="flex flex-col max-w-[1440px] mx-auto xl:px-[100px] px-[50px] max-sm:px-5">
    <BlockTitle
      heading="Services"
      description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      width="max-w-[580px]"
    />
    <CardList />
  </section>
</template>
