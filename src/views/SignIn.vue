<template>
  <div class="sign-in pt-16 lg:pt-6">
    <div class="bg-white flex flex-col border border-gray-400 p-4 rounded-sm">
      <h1 class="text-2xl mb-2">Sign In</h1>
        <Vuemik class="flex flex-col text-left"
          :initialValues="{
            email: '',
            password: '',
          }"
          :onSubmit="onSubmit"
          v-slot="{ handleSubmit }"
        >
          <div class="flex flex-col my-1">
            <label for="email">Email</label>
            <Field
              class="bg-gray-200 p-1"
              name="email"
              component="input"
              type="text"
            />
          </div>

          <div class="flex flex-col my-1">
            <label for="email">Password</label>
            <Field class="bg-gray-200 p-1 my-1"
              name="password" component="input" type="password"
            />
          </div>
          <Field
            class="
              bg-green-500 hover:bg-green-400 text-white rounded-sm
              p-1 mt-1 cursor-pointer
            "
            name="submit"
            component="input"
            type="submit"
            @click="handleSubmit"
          />
        </Vuemik>
        <router-link to="/sign-up" class="mx-auto mt-2 hover:text-blue-700 hover:underline">
          Create an account
        </router-link>
      </div>
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
export default class SignIn extends Vue {
  onSubmit(e: Event) {
    console.log(e);
  }
}
</script>

<style scoped>
  .sign-in {
    max-width: 600px;
    margin: auto;
  }
</style>
