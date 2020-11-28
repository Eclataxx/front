<template>
  <div class="flex">
    <img src="/images/check_circle.svg" class="mr-1">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    url: String,
  },
})

export default class InfoText extends Vue {}
</script>
