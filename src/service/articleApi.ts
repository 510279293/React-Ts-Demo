import request from  '@utils/request';

export async function articleList() {
  return request({
    api: '/clientApi/art/list',
    disableCommonSuccessHandler: true,
    method: 'POST',
  })
}

export async function articleHot() {
  return request({
    api: '/clientApi/article/hot',
    disableCommonSuccessHandler: true,
  })
}