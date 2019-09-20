import React, { Component } from 'react'
import { Menu, Icon, Dropdown, Layout } from 'antd';
import IndexScss from "@/styles/index.module.scss"
import { withRouter } from "react-router-dom"
import { NavLink } from "react-router-dom"

const { Header } = Layout;

class header extends Component {
  menu = (
    <Menu>
      <span>{this.props.user.userName}</span>
      <Menu.Item>
        <NavLink to="/">
          个人主页
        </NavLink>
      </Menu.Item>
      <Menu.Item onClick={this.close.bind(this)}>退出登录</Menu.Item>
    </Menu>
  );
  render() {
    let { headerData, location: { pathname }, user, clickHeadItem } = this.props
    return (
      <Header className={IndexScss.header}>
        <div>
          <img src={require('../static/images/logo.jpg')} alt="" />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          className="nav"
          defaultSelectedKeys={[headerData.findIndex(i => pathname === "/" ? true : i.path !== "/" && pathname.includes(i.path)) + '']}
          style={{ lineHeight: '50px', background: 0 }}
        >
          {
            headerData.map((i, ind) => <Menu.Item key={ind} className={IndexScss.menuItem} onClick={clickHeadItem.bind(null, i)}>{i.title}</Menu.Item>)
          }
        </Menu>
        <div className={`${IndexScss.right} right`}>
          <Dropdown overlay={this.menu} placement="bottomCenter">
            <span>{user.userName}</span>
          </Dropdown>
          <span>
            <Icon type="solution" className={IndexScss.icon} />
            通知栏
          </span>
        </div>
      </Header>
    )
  }
  close(){
    window.sessionStorage.removeItem("userInfo")
    this.props.history.push("/login")
  }
}
export default withRouter(header)