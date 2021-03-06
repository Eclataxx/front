import { UserModel, ProductModel } from '.';

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
