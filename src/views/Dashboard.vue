<template>
  <div class="dashboard pt-16 lg:pt-6">
      <h1 class="text-2xl mb-2">Dashboard</h1>
      <span>Insert good looking dashboard here (with a different header)</span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Field, Vuemik } from 'vuemik';

@Options({
  components: {
    Field,
    Vuemik,
  },
})
export default class Dashboard extends Vue {}
</script>
