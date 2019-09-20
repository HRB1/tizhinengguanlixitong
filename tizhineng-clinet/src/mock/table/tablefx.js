import Mock from 'mockjs'
export default Mock.mock({
    "data|100": [{
        "name": "@cname",
        "coding|1000002000-1218478777": 20,
        "id|+1": 0,
        "type": ["类型一", "类型二", "类型三","类型四"],
        "district|1": ["华东大区", "华北大区", "华南大区"],
        "manager": "@cname",
        "create_date":"@date(2018-MM-dd)",
        "address":"@city"
    }]
})
