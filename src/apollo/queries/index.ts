import gql from 'graphql-tag'

export const queryProducts = gql`
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
export const queryProduct = gql`
query Product($id: string) {
    products(id: $id) {
        id
        name
        price
        status
        stock
    }   
}
`
export const queryUsers = gql`
query Users {
    user {
        id
        email
        username
        roles
        password
        cart
        address
        orders {
            id
            price
            date
            status
            products {
                id 
                name
            }
        }
        products {
            id
            name
            price
            status
            stock
            validatedBy
            carts
        }
    }
}
`
export const queryUser = gql`
query User($id: ID!) {
    user(id: $id) {
        id
        email
        username
        roles
        password
        cart
        address
        orders {
            id
            price
            date
            status
            products {
                id 
                name
            }
        }
        products {
            id
            name
            price
            status
            stock
            validatedBy
            carts
        }
    }
}
`
export const queryOrders = gql`
query Orders {
    orders {
        id
        price
        date
        status
        products {
            id
            name
        }
    }
}
`
export const queryOrder = gql`
query Orders($id: string) {
    orders(id: $id) {
        id
        price
        date
        status
        products {
            id
            name
        }
    }
}
`
