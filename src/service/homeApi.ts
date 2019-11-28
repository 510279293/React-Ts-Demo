import request from  '@utils/request';

export async function userInfo() {
  return request({
    api: '/clientApi/users/info',
    disableCommonSuccessHandler: true,
    // method: 'POST'
  })
}
