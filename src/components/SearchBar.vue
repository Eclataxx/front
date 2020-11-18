<template>
  <div>
    <input type="text" class="text-black p-2 rounded" />
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class SearchBar extends Vue {}
</script>

<style lang="scss" scoped>
  input {
    width: 800px;
  }
</style>
