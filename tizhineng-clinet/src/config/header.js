export const getHeaderData = (Routes,limitView) => {
  let navs=Routes.filter(i => !i.redirect&&limitView.find(item=>i.id===item.routerId)).map(i => ({
    path: i.path,
    title: i.title
  }))
  let homeInd=navs.findIndex(i=>i.path==="/")
  let home=navs[homeInd]
  navs.splice(homeInd,1)
  navs.unshift(home)
  return navs
}