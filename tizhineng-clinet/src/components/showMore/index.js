import React, { Component } from 'react'
import scss from "./styles/index.module.scss"
import { Button, Icon } from 'antd';

export default class index extends Component {
  state = {
    flags: false,
  }
  render() {
    let { children } = this.props
    let { flags } = this.state
    return (
      <div className={`${scss.moreBox} moreBox`}>
        <div>
          {
            children[0]
          }
          {
            !flags ? <Button className={scss.button} onClick={this.hold.bind(this, flags)}>展开查询 <Icon type="down" /> </Button>
              : <Button className={scss.button} onClick={this.hold.bind(this, flags)}>关闭查询 <Icon type="up" /> </Button>
          }
        </div>
        {
          flags && <div className={scss.searchBox}>
            {children[1]}
          </div>
        }
      </div>
    )
  }
  hold(flags) {
    this.setState({ flags: !flags })
  }
}
