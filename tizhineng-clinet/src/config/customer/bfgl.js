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
    title: '拜访客户名称',
    dataIndex: 'name'
  }, {
    title: '计划状态',
    dataIndex: 'plan',
    render(text, record) {
      let status = ""
      switch (record.plan) {
        case 1:
          status = "已拜访"
          break;
        case 0:
          status = "停止合作"
          break;
        default:
          status = "待拜访"
          break;
      }
      return status
    }
  }, {
    title: '计划拜访内容',
    dataIndex: 'content'
  }, {
    title: '拜访人',
    dataIndex: 'higherUp'
  }, {
    title: '计划拜访时间',
    dataIndex: 'createAt',
    render(text, record) {
      return new Date(record.createAt).toISOString().slice(0, 10)
    }
  }
]