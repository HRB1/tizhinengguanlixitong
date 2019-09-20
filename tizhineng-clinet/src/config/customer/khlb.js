export default [
  {
    title: '客户编号',
    dataIndex: 'key',
    render(text, record) {
      let num = record.key + ""
      if (num.length < 8) {
        let str = ""
        for (let i = 0; i < 8 - num.length; i++) {
          str += "0"
        }
        return str + record.key
      }
      return record.key
    }
  }, {
    title: '客户名称',
    dataIndex: 'name'
  }, {
    title: '客户状态',
    dataIndex: 'ifJoin',
    render(text, record) {
      var status = ""
      switch (record.ifJoin) {
        case 1:
          status = "合作"
          break;
        case 0:
          status = "停止合作"
          break;
        default:
          status = "待拓展"
          break;
      }
      return status
    }
  }, {
    title: '详细地址',
    dataIndex: 'city'
  }, {
    title: '客户经理',
    dataIndex: 'higherUp'
  }, {
    title: '创建时间',
    dataIndex: 'createAt',
    render(text, record) {
      return new Date(record.createAt).toISOString().slice(0, 10)
    }
  }
]