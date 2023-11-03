import request from '@/utils/request' //可以理解为导入的公共包

export default {
  dictList(id) {
    //数据字典列表
    return request({
      url: `/admin/cmn/dict/findChildData/${id}`,
      method: 'get'
    })
  }
}
