import React, { Component } from 'react';
import score from '@/config/jf/score'
import Item from '@/components/item/index.jsx'
import dx from "./styles/dx.module.scss"
export default class componentName extends Component {
    render() {
        return (
            <div className={`${dx["el-wrap"]} el-wrap`}>
                <div className="browse">
                    <img src={require('@/static/images/browse.jpg')} alt=""/>
                    <div className="score">
                        {
                            score.map(item => <span key={item.id}>{item.title}</span>)
                        }
                    </div>
                </div>
                <div className="content">
                    <div className="shop-title">
                        <h3>精品推荐</h3>
                    </div>
                    <div className="shop-content">
                        <Item/>
                    </div>
                </div>
            </div>
        );
    }
}
