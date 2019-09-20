import Loading from "@/views/loading"
import loadable from "react-loadable"
import isLogin from "../intercept/islogin"

function createLoadComponent(path, middle) {
    let loadCom = loadable({
        loader: () => import(`@/views${path}/index`),
        loading: Loading,
    })
    if (middle) {
        return middle(loadCom)
    }
    return loadCom
}
function createIndexChildren(path, title, childArr) {
    let router = {
        path: path === "home" ? "/" : "/" + path,
        title,
        id: path,
        component: createLoadComponent("/" + path),
    }
    if (childArr) {
        let children = childArr.map(i => ({
            path: `/${path}/${i.path}`,
            showAside: i.showAside === false ? false : true,
            title: i.title,
            parentId: i.parentId || "",
            component: createLoadComponent(`/${path}/${i.path}`)
        }))
        children.push({
            path: "/" + path,
            redirect: `/${path}/${childArr[0].path}`
        })
        router.children = children
    }
    return router
}
// management  管理；管理人员；管理部门；操纵；经营手段
// checkWork     检核工作
// plan   计划
// customer   客户
// college     学元
// level   水平
// assistant   助手
// integral   积分
// home

export default [
    {
        path: '/login',
        component: createLoadComponent("/login")
    }, {
        path: "/",
        component: createLoadComponent("", isLogin),
        children: [
            createIndexChildren("management", "员工管理", [
                {
                    path: "da",
                    title: "档案管理"
                }, {
                    path: "fp",
                    title: "分配管理"
                }, {
                    path: "kc",
                    title: "课程管理"
                }, {
                    path: "dkf",
                    title: "代课费管理"
                }, {
                    path: "sr",
                    title: "生日管理"
                }, {
                    path: "xc",
                    title: "薪酬管理"
                }, {
                    path: "lz",
                    title: "离职管理"
                },
            ]),
            createIndexChildren("checkWork", "员工考勤", [
                {
                    path: "sp",
                    title: "考勤审批"
                }, {
                    path: "tj",
                    title: "考勤统计"
                }, {
                    path: "mx",
                    title: "考勤明细"
                }, {
                    path: "set",
                    title: "考勤设置"
                }
            ]),
            createIndexChildren("plan", "工作计划", [
                {
                    path: "gzjh",
                    title: "工作计划"
                }
            ]),
            createIndexChildren("customer", "客户管理", [
                {
                    path: "khlb",
                    parentId: "kh",
                    title: "客户列表"
                }, {
                    path: "tnlsgl",
                    parentId: "kh",
                    title: "体能老师管理"
                }, {
                    path: "khsh",
                    parentId: "kh",
                    title: "客户审核"
                }, {
                    path: "khwh",
                    parentId: "kh",
                    title: "客户维护"
                }, {
                    path: "khsjfx",
                    parentId: "kh",
                    title: "客户数据分析"
                }, {
                    path: "bfgl",
                    parentId: "khbf",
                    title: "拜访管理"
                }, {
                    path: "bfjl",
                    parentId: "khbf",
                    title: "拜访记录"
                },
            ]),
            createIndexChildren("college", "亚太学院", [
                {
                    path: "all",
                    title: "考勤数据汇总"
                }, {
                    path: "fx",
                    title: "客户数据分析"
                }, {
                    path: "sort",
                    title: "主管竞争力排名"
                }, {
                    path: "study",
                    title: "教师学习排名"
                }
            ]),
            createIndexChildren("level", "级别考核", [
                {
                    path: "ps",
                    title: "考核评审"
                }
            ]),
            createIndexChildren("assistant", "管理助手", [
                {
                    path: "all",
                    title: "考勤数据汇总"
                }, {
                    path: "fx",
                    title: "客户数据分析"
                }, {
                    path: "sort",
                    title: "主管竞争力排名"
                }, {
                    path: "study",
                    title: "教师学习排名"
                },
            ]),
            createIndexChildren("integral", "积分管理", [
                {
                    path: "sb",
                    title: "积分上报"
                }, {
                    path: "sh",
                    title: "积分审核"
                }, {
                    path: "tj",
                    title: "积分统计"
                }, {
                    path: "dx",
                    title: "积分兑现"
                },
            ]),
            createIndexChildren("noAuthority", ""),
            createIndexChildren("home", "首页")
        ]
    }
]