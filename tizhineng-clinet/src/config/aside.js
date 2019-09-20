let asideParents = [
  {
    title: "客户拜访",
    id: "khbf",
    children: []
  }, {
    title: "客户",
    id: "kh",
    children: []
  }
]
export const getAsideList = (nowPath, Routes) => {
  if (nowPath === "/") {
    return []
  }
  let parents = JSON.parse(JSON.stringify(asideParents))
  let list = []
  let children = Routes.find(i => nowPath.includes(i.path)).children
  if (children) {
    list = children.map(i => {
      if (i.parentId) {
        parents.find(item => i.parentId === item.id).children.push(i)
        return ""
      }
      return i
    }).filter(i => !i.redirect)
  }
  parents.forEach(i => {
    if (i.children.length) {
      list.unshift(i)
    }
  })
  return list.filter(i=>i)
}