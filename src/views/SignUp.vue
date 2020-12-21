<template>
  <div class="sign-up pt-16 lg:pt-6">
    <div class="bg-white flex flex-col border border-gray-400 p-4 rounded-sm">
      <h1 class="text-2xl mb-2">Create an account</h1>
      <Vuemik
        class="flex flex-col text-left"
        :initialValues="{
          firstname: '',
          lastname: '',
          gender: 1,
          birthday: '',
          email: '',
          password: '',
          confirmPassword: '',
        }"
        :onSubmit="onSubmit"
        v-slot="{ handleSubmit }"
      >
        <div class="flex w-full my-1 flex-col lg:flex-row lg:items-center">
          <div class="flex flex-col mr-4 w-full mb-1 lg:mb-0">
            <label for="firstname">Firstname</label>
            <Field
              class="bg-gray-200 p-1"
              name="firstname"
              component="input"
              type="text"
            />
          </div>
          <div class="flex flex-col w-full mt-1 lg:mt-0">
            <label for="lastname">Lastname</label>
            <Field
              class="bg-gray-200 p-1"
              name="lastname"
              component="input"
              type="text"
            />
          </div>
        </div>

        <div class="flex flex-col my-1">
          <label for="gender">Gender</label>
          <Field class="bg-gray-200 p-1" name="gender" component="select">
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

        <div class="flex flex-col my-1">
          <label for="email">Email</label>
          <Field
            class="bg-gray-200 p-1"
            name="email"
            component="input"
            type="text"
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
          class="
            bg-green-500 hover:bg-green-400 text-white rounded-sm
            p-1 mt-2 cursor-pointer
          "
          name="submit"
          component="input"
          type="submit"
          @click="handleSubmit"
        />
      </Vuemik>
      <router-link to="/sign-in" class="mt-2 hover:underline hover:text-blue-700">
        I already have an account
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
export default class SignUp extends Vue {
  onSubmit(e: Event) {
    console.log(e);
  }
}
</script>

<style scoped>
  .sign-up {
    max-width: 900px;
    margin: auto;
  }
</style>
