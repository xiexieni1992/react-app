import { hsNewService } from './axios'

/**
 * 查询【热门】品牌
 * isHot: 是否热门
 */
export const findBrands = (isHot) => {
  const param = {}
  if (isHot && isHot === 'true') {
    param.hot = true
  }
  return hsNewService({
    url: '/api/v2/basedata/brands',
    method: 'get',
    params: param
  })
}
