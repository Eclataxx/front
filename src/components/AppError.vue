<template>
  <div class="flex flex-col items-center justify-center">
    <h1 class="text-3xl text-gray-900">Oops, something's broken !</h1>
    <span class="text-base text-gray-700">The page you are trying to display is broken.</span>
    <CustomButton
      to="/"
      class="bg-gray-800 text-md hover:bg-gray-700 text-gray-100 mt-4"
    >
      Return to home page
    </CustomButton>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CustomButton from './CustomButton.vue';

@Options({
  components: {
    CustomButton,
  },
})

export default class AppError extends Vue {}
</script>
