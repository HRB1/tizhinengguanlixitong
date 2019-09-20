import mock from "mockjs"
let time = new Date() * 1
let bfgl = mock.mock({
  "data|100": [
    {
      "plan|-1-1": 1,
      "key|+1": 1,
      name: "@cname",
      content: "@ctitle(10,20)",
      higherUp: "@cname",
      [`createAt|1-${time}`]: 1
    }
  ]
})
function sort() {
  bfgl.data = bfgl.data.sort((a, b) => {
    if (a.createAt < b.createAt) {
      return 1
    } else {
      return -1
    }
  })
}
sort()
mock.mock("/api/bfgl", (req) => {
  let { page, limit } = JSON.parse(req.body)
  return {
    length: bfgl.data.length,
    list: bfgl.data.filter((i, ind) => ind >= (page - 1) * limit && ind < page * limit)
  }
})
mock.mock("/api/add", (req) => {
  let { name, content, higherUp, createAt } = JSON.parse(req.body)
  let maxKey = Math.max.apply(null, bfgl.data.map(i => i.key))
  bfgl.data.push({
    plan: -1,
    key: ++maxKey,
    name, content, higherUp, createAt
  })
  sort()
  return {
    length: bfgl.data.length,
    list: bfgl.data.filter((i, ind) => ind >= 0 && ind < 10)
  }
})