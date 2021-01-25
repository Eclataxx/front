<template>
  <router-link :to="`/search?q=${query}`" class="
    flex flex-col category border border-gray-400 bg-white p-4
    transition duration-300 cursor-pointer mr-1 mb-1 rounded-sm
  ">
    <div class="img-container">
      <img :src="imageSrc" />
    </div>
    <span class="pt-2">{{ title }}</span>
  </router-link>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    query: String,
    imageSrc: String,
    title: String,
  },
})
export default class Category extends Vue {}
</script>

<style scoped>
  img {
    height: 100%;
    width: 100%;
    border-radius: 999px;
    object-fit: cover;
  }

  .img-container {
    width: 140px;
    height: 140px;
    border-radius: 999px;
  }

  .category:hover {
    box-shadow: 0 0.6rem 0.6rem rgba(0,0,0,.1);
  }
</style>
