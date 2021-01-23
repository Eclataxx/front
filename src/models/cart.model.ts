import { UserModel, ProductModel } from '.';

export default interface CartModel {
  '@id': string,
  '@type': string,
  id: number,
  price: number,
  associatedUser: UserModel,
  products: ProductModel[],
};
