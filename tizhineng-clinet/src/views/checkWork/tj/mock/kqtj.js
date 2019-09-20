import mock from "mockjs"
let time = new Date() * 1
let rytj = mock.mock({
  "data|100": [
    {
      "section|1": ["销售部门", "品牌业务部"],
      "key|+1": 1,
      name: "@cname",
      "duty|1": ["职工", "经理"],
      "tel|11111111111-20000000000": 1,
      workday: {
        "normal|1-20": 1,
        "abnormal|1-10": 1
      },
      [`time|1-${time}`]: 1,
      "card|20-30": 1,
      holiday: {
        "normal|1-10": 1,
        "abnormal|1-10": 1
      },
      "workTime|100-500": 1
    }
  ]
})
let rqtj = mock.mock({
  "data|100": [
    {
      "week|1-7": 1,
      checking: {
        "normal|1-50": 1,
        "abnormal|1-30": 1
      },
      [`date|1-${time}`]: 1,
      "key|+1": 1
    }
  ]
})
function sortRytj() {
  rytj.data = rytj.data.sort((a, b) => {
    if (a.time < b.time) {
      return 1
    } else {
      return -1
    }
  })
}
sortRytj()
function sortRqtj() {
  rqtj.data = rqtj.data.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}
sortRqtj()

mock.mock("/rytj/list", (req) => {
  let { page, limit } = JSON.parse(req.body)
  return {
    length: rytj.data.length,
    list: rytj.data.filter((i, ind) => ind >= (page - 1) * limit && ind < page * limit)
  }
})
mock.mock("/rytj/list/filter", (req) => {
  let { page, limit, section } = JSON.parse(req.body)
  let data = rytj.data
  if (section) {
    data = rytj.data.filter(i => i.time > section[0] && i.time < section[1])
  }
  return {
    length: data.length,
    list: data.filter((i, ind) => ind >= (page - 1) * limit && ind < page * limit)
  }
})

mock.mock("/rqtj/list", (req) => {
  let { page, limit } = JSON.parse(req.body)
  return {
    length: rqtj.data.length,
    list: rqtj.data.filter((i, ind) => ind >= (page - 1) * limit && ind < page * limit)
  }
})
mock.mock("/rqtj/list/filter", (req) => {
  let { page, limit, section } = JSON.parse(req.body)
  let data = rqtj.data
  if (section) {
    data = rqtj.data.filter(i => i.date > section[0] && i.date < section[1])
  }
  return {
    length: data.length,
    list: data.filter((i, ind) => ind >= (page - 1) * limit && ind < page * limit)
  }
})


mock.mock("/kqtj/kqzcl", (req) => {
  let body = JSON.parse(req.body)
  let data = {}
  let count = body ? (new Date(body.val[1]) - new Date(body.val[0])) / 86400000 + 1 : 0
  if (body && count < 30) {
    data["data|" + count] = [
      {
        "date|+86400000": body ? new Date(body.val[0]) * 1 : time - 86400000 * 29,
        "normal|0-100": 1
      }
    ]
  } else {
    data["data|30"] = [
      {
        "date|+86400000": body ? new Date(body.val[0]) * 1 : time - 86400000 * 29,
        "normal|0-100": 1
      }
    ]
  }
  return mock.mock(data)
})