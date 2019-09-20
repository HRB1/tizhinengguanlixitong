import React, { Component } from 'react'
import scss from "./styles/choose.module.scss"
import { time } from "./config/index"

export default class index extends Component {
  state = {
    index: 0
  }
  time = time
  render() {
    let { list, data } = this.props
    let { index } = this.state
    let show = data ? this[data] : list
    return (
      <span>
        {
          show.map((i, ind) => <i key={ind} onClick={this.change.bind(this, i, ind)} className={`${scss.item} ${index === ind ? scss.active : ''}`}>{i.title}</i>)
        }
      </span>
    )
  }
  change(i, ind) {
    let { index } = this.state
    if (index !== ind) {
      let { change } = this.props
      change(i)
      this.setState({
        index: ind
      })
    }
  }
}
