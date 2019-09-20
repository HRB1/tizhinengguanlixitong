import React, { Component } from 'react';
export default class componentName extends Component {
    
  render() {
      let{name,area,title}=this.props

    return (
            <dl>
            <dt><img src={require("@/static/images/clp_03.jpg")} alt=""/></dt>
                <dd>
                    <p className="name"><b>{name}</b></p>
                    <p className="qu">{area}</p>
                    <p className="pm"><b>{title}</b></p>
                </dd>
            </dl>
    );
  }
}
