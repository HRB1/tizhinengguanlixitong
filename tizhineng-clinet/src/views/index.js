import React, { Component } from 'react'
import RouterView from "@/router/routerView"
import Aside from "@/components/aside"
import { Layout, Icon } from 'antd';
import IndexScss from "@/styles/index.module.scss"
import "../styles/index.scss";
import { NavLink } from "react-router-dom"
import { getAsideList } from "@/config/aside"
import { getHeaderData } from "@/config/header"
import Header from "@/components/header"

const { Content } = Layout;
let links = JSON.parse(window.sessionStorage.getItem("links")) || {}

export default class index extends Component {
    state = {
        links: links.userName === this.props.user.userName ? links.links || [] : [],
        headerData: [],
        asideList: []
    } 
    render() {
        let { Routes, location: { pathname }, user } = this.props
        let { links, asideList, headerData } = this.state
        return (
            <Layout className={IndexScss['wrap']}>
                <Header headerData={headerData} user={user} clickHeadItem={this.clickHeadItem.bind(this)} />
                <Layout>
                    <Aside asideList={asideList} pathname={pathname} go={this.go.bind(this)} />
                    <Layout style={{ background: '#f7f7f7' }}>
                        {
                            pathname !== "/" ? <p className={`${IndexScss.breadcrumb} links`}>
                                {
                                    links.map((i, ind) => <NavLink to={i.path} key={ind}>
                                        {i.title}
                                        <Icon type="close" onClick={this.close.bind(this, ind)} />
                                    </NavLink>)
                                }
                            </p> : ''
                        }
                        <Content>
                            <RouterView Routes={Routes} />
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
    static getDerivedStateFromProps(nextProps, nextState) {
        let { Routes, location: { pathname }, user: { limitView, userName } } = nextProps
        let { links } = nextState
        let asideList = getAsideList(pathname, Routes)
        if (pathname !== "/") {
            let path = pathname
            let needRoute = Routes.find(i => pathname.includes(i.path))
            if (needRoute.children) {
                if (!needRoute.children.filter(i => !i.redirect).map(i => i.path === pathname ? i : '').filter(i => i)) {
                    path = needRoute.children[0].path
                }
            }
            let item = asideList.map(i => i.path ? i.path === path ? i : '' : i.children.find(i => i.path === path)).filter(i => i)
            if (needRoute.children ? !links.find(i => i.path === path) : false) {
                if (item.length) {
                    links.push(item[0])
                } else if (asideList.find(i => i.path === path) && !links.find(i => i.path === path)) {
                    if (asideList.find(i => i.path === path).children) {
                        links.push({
                            path,
                            title: asideList[0].children.find(i => i.path === path).title
                        })
                    } else {
                        links.push({
                            path,
                            title: asideList.find(i => i.path === path).title
                        })
                    }
                }
            }
        }
        window.sessionStorage.setItem("links", JSON.stringify({ userName, links }))
        return {
            asideList,
            headerData: getHeaderData(Routes, limitView),
            links
        }
    }
    clickHeadItem(item) {
        if (this.props.location.pathname.includes(item.path) && item.path !== "/") {
            return
        }
        this.props.history.push(item.path)
    }
    go(item) {
        this.props.history.push(item.path)
        if (!this.state.links.find(i => i.path === item.path)) {
            this.state.links.push({
                path: item.path,
                title: item.title
            })
            this.setState({
                links: this.state.links
            })
        }
    }
    close(ind, e) {
        e.preventDefault()
        let { links } = this.state
        if (this.props.location.pathname === links[ind].path) {
            if (links.length === 1) { } else if (ind === 0) {
                this.props.history.push(links[links.length - 1].path)
            } else {
                this.props.history.push(links[ind - 1].path)
            }
        }
        this.state.links.splice(ind, 1)
        this.setState({
            links
        })
    }
}