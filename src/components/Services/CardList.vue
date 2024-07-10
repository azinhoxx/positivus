<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

import Card from './Card.vue';

const serviceCardsThemes = ref([]);

const serviceCardsInfo = ref([]);

onMounted(async () => {
  try {
    const themes = await axios.get('https://fba01ab901e85c0f.mokky.dev/servicesCardsThemes');
    serviceCardsThemes.value = themes.data;

    const info = await axios.get('https://fba01ab901e85c0f.mokky.dev/servicesCardsInfo');
    serviceCardsInfo.value = info.data;
  } catch (err) {
    console.log(err);
  }
});
</script>

<template>
  <div class="flex flex-wrap sm:gap-10 gap-[30px]">
    <Card
      v-for="(item, index) in serviceCardsInfo"
      :key="index"
      :="{
        ...item,
        ...serviceCardsThemes[index % 3]
      }"
      :class="index % 2 === 0 ? 'justify-self-end' : 'justify-self-start'"
    />
  </div>
</template>
