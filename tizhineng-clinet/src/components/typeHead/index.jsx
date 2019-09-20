import React, { Component } from 'react';
import '@/components/typeHead/css/index.scss'
export default class typeHead extends Component {
    state={
        ind:0,
    }
  render() {
      let{ind} = this.state;
      let{list} = this.props
    return (
        <div className="type-head">
            {
                list.map((item, index) => <span className={index === ind ? 'active' : ''} key={item.id} onClick={this.btn.bind(this, index)}>{item.title}</span>)
            }
        </div>
    );
  }
    btn(index) {
        this.setState({ ind: index })
    }
}
