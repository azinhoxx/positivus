<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

import BlockTitle from '../BlockTitle.vue';
import Card from './Card.vue';

const cardInfo = ref([]);

onMounted(async () => {
  try {
    const { data } = await axios.get('https://fba01ab901e85c0f.mokky.dev/teamCards');
    cardInfo.value = data;
  } catch (err) {
    console.log(err);
  }
});
</script>

<template>
  <BlockTitle
    heading="Team"
    description="Meet the skilled and experienced team behind our successful digital marketing strategies"
    width="max-w-[473px]"
  />
  <section
    class="grid grid-cols-3 max-[1368px]:grid-cols-2 max-[948px]:grid-cols-1 gap-10 max-w-[1440px] xl:px-[100px] px-[50px] max-sm:px-5 mx-auto"
  >
    <Card
      v-for="(item, index) in cardInfo"
      :key="index"
      :="{
        ...item
      }"
      :class="[
        index % 2 === 0 ? 'min-[427px]:justify-self-end' : 'min-[427px]:justify-self-start',
        index in [0, 1] ? 'max-[948px]:hidden' : 'block'
      ]"
    />
  </section>
</template>
