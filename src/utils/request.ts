import axios from '@plugins/axios';
import { trim, get } from 'lodash';
import { requestError } from './errorHandler';
import successHandler from './successHandler';

// const baseURL = process.env;
// console.log(baseURL);

export interface RequestOptions {
  api?: string;
  data?: {[key: string]: any};
  method?: 'GET' | 'POST' | 'DELETE' | 'PUT';
  headers?: { [key: string]: string};
  body?: any;
  credentials?: string;
  disableCommonErrorHandler?: true;
  disableCommonSuccessHandler?: true; // false
  codeErrorTipMsgMap?: {[key: string]: string};
  successTipMsg?: string; // "操作成功"
  successHandler?: (response: any, requestOptions: RequestOptions) => null;
  errorHandler?: (response: any, requestOptions: RequestOptions) => null;
}

export interface ResponseData {
  code?: number;
  data?: any;
  msg?: string;
}

export default function request<T>(options: RequestOptions): Promise<T> {
  const {api: requestApi = '', data } = options;
  const apiMethod: any = trim(get(trim(requestApi).match(/^.* /), 0)) || 'GET';
  const api: string = requestApi.replace(/^.* /, '');

  const newOptions: any ={
    credentials: 'include',
    method: '',
    ...options,
  }

  if(newOptions.method === 'POST' || newOptions.method === 'PUT'){
    if(!(newOptions.body instanceof FormData)){
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers,
      };
      newOptions.body = JSON.stringify(data)
    } else {
      newOptions.headers = {
        Accept: 'application/json',
        // 'Content-Type': 'multipart/form-data',
        ...newOptions.headers,
      }
    }
  }

return axios(api, newOptions)
  .then((response: any) => response.data)
  .then((source: ResponseData) => successHandler(source, newOptions))
  .catch((error: any) => requestError(error, newOptions))
}