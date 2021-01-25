<template>
  <RouterLink
    :to="url"
    class="flex justify-center items-center text-sm rounded-sm
    px-4 py-1 transition duration-300"
  >
    <slot></slot>
  </RouterLink>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    url: String || null,
  },
})
export default class CustomButton extends Vue {}
</script>
