import React, { Component } from 'react'
import scss from "./styles/tab.module.scss"

export default class index extends Component {
  state = {
    filterIndex: 0
  }
  render() {
    let { filter } = this.props
    let { filterIndex } = this.state
    return (
      <p className={`${scss.tab} tab`}>
        {
          filter.map((i, ind) => <span key={ind} className={filterIndex === ind ? scss.active : ""} onClick={this.clickFn.bind(this, ind, i)}>{i.title}</span>)
        }
      </p>
    )
  }
  clickFn(ind, item) {
    let { filterIndex } = this.state
    let { changeFilterInd } = this.props
    if (ind !== filterIndex) {
      changeFilterInd(ind, item)
      this.setState({
        filterIndex: ind
      })
    }
  }
}
