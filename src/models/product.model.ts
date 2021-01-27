import UserModel from './user.model';

export default interface ProductModel {
  '@id': string;
  description: string;
  id: number;
  name: string;
  // orders: [];
  price: number;
  status: string;
  stock: number;
  submittedBy: UserModel;
  validatedBy: UserModel;
  carts: string[];
};
