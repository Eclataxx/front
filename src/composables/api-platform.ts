import * as axiosService from '../services/axiosMethods';
import { UserModel, ProductModel } from '../models';

const register = (user: UserModel) => axiosService.post<UserModel>('/users', user)
const getProducts = () => axiosService.get<{ 'hydra:member': ProductModel[] }>('/products')

export default {
  register,
  getProducts,
}
