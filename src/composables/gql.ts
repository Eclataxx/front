import {
  useQuery, useMutation, provideApolloClient, useResult,
} from '@vue/apollo-composable'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import {
  queryProducts, queryProduct, queryOrders, queryOrder, queryUsers, queryUser,
} from '../apollo/queries'
import {
  postProducts, patchAddress, createOrderFromCart, patchCartProducts, patchUserRoles, patchProductStatus, patchUsers, removeProduct,
} from '../apollo/mutations'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:4000',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})
provideApolloClient(apolloClient)
// TODO: promisify, throw on error
export default {
  getUsers: async () => {
    const { result } = await useQuery(queryUsers)
    const users = await useResult(result)
    return users
  },
  getUserProduct: async (id: string) => {
    const { result } = useQuery(queryUser, { id })
    const userProduct = await useResult(result)
    return userProduct
  },
  getCart: async (id: string) => {
    const { result } = useQuery(queryUser, { id })
    const cart = await useResult(result)
    return cart
  },
  getProduct: async (id: string) => {
    const { result } = useQuery(queryProduct, { id })
    const product = await useResult(result)
    return product
  },
  getProducts: async () => {
    const { result } = useQuery(queryProducts)
    const products = await useResult(result)
    return products
  },
  getVerifiedProducts: async () => {
    const { result } = useQuery(queryUsers)
    const verifiedProduct = await useResult(result)
    return verifiedProduct
  },

  getOrders: async () => {
    const { result } = useQuery(queryOrders)
    const orders = await useResult(result)
    return orders
  },
  getOrder: async (id: string) => {
    const { result } = useQuery(queryOrder, { id })
    const order = await useResult(result)
    return order
  },
  // getToken: async () => {
  //   const { result } = useQuery()
  //   const token = await useResult(result)
  //   return token
  // },

  postProducts: async () => {
    const { mutate: newProduct } = useMutation(postProducts)
    newProduct({})
  },
  createOrderFromCart: async () => useMutation(createOrderFromCart),
  patchCartProducts: async () => useMutation(patchCartProducts),
  patchUserRoles: async () => useMutation(patchUserRoles),
  patchProductStatus: async () => useMutation(patchProductStatus),
  patchAddress: async () => useMutation(patchAddress),
  patchUsers: async () => useMutation(patchUsers),
  removeProduct: async () => useMutation(removeProduct),
}
