import request from '@/utils/request'

const fetchBlockchainInfo = () => {
  return request({
    url: `/api/blockchain`,
    method: 'get'
  })
}

export default {
  fetchBlockchainInfo
}
