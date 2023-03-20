import request from '@/utils/request.js'

export const userLoginAPI = (data) => {
  return request({
    method: 'POST',
    url: '/v1_0/authorizations',
    data
  })
}
// 每手机号每分钟1次
export const sendSmsAPI = (mobile) => {
  return request({
    method: 'GET',
    url: `/v1_0/sms/codes/${mobile}`
  })
}
