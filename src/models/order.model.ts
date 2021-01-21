import UserModel from './user.model';
import ProductModel from './product.model';

export default interface OrderModel {
  '@id': string,
  '@type': string,
  id: number,
  price: number,
  date: string,
  status: string,
  associatedUser: UserModel,
  products: ProductModel[],
};
