<template>
  <div class="flex flex-col bg-green-300 p-2 mb-2 w-full text-green-900
  rounded-sm border border-green-400">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class FormSuccess extends Vue {}
</script>
