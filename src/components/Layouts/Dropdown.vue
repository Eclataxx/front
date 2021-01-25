<template>
  <div
    class="dropdown border border-gray-400 w-full flex flex-col text-left
    rounded-sm bg-white text-gray-900 absolute"
  >
    <router-link
      v-if="user.roles.includes('ROLE_ADMIN')"
      class="py-2 px-4 hover:bg-gray-300 transition duration-300 flex"
      to="/admin/dashboard"
    >
      <img class="mr-2" src="/images/dashboard.svg" />
      <span>Dashboard</span>
    </router-link>
    <router-link
      to="/store"
      v-if="user.roles.includes('ROLE_SELLER')"
      class="py-2 px-4 hover:bg-gray-300 transition duration-300 flex"
    >
      <img class="mr-2" src="/images/store.svg" />
      <span>Store</span>
    </router-link>
    <router-link
      to="/orders"
      class="py-2 px-4 hover:bg-gray-300 transition duration-300 flex"
    >
      <img class="mr-2" src="/images/shopping_bag.svg" />
      <span>Orders</span>
    </router-link>
    <router-link
      v-if="user"
      to="/cart"
      class="py-2 px-4 hover:bg-gray-300 transition duration-300 flex"
    >
      <img class="mr-2" src="/images/shopping_cart.svg" />
      <span>Cart</span>
    </router-link>
    <router-link
      v-if="user"
      to="/settings"
      class="py-2 px-4 hover:bg-gray-300 transition duration-300 flex"
    >
      <img class="mr-2" src="/images/settings.svg" />
      <span>Settings</span>
    </router-link>
    <div
      @click="logout"
      class="cursor-pointer py-2 px-4 hover:bg-gray-300 transition duration-300 flex"
    >
      <img class="mr-2" src="/images/exit.svg" />
      <span>Logout</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    user: Object,
  },
})

export default class Dropdown extends Vue {
  logout(): void {
    localStorage.removeItem('jwt');
    this.$store.dispatch('user', null);
    this.$router.push('/sign-in');
  }
}
</script>

<style lang="scss" scoped>
.dropdown-trigger:hover {
  .dropdown {
    display: block;
  }
}

.dropdown {
  display: none;
  box-shadow: 0 0.4rem 0.6rem rgba(0,0,0,.1);
}
</style>
