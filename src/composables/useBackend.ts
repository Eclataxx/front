import { UseQueryReturn } from '@vue/apollo-composable'
import { AxiosResponse } from 'axios'
import gqlMethods from './gql'
import apiPlatformMethods from './api-platform'

type method<T> = (...args: any) => T;
type MethodDict<T> = Record<string, method<T>>

interface State {
    methods: MethodDict<Promise<any> >;
}

export default () => {
  const api: State = { methods: {} }

  async function get(apiName: string) {
    console.log('get', apiName)
    api.methods = apiPlatformMethods;
  }

  return {
    api,
    get,
  }
}
