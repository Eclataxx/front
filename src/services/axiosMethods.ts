import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import router from '../router';
import store from '../store';
import getBackendUrl from '../lib/BackendUrl';
import { UserModel } from '../models';

const isJWTNeeded = (path: string, method: string): boolean => {
  const anonymousPaths = [
    new RegExp('^(/users)$'),
    new RegExp('^/products'),
    new RegExp('^/authentication_token'),
  ];

  const result = anonymousPaths.map((anonymousPath) => {
    if (anonymousPath.test(path)) {
      if (anonymousPath.test(path) && method === 'POST') {
        return true;
      }
      return false;
    }
    return true;
  });
  return !result.includes(false);
};

const defaultConfig = (path: string, method: string) => {
  const isAuthorizationNeeded = isJWTNeeded(path, method);
  const jwt = localStorage.getItem('jwt');

  return {
    headers: {
      Authorization: isAuthorizationNeeded && jwt ? `Bearer ${jwt}` : undefined,
    },
  };
};

export async function get<T>(path: string, config?: AxiosRequestConfig):
  Promise<AxiosResponse<T>> {
  const backendUrl = await getBackendUrl();
  return axios.get(`${backendUrl}${path}`, config || defaultConfig(path, 'GET'));
}

export async function whoIsLoggedIn(config?: AxiosRequestConfig):
  Promise<AxiosResponse<UserModel> | null> {
  const jwt = localStorage.getItem('jwt');
  if (!jwt) {
    return null;
  }
  const jwtPayload: UserModel = JSON.parse(Buffer.from(jwt.split('.')[1], 'base64').toString('ascii'));
  return get<UserModel>(`/users/${jwtPayload.id}`, config);
}

export async function post<T>(
  path: string,
  body: T,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> {
  const backendUrl = await getBackendUrl();
  return axios.post(`${backendUrl}${path}`, body, config || defaultConfig(path, 'POST'));
}

export async function remove<T>(
  path: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<any>> {
  const backendUrl = await getBackendUrl();
  return axios.delete(`${backendUrl}${path}`, config || defaultConfig(path, 'DELETE'));
}

export async function put<T>(
  path: string,
  body: T,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<any>> {
  const backendUrl = await getBackendUrl();
  return axios.put(`${backendUrl}${path}`, body, config || defaultConfig(path, 'PUT'));
}

export async function patch<T>(
  path: string,
  body: T,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<any>> {
  const backendUrl = await getBackendUrl();
  return axios.patch(`${backendUrl}${path}`, body, config || defaultConfig(path, 'PATCH'));
}

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.request;
    if (status === 401) {
      store.dispatch('logout');
      router.push('/sign-in');
      return Promise.reject(error);
    }
    if (status === 500 || status === 404 || status === 403) {
      return Promise.reject(error);
    }
    return null;
  },
);
