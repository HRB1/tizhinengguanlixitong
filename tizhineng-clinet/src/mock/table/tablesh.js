import Mock from 'mockjs'
let data = Mock.mock({
    "data|100": [{
        "name": "@cname",
        "jobNum|0-1000": 20,
        "id|+1": 0,
        "district|1":["华东大区","华北大区","华南大区"],
        "section":"销售部",
        "duty":"业务员",
        "check":"未审核"
    }]
})
export default data