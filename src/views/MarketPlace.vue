<template>
  <Vuemik
    class="flex flex-col"
    :initialValues="{
        name,
        description,
        notes,
        stock,
        price
    }"
    :onSubmit="(e) => console.log(e)"
    v-slot="{ handleSubmit }"
  >
    <label for="name">Product Name</label>
    <Field class="bg-gray-200 p-1 my-1" name="name" component="input" type="text" />

    <label for="description">Description</label>
    <Field class="bg-gray-200 p-1 my-1" name="description" component="input" type="text" />

    <label for="notes">Vendor Notes</label>
    <Field class="bg-gray-200 p-1 my-1" name="notes" component="input" type="text" />

    <label for="stock">Stock</label>
    <Field class="bg-gray-200 p-1 my-1" name="stock" component="input" type="number" />

    <label for="price">Price</label>
    <Field class="bg-gray-200 p-1 my-1" name="price" component="input" type="number" />
    <Field
      class="bg-green-500 hover:bg-green-400 text-white rounded-sm
        p-1 mt-1 cursor-pointer"
      name="submit"
      component="input"
      type="submit"
      @click="handleSubmit"
    />
  </Vuemik>
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

export default class MarketPlace extends Vue {
  name: String = ''

  description: String = ''

  notes: String = ''

  stock: String = ''

  price: String = ''
}
</script>
