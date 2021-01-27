import {
  useQuery, useMutation, provideApolloClient, useResult,
} from '@vue/apollo-composable'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import {
  UserModel, ProductModel,
  CartModel, TokenModel,
  TokenErrorModel, OrderModel,
  AddressModel,
} from '../models';
import {
  queryProducts, queryProduct, queryUsers, queryUser,
} from '../apollo/queries'
import {
  postUser, postProducts, patchAddress, createOrderFromCart, patchCartProducts, patchUserRoles, patchProductStatus, removeProduct,
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

export default {
  register: async (user: UserModel) => {
    const { mutate: createUser } = useMutation(postUser)
    return new Promise((resolve, reject) => resolve(createUser({ user })))
  },
  getProducts: async () => {
    const { result } = useQuery(queryProducts)
    const products = useResult(result)
    return new Promise((resolve, reject) => resolve({ products }))
  },
  getVerifiedProducts: async () => {
    const { result } = useQuery(queryProducts)
    const products = useResult(result)
    return new Promise((resolve, reject) => ({ data: products }))
  },
  getProduct: async (id: string) => {
    const { result } = useQuery(queryProduct, { id })
    const product = await useResult(result)
    return product
  },
  getCart: async (id: string) => {
    const { result } = useQuery(queryUser, { id })
    const cart = await useResult(result)
    return cart
  },

  createOrderFromCart: async () => useMutation(createOrderFromCart),
  patchCartProducts: async (id: string, products: string[]) => {
    const { mutate: updateCart } = useMutation(patchCartProducts)
    return updateCart({ products })
  },

  getUsers: async () => {
    const { result } = await useQuery(queryUsers)
    const users = await useResult(result)
    return users
  },

  patchUserRoles: async () => {
    const { mutate: updateUser } = useMutation(patchUserRoles)
    return updateUser({})
  },
  patchProductStatus: async () => {
    const { mutate: updateProduct } = useMutation(patchProductStatus)
    return updateProduct({})
  },
  getUserOrders: async (id: string) => {
    const { result } = useQuery(queryUser, { id })
    const userOrder = await useResult(result)
    return userOrder
  },

  patchAddress: async () => {
    const { mutate: updateAddress } = useMutation(patchAddress)
    return updateAddress({})
  },
  getToken: async () => {
    const { result } = useQuery()
    const token = await useResult(result)
    return token
  },
  postUsers: async (user: UserModel) => {
    const { mutate: createUser } = useMutation(postUser)
    return createUser({ user })
  },

  getUserProducts: async (id: string) => {
    const { result } = useQuery(queryUser, { id })
    const userProduct = await useResult(result)
    return userProduct
  },
  removeProduct: async () => {
    const { mutate: deleteProduct } = useMutation(removeProduct)
    return deleteProduct({})
  },
  postProducts: async (product: ProductModel) => {
    const { mutate: newProduct } = useMutation(postProducts)
    return newProduct({ product })
  },
}
