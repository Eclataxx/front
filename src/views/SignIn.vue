<template>
  <div class="sign-in pt-16 lg:pt-6">
    <div class="bg-white flex flex-col border border-gray-400 p-4 rounded-sm">
      <h1 class="text-2xl mb-2">Sign In</h1>
      <FormError class="hidden"><span id="form-error-label"></span></FormError>
      <Vuemik
        class="flex flex-col text-left"
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
          <Field
            class="bg-gray-200 p-1 my-1"
            name="password"
            component="input"
            type="password"
          />
        </div>
        <Field
          class="bg-green-500 hover:bg-green-400 text-white rounded-sm p-1 mt-1 cursor-pointer"
          name="submit"
          component="input"
          type="submit"
          @click="handleSubmit"
        />
      </Vuemik>
      <router-link
        to="/sign-up"
        class="mx-auto mt-2 hover:text-blue-700 hover:underline"
      >
        Create an account
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Field, Vuemik } from 'vuemik';
import { UserModel, TokenErrorModel, TokenModel } from '../models';
import * as axiosService from '../services/axiosMethods';
import FormError from '../components/FormError.vue';

@Options({
  components: {
    Field,
    Vuemik,
    FormError,
  },
})
export default class SignIn extends Vue {
  onSubmit(userData: UserModel) {
    axiosService
      .post<UserModel | TokenErrorModel | TokenModel>('/authentication_token', userData)
      .then(async (res) => {
        const data = res.data as TokenModel;
        localStorage.setItem('jwt', data.token);
        const response = await axiosService.whoIsLoggedIn();
        if (response) {
          this.$store.dispatch('user', response.data);
          this.$router.push('/');
        }
      })
      .catch((error) => {
        const errorData = error.response.data as TokenErrorModel;
        const formErrorLabel = document.getElementById(
          'form-error-label',
        ) as HTMLSpanElement;
        (formErrorLabel.parentNode as HTMLElement).classList.remove('hidden');
        formErrorLabel.textContent = errorData.message;
      });
  }
}
</script>

<style scoped>
.sign-in {
  max-width: 600px;
  margin: auto;
}
</style>
