import axios from '../request/request'
import base from './base'
//数据列表接口
const api = {
    getGoodsList: () => axios.get(base.goodsList),
}

export default api