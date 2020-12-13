<template>
  <div class="sign-in flex flex-col pt-16 lg:pt-6">
    <h1>Sign In</h1>
    <router-link to="/sign-up" class="font-bold hover:text-blue-700"
      >Create an account</router-link
    >
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})
export default class SignIn extends Vue {}
</script>
