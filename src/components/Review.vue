<template>
    <div class="
        text-left bg-white rounded-sm border border-gray-400 new-shadow
    ">
        <p class="p-6"><slot></slot></p>
        <hr class="border-t w-full border-gray-400">
        <div class="img-container flex justify-between p-6">
            <div class="flex justify-between">
                <img :src="avatar" class="avatar mr-4" />
                <div class="flex flex-col">
                    <span class="font-bold">{{ author }}</span>
                    <span>{{ job }}</span>
                </div>
            </div>
            <div class="flex">
                <img src="/images/star.svg" class="star" alt="star">
                <img src="/images/star.svg" class="star" alt="star">
                <img src="/images/star.svg" class="star" alt="star">
                <img src="/images/star.svg" class="star" alt="star">
                <img src="/images/star.svg" class="star" alt="star">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    author: String,
    avatar: String,
    job: String,
  },
})
export default class Category extends Vue {}
</script>

<style scoped>
  .avatar {
    height: 50px;
    width: 50px;
    border-radius: 999px;
  }

  .star {
      width: 16px;
  }

  .new-shadow {
      box-shadow: 0 0.6rem 0.6rem rgba(0,0,0,.1);
  }
</style>
