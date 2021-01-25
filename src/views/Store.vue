<template>
  <div class="dashboard text-left">
    <h1 class="text-3xl mb-4">Dashboard</h1>
    <FormSuccess class="hidden"><span id="form-success-label">
      Your product has been submitted to review!
    </span></FormSuccess>
    <FormError class="hidden"><span id="form-error-label"></span></FormError>
    <div
      class="flex flex-col rounded-sm border border-gray-400 mb-4"
    >
      <div class="flex bg-gray-200 justify-between p-4 font-bold">
        Sell a new product
      </div>
      <Vuemik
        class="flex flex-col text-left border-t p-4"
        :initialValues="{
          name: '',
          price: 0,
          description: '',
        }"
        :onSubmit="onSubmit"
        v-slot="{ handleSubmit }"
      >
        <div class="flex flex-col lg:flex-row lg:items-center w-full my-1">
          <div class="flex flex-col mr-4 w-full mb-1 lg:mb-0">
            <label for="name">Product name</label>
            <Field
              class="bg-gray-200 p-1"
              name="name"
              component="input"
              type="text"
            />
          </div>
          <div class="flex flex-col mr-4 w-full mt-1 lg:mt-0">
            <label for="price">Price</label>
            <Field
              class="bg-gray-200 p-1"
              name="price"
              component="input"
              type="number"
            />
          </div>
        </div>

        <div class="flex flex-col my-1">
          <label for="description">Description</label>
          <Field class="bg-gray-200 p-1" name="description" component="textarea" />
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
    <div v-if="loaded"
      class="flex flex-col rounded-sm border border-gray-400 mb-4"
    >
      <div class="flex bg-gray-200 justify-between p-4 font-bold">
        Your products
      </div>
      <div
        class="flex flex-col justify-between
        ordered-product-card p-4 transition duration-300 items-start border-t"
      >
        <span class="text-sm mb-2 text-gray-600">Showing {{ products.length }} entries</span>
        <table class="border-collapse text-sm w-full">
          <thead>
            <tr>
              <th colspan="1" width="100"></th>
              <th colspan="1" width="150">Product name</th>
              <th colspan="1" width="80">Price</th>
              <th colspan="1" width="200">Description</th>
              <th colspan="1" width="100">Status</th>
              <th colspan="1" width="50"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="!products.length">
              <td colspan="6" class="text-center">Nothing to show.</td>
            </tr>
            <tr v-for="product in products" :key="product.id" class="hover:bg-gray-100">
              <td><img src="/images/iphone.jpg" /></td>
              <td>{{ product.name }}</td>
              <td>{{ product.price }}€</td>
              <td :title="product.description" class="seller-note">
                <span>{{ product.description }}</span>
              </td>
              <td>{{ product.status }}</td>
              <td>
                <div
                @click="removeProduct"
                class="px-4 py-2 text-center rounded-sm bg-red-500 text-sm
                hover:bg-red-400 text-white cursor-pointer"
                :data-url="product['@id']"
                >
                  Remove
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Vuemik, Field } from 'vuemik';
import CustomButton from '../components/CustomButton.vue';
import * as axiosService from '../services/axiosMethods';
import { UserModel, ProductModel, ErrorModel } from '../models';
import FormSuccess from '../components/FormSuccess.vue';
import FormError from '../components/FormError.vue';

@Options({
  components: {
    CustomButton,
    Vuemik,
    Field,
    FormSuccess,
    FormError,
  },
})

export default class Dashboard extends Vue {
  products: ProductModel[] = [];

  loaded: boolean = false;

  async created() {
    await this.getProducts();
    this.loaded = true;
  }

  async getProducts() {
    const response = await axiosService.get<{ 'hydra:member': ProductModel[] }>(`/users/${this.$store.state.user.id}/products`)
    if (response) {
      this.products = response.data['hydra:member'];
    }
  }

  removeProduct(event: { target: HTMLDivElement }): Promise<boolean> {
    return axiosService.remove<ProductModel>(`${event.target.dataset.url}`)
      .then(async () => {
        await this.getProducts();
        this.$forceUpdate();
        return true;
      })
      .catch(() => false);
  }

  onSubmit(productData: ProductModel) {
    const formErrorLabel = document.getElementById('form-error-label') as HTMLSpanElement;
    const formSuccessLabel = document.getElementById('form-success-label') as HTMLSpanElement;
    const successParent = formSuccessLabel.parentNode as HTMLElement;
    const errorParent = formErrorLabel.parentNode as HTMLElement;
    const newProduct = {
      ...productData,
      price: +productData.price,
      status: 'TO REVIEW',
      submittedBy: this.$store.state.user['@id'],
    };
    axiosService
      .post<ProductModel>('/products', newProduct)
      .then(async () => {
        if (!(Object.values(errorParent.classList).includes('hidden'))) {
          errorParent.classList.add('hidden');
        }
        successParent.classList.remove('hidden');
        await this.getProducts();
        this.$forceUpdate();
      })
      .catch((error) => {
        const errorData = error.response.data as ErrorModel;
        if (!(Object.values(successParent.classList).includes('hidden'))) {
          successParent.classList.add('hidden');
        }
        errorParent.classList.remove('hidden');
        formErrorLabel.textContent = errorData['hydra:description'] || errorData.detail;
      });
  }
}
</script>

<style lang="scss" scoped>
table img {
  max-height: 4rem;
}

table tbody tr:hover { background-color: rgb(226, 232, 240) !important; }
table tbody tr:nth-child(odd){background-color: rgb(237, 242, 247);}

table td, table th {
  border: 1px solid #ddd;
  padding: 8px;
}

.seller-note span {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>
