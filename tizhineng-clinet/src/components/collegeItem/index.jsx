import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
export default class componentName extends Component {
  render() {
    let{list} = this.props
    return (
      <div className="item">
      {
          list.map(item => <dl key={item.id}>
            <dt>
              <LazyLoad  overflow={true}>
                  <img src={item.img} alt="" onClick={this.clickFn.bind(this,item.img)}/>
              </LazyLoad>
            </dt>
            <dd>
              <p className="title">律动课程简介律动课程简介律动课程简介律动课程简介律动课程简介</p>
              <p className="name"><span>讲师名 {item.name}</span><em>{item.date}</em></p>
            </dd>
          </dl>)
          
      }    
      </div>
    );
  }
  clickFn(img){
    let data = {}
    data.img = img 
    data.flag = true
    this.props.handle(data);
  }
}
