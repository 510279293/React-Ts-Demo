import request from  '@utils/request';

export async function userInfo() {
  return request({
    api: '/clientApi/user/info',
    disableCommonSuccessHandler: true,
  })
}