import React, { Component } from 'react'
import RouterView from "@/router/routerView"

export default class index extends Component {
  render() {
    let {Routes}=this.props
    return (
      <div>
        工作计划
        <RouterView Routes={Routes} />
      </div>
    )
  }
}
