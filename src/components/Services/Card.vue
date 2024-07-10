<script setup>
import Heading from '../Heading.vue';
import Link from '../Link.vue';

defineProps({
  imageUrl: String,
  imageAlt: String,
  contentFirst: String,
  contentSecond: String,
  cardBgColor: String,
  headingColor: String,
  headingBgColor: String,
  arrowColor: String,
  circleColor: String,
  textColor: String
});
</script>

<template>
  <article
    class="grid grid-cols-2 grid-rows-[auto_auto] sm:gap-y-[90px] max-[500px]:gap-y-[27px] justify-between w-[600px] p-[50px] border border-dark rounded-[45px] mx-auto shadow-[0_5px_0_theme(colors.dark)]"
    :class="cardBgColor"
  >
    <Heading
      class="sm:col-span-1 col-span-2"
      :content="contentFirst"
      :additional="contentSecond"
      tag="h3"
      :textColor="headingColor"
      :bgColor="headingBgColor"
    />
    <Link
      class="self-end row-start-2 row-end-3"
      :textColor="textColor"
      :circleColor="circleColor"
      :isCircle="true"
      :arrowColor="arrowColor"
    />
    <img
      class="self-center sm:row-start-1 sm:row-span-2 justify-self-end max-sm:pt-2.5 max-sm:scale-[1.15]"
      :src="imageUrl"
      :alt="imageAlt"
    />
  </article>
</template>
