<template>
  <div class="sign-up mt-6">
    <h1>Create an account</h1>
    <router-link to="/sign-in" class="font-bold hover:text-blue-700">
      I already have an account
    </router-link>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})
export default class SignUp extends Vue {}
</script>
