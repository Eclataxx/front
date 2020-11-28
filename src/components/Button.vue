<template>
  <RouterLink
    :to="url"
    class="
      flex justify-center items-center text-sm
      rounded px-4 py-1 transition duration-300 mt-2
    ">
    <slot></slot>
  </RouterLink>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    url: String,
  },
})

export default class Button extends Vue {}
</script>
