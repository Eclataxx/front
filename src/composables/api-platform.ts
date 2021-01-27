import * as axiosService from '../services/axiosMethods';
import {
  UserModel, ProductModel,
  CartModel, TokenModel,
  TokenErrorModel, OrderModel,
  AddressModel,
} from '../models';

const register = async (user: UserModel) => axiosService.post<UserModel>('/users', user)
const getProducts = async () => axiosService.get<{ 'hydra:member': ProductModel[] }>('/products')

const getVerifiedProducts = async (name: string): Promise<ProductModel[] | []> => {
  if (typeof name === 'string' || name === undefined) {
    const path = name && name !== '' ? `/products?status=VERIFIED&name=${name}` : '/products?status=VERIFIED';
    const res = await axiosService.get<{ 'hydra:member': ProductModel[] }>(path)
    if (res) {
      return res.data['hydra:member'];
    }
    return [];
  }
  return [];
}

const getProduct = async (productId: string): Promise<ProductModel> => {
  const res = await axiosService.get<ProductModel>(`/products/${productId}`);
  return res.data;
}

const getCart = async (userId: string) => axiosService.get<CartModel>(`/users/${userId}/cart`);
const createOrderFromCart = async (userIri: string) => axiosService.post(`${userIri}/order`, {});
const patchCartProducts = async (url: string, products: string[]) => axiosService.patch<{ products: string[] }>(`${url}`, { products }, {
  headers: {
    'Content-Type': 'application/merge-patch+json',
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
  },
});
const getUsers = async () => axiosService
  .get<{ 'hydra:member': UserModel[] }>('/users');
const patchUserRoles = async (url: string, userRoles: string[]) => axiosService.patch<{ roles: string[] }>(`${url}`, { roles: userRoles }, {
  headers: {
    'Content-Type': 'application/merge-patch+json',
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
  },
});
const patchProductStatus = async (url: string, productStatusValue: string) => axiosService
  .patch<{ status: string }>(`${url}`, { status: productStatusValue }, {
    headers: {
      'Content-Type': 'application/merge-patch+json',
    },
  });
const getUserOrders = async (userId: string) => axiosService.get<{ 'hydra:member': OrderModel[] }>(`/users/${userId}/orders`);
const patchAddress = async (addressIri: string, addressData: AddressModel) => axiosService
  .patch<AddressModel>(`${addressIri}`, addressData, {
    headers: {
      'Content-Type': 'application/merge-patch+json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  });
const getToken = async (userData: UserModel) => axiosService
  .post<UserModel | TokenErrorModel | TokenModel>('/authentication_token', userData);
const postUsers = async (userData: UserModel) => axiosService.post<UserModel>('/users', userData);
const getUserProducts = async (userId: string) => axiosService.get<{ 'hydra:member': ProductModel[] }>(`/users/${userId}/products`);
const removeProduct = async (url: string) => axiosService.remove<ProductModel>(`${url}`);
const postProducts = async (product: ProductModel) => axiosService.post<ProductModel>('/products', product);

export default {
  register,
  getProducts,
  getProduct,
  getVerifiedProducts,
  getCart,
  createOrderFromCart,
  patchCartProducts,
  getUsers,
  patchUserRoles,
  patchProductStatus,
  getUserOrders,
  patchAddress,
  getToken,
  postUsers,
  getUserProducts,
  removeProduct,
  postProducts,
}
