let oneDay = 86400000
let today = new Date()
today.setHours(0)
today.setMinutes(0)
today.setSeconds(0)

let yesterday = new Date()
yesterday.setDate(yesterday.getDate() - 1)
yesterday.setHours(0)
yesterday.setMinutes(0)
yesterday.setSeconds(0)

let Week = new Date()
Week.setDate(Week.getDate() - Week.getDay())
Week.setHours(0)
Week.setMinutes(0)
Week.setSeconds(0)


let Month = new Date()
Month.setDate(1)
Month.setHours(0)
Month.setMinutes(0)
Month.setSeconds(0)

let now = new Date()

export const time = [
  {
    title: "全部"
  }, {
    title: "今日",
    section: [today * 1, today * 1 + oneDay]
  }, {
    title: "昨日",
    section: [yesterday * 1, today * 1]
  }, {
    title: "本周",
    section: [Week * 1, Week * 1 + oneDay * 7]
  }, {
    title: "本月",
    section: [Month * 1, Month * 1 + oneDay * 30]
  }, {
    title: "最近7日",
    section: [now * 1 - 3.5 * oneDay, now * 1 + 3.5 * oneDay]
  }, {
    title: "最近30日",
    section: [now * 1 - 15 * oneDay, now * 1 + 15 * oneDay]
  }
]