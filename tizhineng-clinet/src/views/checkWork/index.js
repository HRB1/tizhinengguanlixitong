import React, { Component } from 'react'
import RouterView from "@/router/routerView"
import "./ygkq.scss"

export default class index extends Component {
  render() {
    let { Routes } = this.props
    return (
      <div className="ygkq">
        <RouterView Routes={Routes} />
      </div>
    )
  }
}
