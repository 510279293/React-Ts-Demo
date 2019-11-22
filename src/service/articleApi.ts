import request from  '@utils/request';

export async function articleList() {
  return request({
    api: '/clientApi/article/list',
    disableCommonSuccessHandler: true,
  })
}

export async function articleHot() {
  return request({
    api: '/clientApi/article/hot',
    disableCommonSuccessHandler: true,
  })
}