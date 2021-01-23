<template>
  <input v-on:keyup.enter="search" type="text" class="text-black rounded-sm" />
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class SearchBar extends Vue {
  search(event: { target: HTMLInputElement }) {
    const { value } = event.target;
    const path = value ? `/search?q=${value}` : '/search';
    this.$router.push(path);
  }
}
</script>

<style lang="scss" scoped>

</style>
