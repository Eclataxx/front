import {
  useQuery, provideApolloClient, useResult,
} from '@vue/apollo-composable'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { gqlProducts, gqlUsers } from '../apollo/queries'

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
  getUsers: () => {
    const { result, loading } = useQuery(gqlUsers)
    const users = useResult(result, null, (data) => {
      console.log(data, 'daata')
      return data.users
    })
    const t = {
      users, result, loading,
    }
    console.log(t, 't')
    return t
  },
  // getUsers: () => useQuery(gqlUsers),
  // register: () => useQuery(gqlUsers),
  // getCart: () => {},
  // getOrders: () => {},
  // whoIsLoggedIn: () => {},
  // updateUser: () => {},
  // isLoading: () => useQueryLoading(),
}
