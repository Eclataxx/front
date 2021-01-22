import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import getBackendUrl from '../lib/BackendUrl';
import { UserModel } from '../models';

const defaultConfig = () => {
  const jwt = localStorage.getItem('jwt');
  return {
    headers: {
      Authorization: jwt ? `Bearer ${jwt}` : undefined,
    },
  };
};

export async function whoIsLoggedIn(config: AxiosRequestConfig = defaultConfig()):
  Promise<AxiosResponse<UserModel> | null> {
  const jwt = localStorage.getItem('jwt');
  if (!jwt) {
    return null;
  }
  const jwtPayload: UserModel = JSON.parse(Buffer.from(jwt.split('.')[1], 'base64').toString('ascii'));
  const backendUrl = await getBackendUrl();
  return axios.get<UserModel>(`${backendUrl}/users/${jwtPayload.id}`, config);
}

export async function get<T>(path: string, config: AxiosRequestConfig = defaultConfig()):
  Promise<AxiosResponse<T>> {
  const backendUrl = await getBackendUrl();
  return axios.get(`${backendUrl}${path}`, config);
}

export async function post<T>(
  path: string,
  body: T,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> {
  const backendUrl = await getBackendUrl();
  return axios.post(`${backendUrl}${path}`, body, config);
}

export async function remove<T>(
  path: string,
  config: AxiosRequestConfig = defaultConfig(),
): Promise<AxiosResponse<any>> {
  const backendUrl = await getBackendUrl();
  return axios.delete(`${backendUrl}${path}`, config);
}

export async function put<T>(
  path: string,
  config: AxiosRequestConfig = defaultConfig(),
): Promise<AxiosResponse<any>> {
  const backendUrl = await getBackendUrl();
  return axios.put(`${backendUrl}${path}`, config);
}

export async function patch<T>(
  path: string,
  config: AxiosRequestConfig = defaultConfig(),
): Promise<AxiosResponse<any>> {
  const backendUrl = await getBackendUrl();
  return axios.patch(`${backendUrl}${path}`, config);
}
