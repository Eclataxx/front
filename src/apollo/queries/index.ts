import gql from 'graphql-tag'

export const gqlProducts = gql`
query Products {
    products {
        id
        name
        price
        status
        stock
    }
}
`
export const gqlUsers = gql`
query Users {
  users {
    id
    address {
      id
    }
    orders {  id }
    products {  name }
  }
}
`
