import React, { Component } from 'react';
import shopList from '@/mock/shop'
import LazyLoad from 'react-lazyload';
export default class Item extends Component {
    render() {
    return (
        <div className="item">
            {
                shopList.data.map(item => <dl key={item.id}>
                    <dt>
                        <LazyLoad height={200} overflow={true}>
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568115935&di=5116ba3ad1669de1cd9c9edc051d2a85&imgtype=jpg&er=1&src=http%3A%2F%2Fimgmall.tg.com.cn%2Fgroup1%2FM00%2F77%2FB1%2FCgooa1WaD9CykcJvAAG02rS6Uw4531.jpg" alt="" />
                         </LazyLoad>
                    </dt>
                    <dd>
                        <p>澳柯玛电饭煲澳柯玛电饭煲澳柯玛电饭煲澳柯玛电饭煲澳柯玛电饭煲</p>
                        <p>积分:<span>{item.score}</span></p>
                    </dd>
                </dl>)

            }
        </div>
    );
  }
}
