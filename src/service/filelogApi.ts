import request from  '@utils/request';

export async function filelogList() {
  return request({
    api: '/clientApi/filelog/list',
    disableCommonSuccessHandler: true,
  })
}
