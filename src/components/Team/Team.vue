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
  <section class="flex flex-col max-w-[1440px] xl:px-[100px] px-[50px] max-sm:px-5 mx-auto pb-10">
    <BlockTitle
      heading="Team"
      description="Meet the skilled and experienced team behind our successful digital marketing strategies"
      width="max-w-[473px]"
    />
    <div class="grid grid-cols-3 max-[1368px]:grid-cols-2 max-[948px]:grid-cols-1 gap-10">
      <Card
        class="justify-self-center"
        v-for="(item, index) in cardInfo"
        :key="index"
        :="{
          ...item
        }"
        :class="[[1, 2].includes(index) ? 'max-[948px]:hidden' : 'block']"
      />
    </div>
  </section>
</template>
