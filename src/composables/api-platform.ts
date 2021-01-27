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
const createOrderFromCart = async (userId: string) => axiosService.post(`/users/${userId}/order`, {});
const patchCartProducts = async (id: string, products: string[]) => axiosService
  .patch<{ products: string[] }>(`/carts/${id}`, { products }, {
    headers: {
      'Content-Type': 'application/merge-patch+json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  });
const getUsers = async () => axiosService
  .get<{ 'hydra:member': UserModel[] }>('/users');
const patchUserRoles = async (id: string, userRoles: string[]) => axiosService
  .patch<{ roles: string[] }>(`/users/${id}`, { roles: userRoles }, {
    headers: {
      'Content-Type': 'application/merge-patch+json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  });
const patchProductStatus = async (id: string, productStatusValue: string) => axiosService
  .patch<{ status: string }>(`/products/${id}`, { status: productStatusValue }, {
    headers: {
      'Content-Type': 'application/merge-patch+json',
    },
  });
const getUserOrders = async (userId: string) => axiosService.get<{ 'hydra:member': OrderModel[] }>(`/users/${userId}/orders`);
const patchAddress = async (addressId: string, addressData: AddressModel) => axiosService
  .patch<AddressModel>(`/addresses/${addressId}`, addressData, {
    headers: {
      'Content-Type': 'application/merge-patch+json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  });
const getToken = async (userData: UserModel) => axiosService
  .post<UserModel | TokenErrorModel | TokenModel>('/authentication_token', userData);
const postUsers = async (userData: UserModel) => axiosService.post<UserModel>('/users', userData);
const getUserProducts = async (userId: string) => axiosService.get<{ 'hydra:member': ProductModel[] }>(`/users/${userId}/products`);
const removeProduct = async (id: string) => axiosService.remove<ProductModel>(`/products/${id}`);
const postProducts = async (product: ProductModel) => axiosService.post<ProductModel>('/products', product);

export default {
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
