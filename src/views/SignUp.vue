<template>
  <div class="sign-up pt-16 lg:pt-6">
    <div class="bg-white flex flex-col border border-gray-400 p-4 rounded-sm">
      <h1 class="text-2xl mb-2">Create an account</h1>
      <FormError class="hidden"><span id="form-error-label"></span></FormError>
      <Vuemik
        class="flex flex-col text-left"
        :initialValues="{
          username: '',
          gender: 0,
          birthday: '',
          email: '',
          password: '',
          confirmPassword: '',
        }"
        :onSubmit="onSubmit"
        v-slot="{ handleSubmit }"
      >
        <div class="flex flex-col my-1">
          <label for="lastname">Username</label>
          <Field
            class="bg-gray-200 p-1"
            name="username"
            component="input"
            type="text"
          />
        </div>

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
          <label for="gender">Gender</label>
          <Field class="bg-gray-200 p-1" name="gender" component="select">
            <option value="0"></option>
            <option value="1">Male</option>
            <option value="2">Female</option>
          </Field>
        </div>

        <div class="flex flex-col my-1">
          <label for="birthdate">Birthdate</label>
          <Field
            class="bg-gray-200 p-1"
            name="birthdate"
            component="input"
            type="date"
          />
        </div>

        <div class="flex flex-col lg:flex-row lg:items-center w-full my-1">
          <div class="flex flex-col mr-4 w-full mb-1 lg:mb-0">
            <label for="password">Password</label>
            <Field
              class="bg-gray-200 p-1"
              name="password"
              component="input"
              type="password"
            />
          </div>
          <div class="flex flex-col mr-4 w-full mt-1 lg:mt-0">
            <label for="confirmPassword">Confirm your password</label>
            <Field
              class="bg-gray-200 p-1"
              name="confirmPassword"
              component="input"
              type="password"
            />
          </div>
        </div>

        <Field
          class="bg-green-500 hover:bg-green-400 text-white rounded-sm p-1 mt-2 cursor-pointer"
          name="submit"
          component="input"
          type="submit"
          @click="handleSubmit"
        />
      </Vuemik>
      <router-link
        to="/sign-in"
        class="mt-2 hover:underline hover:text-blue-700"
      >
        I already have an account
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { useToast } from 'vue-toastification';
import { Field, Vuemik } from 'vuemik';
import * as axiosService from '../services/axiosMethods';
import { UserModel, ErrorModel } from '../models';
import useBackend from '../composables/useBackend';

@Options({
  components: {
    Field,
    Vuemik,
  },
})
export default class SignUp extends Vue {
  backend = setup(() => useBackend());

  showToast(message: string, error: boolean): void {
    const toast = useToast();
    if (error) {
      toast.error(message);
    } else {
      toast.success(message);
    }
  }

  async created() {
    await this.backend.get(localStorage.getItem('apiUrl') as string);
  }

  onSubmit(userData: UserModel) {
    const { postUsers } = this.backend.api.methods;
    postUsers(userData)
      .then(() => {
        this.showToast('You are now signed up!', false);
        this.$router.push('/sign-in');
      })
      .catch(() => {
        this.showToast('An error occurred', true);
      });
  }
}
</script>

<style scoped>
.sign-up {
  max-width: 900px;
  margin: auto;
}
</style>
