<template>
  <div class="sign-up pt-16 lg:pt-6">
    <div v-if="loaded" class="bg-white flex flex-col border border-gray-400 p-4 rounded-sm">
      <h1 class="text-2xl mb-2">Your address</h1>
      <Vuemik
        class="flex flex-col text-left"
        :initialValues="{
          city: address.city,
          country: address.country,
          postalCode: address.postalCode,
          streetAddress: address.streetAddress,
          additionalStreetAddress: address.additionalStreetAddress,
        }"
        :onSubmit="onSubmit"
        v-slot="{ handleSubmit }"
      >
        <div class="flex flex-col my-1">
          <label for="city">City</label>
          <Field
            class="bg-gray-200 p-1"
            name="city"
            component="input"
            type="text"
          />
        </div>

        <div class="flex flex-col lg:flex-row lg:items-center w-full my-1">
          <div class="flex flex-col mr-4 w-full mb-1 lg:mb-0">
            <label for="country">Country</label>
            <Field
              class="bg-gray-200 p-1"
              name="country"
              component="input"
              type="text"
            />
          </div>
          <div class="flex flex-col mr-4 w-full mt-1 lg:mt-0">
            <label for="postalCode">Postal code</label>
            <Field
              class="bg-gray-200 p-1"
              name="postalCode"
              component="input"
              type="text"
            />
          </div>
        </div>

        <div class="flex flex-col lg:flex-row lg:items-center w-full my-1">
          <div class="flex flex-col mr-4 w-full mb-1 lg:mb-0">
            <label for="streetAddress">Street</label>
            <Field
              class="bg-gray-200 p-1"
              name="streetAddress"
              component="input"
              type="text"
            />
          </div>
          <div class="flex flex-col mr-4 w-full mt-1 lg:mt-0">
            <label for="additionalStreetAddress">Additional street information</label>
            <Field
              class="bg-gray-200 p-1"
              name="additionalStreetAddress"
              component="input"
              type="text"
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
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { useToast } from 'vue-toastification';
import { Field, Vuemik } from 'vuemik';
import * as axiosService from '../services/axiosMethods';
import { AddressModel, UserModel } from '../models';

@Options({
  components: {
    Field,
    Vuemik,
  },
})
export default class SignUp extends Vue {
  address: AddressModel | null = null;

  loaded: boolean = false;

  showToast(message: string, error: boolean): void {
    const toast = useToast();
    if (error) {
      toast.error(message);
    } else {
      toast.success(message);
    }
  }

  onSubmit(addressData: AddressModel) {
    const { user } = this.$store.state;
    if (user) {
      const addressIri = this.$store.state.user.address['@id'];
      axiosService.patch<AddressModel>(`${addressIri}`, addressData, {
        headers: {
          'Content-Type': 'application/merge-patch+json',
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
      })
        .then(() => {
          this.showToast('Your address has been updated.', false);
          return true;
        })
        .catch(() => {
          this.showToast('An error occurred.', true);
          return false;
        });
    }
  }

  created() {
    const { user } = this.$store.state;
    if (user) {
      this.address = user.address;
      this.loaded = true;
    }
  }
}
</script>

<style scoped>

</style>
