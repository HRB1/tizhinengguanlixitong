import mock from "mockjs"
let time = new Date() * 1
let khlb = mock.mock({
  "data|100": [
    {
      "ifJoin|-1-1": 1,
      "key|+1": 1,
      name: "@cname",
      city: "@ctitle(10,20)",
      higherUp: "@cname",
      [`createAt|1-${time}`]: 1
    }
  ]
})
khlb.data = khlb.data.sort((a, b) => {
  if (a.createAt < b.createAt) {
    return 1
  } else {
    return -1
  }
})
mock.mock("/api/khlb", (req) => {
  let { page, limit, filter, key } = JSON.parse(req.body)
  let list = khlb.data.filter(i => filter === "all" ? true : i[filter] === key)
  return {
    length: list.length,
    list: list.filter((i, ind) => ind >= (page - 1) * limit && ind < page * limit)
  }
})
mock.mock("/khlb/delete", (req) => {
  let { page, checked, limit, filter, key } = JSON.parse(req.body)
  checked.forEach(i => {
    khlb.data.splice(khlb.data.findIndex(item => item.key === i.key), 1)
  })
  let list = khlb.data.filter(i => filter === "all" ? true : i[filter] === key)
  return {
    length: list.length,
    list: list.filter((i, ind) => ind >= (page - 1) * limit && ind < page * limit)
  }
})