import React, { Component } from 'react'
import { Checkbox } from 'antd';
import scss from "./styles/index.module.scss"
import "./styles/index.scss"

export default class index extends Component {
  state = {
    checked: []
  }
  render() {
    let { title, checks } = this.props
    let { checked } = this.state
    return checks.length ? <div className={`${scss["el-head"]} el-head`}>
      <p>
        <span>{title}:</span>
      </p>
      <Checkbox checked={checked.length === checks.length} onChange={this.allChange}>全部显示</Checkbox>
      {
        checks.map((item, ind) => <Checkbox checked={checked.findIndex(i => i === ind) >= 0} onChange={this.change.bind(this, ind)} key={ind} >{item.title}</Checkbox>)
      }
    </div> : ""
  }
  allChange = () => {
    let { checks } = this.props
    let { checked } = this.state
    if (checked.length === checks.length) {
      this.changeColumns([])
      this.setState({
        checked: []
      })
    } else {
      let checkArr = checks.map((i, ind) => ind)
      this.changeColumns(checkArr)
      this.setState({
        checked: checkArr
      })
    }
  }
  change = (ind) => {
    let { checked } = this.state
    let checkInd = checked.findIndex(i => i === ind)
    if (checkInd >= 0) {
      checked.splice(checkInd, 1)
    } else {
      checked.push(ind)
    }
    this.changeColumns(checked)
    this.setState({
      checked
    })
  }
  changeColumns(checked) {
    let { change, checks } = this.props
    change(checked.map(i => checks.find((item, ind) => ind === i)))
  }
}
