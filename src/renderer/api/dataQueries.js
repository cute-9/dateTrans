import request from '@/utils/request'

export function listMapping(params) {
  return request({
    url: `index/listMapping`,
    method: 'post',
    params
  })
}
export function search(data) {
  return request({
    url: `query/search`,
    method: 'post',
    data
  })
}
export function highSearch(data) {
  return request({
    url: `query/highSearch`,
    method: 'post',
    data
  })
}
