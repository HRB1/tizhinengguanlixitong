import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import { Select } from 'antd';
import '../../index.scss'

const { Option } = Select;
export default class activity extends Component {
    state = {
        list: [
            [0, 2, 1, 5, 1, 1, 3],
            [1, 0, 4, 3, 5, 4, 3]
        ],
        data: [0, 2, 1, 5, 1, 1, 3]
    }
    render() {
        return (
            <div className="cloud-box">
            <div className="pb-m">
                <h3><span className="line">|</span>活动数据</h3>
                <Select  id="select" defaultValue="今天" onChange={this.changeFn.bind(this)}>
                    <Option value={0}>今天</Option>
                    <Option value={1}>每天</Option>
                </Select>
            </div>
            <div>
            <ReactEcharts option={this.getOption()} style={{ height: '220px', width: '100%' }} />
            </div>
            </div>
        );
    }
    getOption = () => {
        let{data} = this.state
        let option = {
          xAxis: {
              type: 'category',
              data: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07']
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: data,
              type: 'line',
              showSymbol : false,
                itemStyle: {
                  normal: {
                    lineStyle: {
                      color : 'orangered'//线条颜色
                      
                    }
                    }
                  },
          }]
        };
        return option
    }
    changeFn(e) {
        let{list} = this.state
        let{data} = this.props
        data && this.setState({list:data})
        this.setState({data:list[e]})
    }
}


