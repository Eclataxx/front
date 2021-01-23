import { CartModel, ProductModel, OrderModel } from '.';

export default interface UserModel {
  '@id': string;
  '@type': string;
  id: number;
  username: string;
  email: string;
  roles: string[];
  password: string;
  products: ProductModel[];
  orders: OrderModel[];
  cart: CartModel;
};
