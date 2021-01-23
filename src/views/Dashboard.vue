<template>
  <div class="dashboard text-left">
    <h1 class="text-3xl mb-4">Dashboard</h1>
    <div v-if="productsLoaded"
      class="order-card flex flex-col rounded-sm border border-gray-400 mb-4"
    >
      <div class="flex bg-gray-200 justify-between p-4 font-bold">
        Requests for sale
      </div>
      <div
        class="flex flex-col justify-between
        ordered-product-card p-4 transition duration-300 items-start border-t"
      >
        <span class="text-sm mb-2 text-gray-600">Showing {{ products.length }} entries</span>
        <table class="border-collapse text-sm">
          <thead>
            <tr>
              <th colspan="1" width="100"></th>
              <th colspan="1" width="150">Product name</th>
              <th colspan="1" width="80">Price</th>
              <th colspan="1" width="100">Seller name</th>
              <th colspan="1" width="200">Seller notes</th>
              <th colspan="1" width="1"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="!products.length">
              <td colspan="6" class="text-center">Nothing to show.</td>
            </tr>
            <tr v-for="product in products" :key="product.id" class="hover:bg-gray-100">
              <td><img src="/images/iphone.jpg" /></td>
              <td>{{ product.name }}</td>
              <td>{{ product.price }}</td>
              <td>{{ product.submittedBy.username }}</td>
              <!-- eslint-disable-next-line max-len -->
              <td :title="product.description" class="seller-note">
                <span>{{ product.description }}</span>
              </td>
              <td>
                <div class="flex justify-between">
                  <CustomButton
                    url="dazd"
                    @click.prevent
                    class="bg-green-500 hover:bg-green-400 text-white text-base"
                  >
                    <span class="text-sm">Accept</span>
                  </CustomButton>
                  <CustomButton
                    url="dazd"
                    @click.prevent
                    class="bg-red-500 hover:bg-red-400 text-white text-base"
                  >
                    <span class="text-sm">Deny</span>
                  </CustomButton>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-if="usersLoaded"
      class="flex flex-col rounded-sm border border-gray-400 mb-4"
    >
      <div class="flex bg-gray-200 justify-between p-4 font-bold">
        Manage users
      </div>
      <div
        class="flex flex-col justify-between p-4 transition duration-300 items-start border-t"
      >
        <span class="text-sm mb-2 text-gray-600">Showing {{ users.length }} entries</span>
        <table class="border-collapse text-sm w-full">
          <thead>
            <tr>
              <th colspan="1" width="80">User ID</th>
              <th colspan="1" width="">Username</th>
              <th colspan="1" width="">Email</th>
              <th colspan="1" width="400">Products for sale</th>
              <th colspan="1" width="">Role</th>
              <th colspan="1" width="100"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="!products.length">
              <td colspan="6" class="text-center">Nothing to show.</td>
            </tr>
            <tr v-for="user in users" :key="user.id" class="hover:bg-gray-100">
              <td>{{ user.id }}</td>
              <td>{{ user.username }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.products.map((product) => product.name).join(', ') }}</td>
              <td>{{ user.roles.join(', ') }}</td>
              <td>
                <CustomButton
                    url="dazd"
                    @click.prevent
                    class="bg-green-500 hover:bg-green-400 text-white text-base"
                  >
                    <span class="text-sm">Update</span>
                </CustomButton>
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
import CustomButton from '../components/CustomButton.vue';
import * as axiosService from '../services/axiosMethods';
import { ProductModel, UserModel } from '../models';

@Options({
  components: {
    CustomButton,
  },
})
export default class Dashboard extends Vue {
  products: ProductModel[] = [];

  users: UserModel[] = [];

  productsLoaded: boolean = false;

  usersLoaded: boolean = false;

  created() {
    axiosService
      .get<{ 'hydra:member': ProductModel[] }>('/products')
      .then((res) => {
        this.products = res.data['hydra:member'];
        this.productsLoaded = true;
      });

    axiosService
      .get<{ 'hydra:member': UserModel[] }>('/users')
      .then((res) => {
        this.users = res.data['hydra:member'];
        this.usersLoaded = true;
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

.dashboard {
  padding-top: 5rem;
}

.seller-note span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
</style>
