<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const items = ref([]);

onMounted(async () => {
  try {
    const { data } = await axios.get('https://fba01ab901e85c0f.mokky.dev/logoGallery');
    items.value = data;
  } catch (err) {
    console.log(err);
  }
});
</script>

<template>
  <section
    class="flex flex-wrap max-w-[1440px] xl:px-[100px] px-[50px] max-sm:px-5 mx-auto xlg:gap-x-[95px] gap-x-[60px] justify-center max-xlg:gap-y-5"
  >
    <img v-for="(item, index) in items" :key="index" :src="item.src" :alt="item.alt" />
  </section>
</template>
