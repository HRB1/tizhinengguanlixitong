import mock from "mockjs"
let time = new Date() * 1
let bfjl = mock.mock({
  "data|100": [
    {
      "section": "@ctitle",
      "key|+1": 1,
      execute: "@cname",
      position: "@ctitle(10,15)",
      "skew|1-2000": 1,
      [`time|1-${time}`]: 1,
      content: "@ctitle(10,15)",
      summary: "@ctitle(10,15)",
      "images": "@image",
      client: "@cname"
    }
  ]
})
function sort() {
  bfjl.data = bfjl.data.sort((a, b) => {
    if (a.time < b.time) {
      return 1
    } else {
      return -1
    }
  })
}
sort()
mock.mock("/api/bfjl", (req) => {
  let { page, limit } = JSON.parse(req.body)
  return {
    length: bfjl.data.length,
    list: bfjl.data.filter((i, ind) => ind >= (page - 1) * limit && ind < page * limit)
  }
})
mock.mock("/api/bfjl/filter", (req) => {
  let { page, limit, section } = JSON.parse(req.body)
  let data = bfjl.data
  if (section) {
    data = bfjl.data.filter(i => i.time > section[0] && i.time < section[1])
  }
  return {
    length: data.length,
    list: data.filter((i, ind) => ind >= (page - 1) * limit && ind < page * limit)
  }
})