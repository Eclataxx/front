import ProductModel from './product.model';
import OrderModel from './order.model';

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
};
