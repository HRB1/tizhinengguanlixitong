import React, { Component } from 'react';
import { Select } from 'antd';
import ReactEcharts from 'echarts-for-react';
import 'echarts/lib/chart/bar'; 
const { Option } = Select;
export default class componentName extends Component {
    state = {
        title: [{
            title: '客服环节',
            id: 1
        }, {
            title: '客服评价',
            id: 2
        }],
        list: [

        ],
        data: [2, 8, 12, 19, 37, 43, 50]
    }
    render() {
        let{text} = this.props
        let { title } = this.state
    return (
        <div className="items">
            <div className="title">
                <p><span></span><b>{text}</b></p>
                <Select defaultValue="客服环节" style={{ width: 120 }} onChange={this.changeFn1.bind(this)}>
                    {
                        title.map((item, index) => <Option value={index} key={index}>{item.title}</Option>)
                    }
                    
                </Select>
            </div>
            <div>
                    <ReactEcharts option={this.getOption()} theme="Imooc" style={{ height: '260px' }} />
            </div>
        </div>
      
        
    )
  }
    getOption = () => {
        let { data } = this.state
        let option = {
            title: {
                x: 'center'
            },
            tooltip: {
                trigger: 'axis',
            },
            xAxis: {
                data: ['很不满意', '不满意', '不太满意', '一般', '较满意', '满意', '很满意'],
                axisTick: {       //y轴刻度线
                    "show": false
                },
                axisLabel: {
                    show: true,
                    color: '#a9a9a9',
                    interval: 0,
                    rotate: 0
                },
                axisLine: {
                    lineStyle: {
                        color: '#EDEDED', // x坐标轴的轴线颜色
                        width: 0 //这里是坐标轴的宽度,为0就是不显示
                    }
                },
            },
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        show: true,
                        interval: 'auto',
                        formatter: '{value} %',
                        color: '#a9a9a9',
                    },
                    show: true,
                    axisTick: {       //y轴刻度线
                        "show": false
                    },
                    splitLine: {
                        show: true, // 网格线是否显示
                        // 改变样式
                        lineStyle: {
                            color: '#EDEDED' // 修改网格线颜色
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#fff', // x坐标轴的轴线颜色
                            width: 0 //这里是坐标轴的宽度,为0就是不显示
                        }
                    },
                    min: 0,
                    max: 80,
                }
            ],
            series: [
                {
                    name: '客户评价',
                    type: 'bar',   //这块要定义type类型，柱形图是bar,饼图是pie
                    data: data,
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                let colorList = ["#c1494a", "#c1494a", "#c1494a", "#4c8fd6", "#4c8fd6", "#4c8fd6", "#4c8fd6",];
                                return colorList[params.dataIndex];
                            }

                        }
                    },
                    barWidth: 40,
                }
            ]
        }
        return option
    }
    changeFn1(e) {
        let { data } = this.props
        this.setState({ data: data[e] })
    }
}
