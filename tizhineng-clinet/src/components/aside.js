import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
const { SubMenu } = Menu;
const { Sider } = Layout;

export default class aside extends Component {
  render() {
    let { asideList,pathname ,go} = this.props
    // console.log(this.props)
    return asideList.length ? <Sider width={201} style={{ background: '#c5cfea' }} className="aside">
      <Menu
        mode="inline"
        defaultSelectedKeys={[pathname]}
        style={{ height: '100%', borderRight: 0 }}
      >
        {
          asideList.map((i, ind) => {
            if (i.children) {
              return <SubMenu
                key={`sub${ind}`}
                title={
                  <span>{i.title}</span>
                }
              >
                {
                  i.children.map((item, index) => item.showAside ? <Menu.Item key={item.path} onClick={go.bind(null,item)}>{item.title}</Menu.Item> : '')
                }
              </SubMenu>
            } else if (i.showAside) {
              return <Menu.Item key={i.path} onClick={go.bind(null,i)}>{i.title}</Menu.Item>
            }
            return ""
          })
        }
      </Menu>
    </Sider> : ''
  }
}
