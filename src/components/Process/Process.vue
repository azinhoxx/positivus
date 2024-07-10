<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Card from './Card.vue';
import BlockTitle from '../BlockTitle.vue';

const cardInfo = ref([]);

onMounted(async () => {
  try {
    const { data } = await axios.get('https://fba01ab901e85c0f.mokky.dev/process');
    cardInfo.value = data;
  } catch (err) {
    console.log(err);
  }
});

const screenWidth = document.documentElement.clientWidth;
</script>

<template>
  <BlockTitle
    :heading="screenWidth < 768 ? 'Our Working' : 'Our Working Process'"
    :additional="screenWidth < 768 ? 'Process' : ''"
    description="Step-by-Step Guide to Achieving Your Business Goals"
    :width="`max-w-[292px]`"
  />
  <section
    class="flex flex-col max-w-[1440px] xl:px-[103px] px-[50px] max-sm:px-5 mx-auto xmd:gap-y-[30px] gap-y-5"
  >
    <Card
      v-for="(item, index) in cardInfo"
      :key="index"
      :title="item.title"
      :content="item.content"
      :number="'0' + (index + 1)"
      :isOpen="index === 0 ? true : false"
    />
  </section>
</template>
