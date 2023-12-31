/*
 * @desc:
 * @Author: Huang Qian
 * @Date: 2023-11-24 16:58:14
 */
import request from '@/utils/request'

export function csvTransBulk(data) {
  return request({
    url: `dataTrans/csvTransBulk`,
    method: 'post',
    data
  })
}
export function csvFoldToEs(data) {
  return request({
    url: `dataTrans/csvFoldToEs`,
    method: 'post',
    data
  })
}
export function csvDeepFoldToEs(data) {
  return request({
    url: `dataTrans/csvDeepFoldToEs`,
    method: 'post',
    data
  })
}
export function listAllIndices() {
  return request({
    url: `/index/listAllIndices`,
    method: 'get'
  })
}
export function csvLine(params) {
  return request({
    url: `dataTrans/csvLine`,
    method: 'post',
    params
  })
}
// 获取信息
export function getAll(params) {
  return request({
    url: `task/getAll`,
    method: 'get',
    params
  })
}
// 删除
export function deleteInfo(params) {
  return request({
    url: `/task/delete`,
    method: 'delete',
    params
  })
}
// 重启
export function rerunInfo(params) {
  return request({
    url: `task/rerun`,
    method: 'post',
    params
  })
}
