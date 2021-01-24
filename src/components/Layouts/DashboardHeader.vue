<template>
  <header
    class="dashboard-header fixed w-full flex items-center bg-gray-900 z-20 text-white"
  >
    <div class="flex items-center justify-between w-full px-2">
      <router-link to="/" class="text-xl lg:text-2xl">Eclatax</router-link>
      <div class="flex">
        <div v-if="user"
        class="relative flex items-center w-full dropdown-trigger cursor-pointer py-2">
          <img src="/images/justin.png" width="32" class="rounded-full mr-2"/>
          <span>{{ user.email }}</span>
          <Dropdown :user="user" style="top: 3rem; left: 0" />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapGetters } from 'vuex';
import Dropdown from './Dropdown.vue';

@Options({
  components: {
    Dropdown,
  },
  computed: {
    ...mapGetters(['user']),
  },
})

export default class DashboardHeader extends Vue {}
</script>

<style lang="scss" scoped>
.dashboard-header {
  height: 3rem;
}

#side-menu {
  margin-top: 56px;
}

// lg
@media (min-width: 1024px) {
  #side-menu {
    padding-top: 56px;
    margin-top: 0px;
  }
}
</style>
