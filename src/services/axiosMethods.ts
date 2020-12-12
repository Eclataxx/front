import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import getBackendUrl from '../lib/BackendUrl';

export async function get<T>(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
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
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<any>> {
  const backendUrl = await getBackendUrl();
  return axios.delete(`${backendUrl}${path}`, config);
}

export async function put<T>(
  path: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<any>> {
  const backendUrl = await getBackendUrl();
  return axios.put(`${backendUrl}${path}`, config);
}

export async function patch<T>(
  path: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<any>> {
  const backendUrl = await getBackendUrl();
  return axios.patch(`${backendUrl}${path}`, config);
}
