import gql from 'graphql-tag'

export const postProducts = gql`
mutation createProduct($product: ProductCreateInput!) {
    createProduct(data: $product) {
        id
    }
}
`

export const postUsers = gql`
mutation createUser($user: UserCreateInput!) {
    createUser(data: $user) {
        id
    }
}
`
export const createOrderFromCart = gql`
mutation
`
export const patchCartProducts = gql`
mutation patch() {
    updateCart
}
`
export const patchUserRoles = gql`
mutation patch() {
    updateUser() {}
}`
export const patchProductStatus = gql`
mutation patch() {
    updateProduct () {}
}
`
export const patchUsers = gql`
mutation patch() {
    updateUser() {}
}
`
export const patchAddress = gql`
mutation patch() {
    updateAddress() {}
}
`
export const removeProduct = gql`
mutation delete() {
   deleteProduct() {} 
}
`
