import request from '@/utils/request'

const fetchBlockchainInfo = () => {
  return request({
    url: `/api/blockchain`,
    method: 'get'
  })
}

const fetchBlockHistory = (limit = 3) => {
  return request({
    url: `/api/blocks?limit=${limit}`,
    method: 'get'
  })
}

export default {
  fetchBlockchainInfo,
  fetchBlockHistory
}
