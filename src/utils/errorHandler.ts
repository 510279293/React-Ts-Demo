import { notification } from 'antd';
import { RequestOptions } from './request';

import STATUS_MSG from './codeMsg';
import CODE_MSG from './codeMsg';

export function requestError(error: any = {}, requestOptions: RequestOptions){
  const status = error.status;
  if(status === 401) {

  } else if (status === 403) {

  } else if (status <= 504 && status >= 500) {

  } else if (status >= 404 && status < 422) {
    notification.error({
      message: '请求错误',
      description: `请求接口 ${error.url} 不存在`
    })
    return ;
  }
  const { disableCommonSuccessHandler, errorHandler } = requestOptions;

  if (!disableCommonSuccessHandler) {
    const errortext = STATUS_MSG[error.status] || error.statusText;
    notification.error({
      message: `服务器错误 ${status}: ${error.url}`,
      description: errortext,
    })
  }

  if(errorHandler) {
    errorHandler(error, requestOptions)
  }
}

export function codeError(source: any = {}, requestOptions: RequestOptions){
  const {code, msg} = source;
  const {codeErrorTipMsgMap, disableCommonErrorHandler} = requestOptions;
  
  if(disableCommonErrorHandler) {
    return source;
  }

  const errorTipMap: any = {...CODE_MSG, ...codeErrorTipMsgMap};
  const errorMsg: string = errorTipMap[code] || msg;

  notification.error({
    message: '请求错误',
    description: errorMsg
  })

  return source;
}