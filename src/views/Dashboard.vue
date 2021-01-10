<template>
  <div class="dashboard text-left">
    <h1 class="text-3xl mb-4">Dashboard</h1>
    <div
      class="order-card flex flex-col rounded-sm border border-gray-400 mb-4"
    >
      <div class="flex bg-gray-200 justify-between p-4 font-bold">
        Requests for sale
      </div>
      <div
        to="/product"
        class="flex flex-col justify-between
        ordered-product-card p-4 transition duration-300 items-start border-t"
      >
        <span class="text-sm mb-2 text-gray-600">Showing 17 entries</span>
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
            <tr v-for="index in 17" :key="index" class="hover:bg-gray-100">
              <td><img src="/images/iphone.jpg" /></td>
              <td>iPhone X 64GB - Space Gray Unlocked</td>
              <td>150</td>
              <td>Tom</td>
              <!-- eslint-disable-next-line max-len -->
              <td title="Occaecat commodo sit incididunt ipsum ex deserunt laboris. Nulla velit nulla aliqua ut aliquip ut consectetur excepteur ea. Consequat nisi irure anim labore qui labore aute. Commodo qui ut irure veniam dolor enim enim consectetur velit occaecat cillum officia eu. Occaecat commodo sit incididunt ipsum ex deserunt laboris. Nulla velit nulla aliqua ut aliquip ut consectetur excepteur ea. Consequat nisi irure anim labore qui labore aute. Commodo qui ut irure veniam dolor enim enim consectetur velit occaecat cillum officia eu. Occaecat commodo sit incididunt ipsum ex deserunt laboris. Nulla velit nulla aliqua ut aliquip ut consectetur excepteur ea. Consequat nisi irure anim labore qui labore aute. Commodo qui ut irure veniam dolor enim enim consectetur velit occaecat cillum officia eu."
                class="seller-note"
              >
                <span>Occaecat commodo sit incididunt ipsum ex deserunt laboris. Nulla
                velit nulla aliqua ut aliquip ut consectetur excepteur ea.
                Consequat nisi irure anim labore qui labore aute. Commodo qui ut
                irure veniam dolor enim enim consectetur velit occaecat cillum
                officia eu. Occaecat commodo sit incididunt ipsum ex deserunt
                laboris. Nulla velit nulla aliqua ut aliquip ut consectetur
                excepteur ea. Consequat nisi irure anim labore qui labore aute.
                Commodo qui ut irure veniam dolor enim enim consectetur velit
                occaecat cillum officia eu. Occaecat commodo sit incididunt
                ipsum ex deserunt laboris. Nulla velit nulla aliqua ut aliquip
                ut consectetur excepteur ea. Consequat nisi irure anim labore
                qui labore aute. Commodo qui ut irure veniam dolor enim enim
                consectetur velit occaecat cillum officia eu.</span>
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
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CustomButton from '../components/CustomButton.vue';

@Options({
  components: {
    CustomButton,
  },
})
export default class Dashboard extends Vue {}
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
