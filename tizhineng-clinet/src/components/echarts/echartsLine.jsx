import React, { Component } from 'react';
import { Select } from 'antd';
import ReactEcharts from 'echarts-for-react';
import 'echarts/lib/chart/line';
const { Option } = Select;
export default class componentName extends Component {
    state = {
        title: [{
            title: '最近一周',
            id: 1
        }, {
            title: '最近一月',
            id: 2
        }, {
            title: '最近一年',
            id: 3
        }],
        data: [0, 2, 1, 5, 1, 1, 3]
    }
    static defaultProps = {
        flag: true
    }
    render() {
        let { title } = this.state
        let { text} = this.props
        return (
            <div className="items">
                <div className="title">
                    <p><span></span><b>{text}</b></p>
                    <Select defaultValue="最近一周" style={{ width: 120 }} onChange={this.changeFn.bind(this)}>
                        {
                            title.map((item, index) => <Option value={index} key={index}>{item.title}</Option>)
                        }

                    </Select>
                </div>
                <div>
                    <div>
                        <ReactEcharts option={this.getOption()} theme="Imooc" style={{height:'260px'} } />
                    </div>
                </div>
            </div>
        );
    }
    getOption = () => {
        let { color } = this.props
        let { data } = this.state
        let option = {
            color: [color],
            title: {
                x: 'center'
            },
            tooltip: {
                trigger: 'axis',
            },
            grid: {
                left: '7%',
                right: '7%',
                bottom: '7%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07'],
                axisTick: {
                    alignWithLabel: true,
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#EDEDED', // x坐标轴的轴线颜色
                        width: 0 //这里是坐标轴的宽度,为0就是不显示
                    }
                },
                axisLabel: {
                    show: true, //这行代码控制着坐标轴x轴的文字是否显示
                    color: '#a9a9a9',
                },
            },
            yAxis: {
                type: 'value',
                axisTick: {       //y轴刻度线
                    show: false
                },
                axisLabel: {
                    show: true, //这行代码控制着坐标轴x轴的文字是否显示
                    color: '#a9a9a9',
                },
                splitArea: { show: false },
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
                max: 8,
            },
            series: [
                {
                    name: '客户数量',
                    type: 'line',   //这块要定义type类型，柱形图是bar,饼图是pie
                    data: data
                }
            ]
        }
        return option
    }
    changeFn(e) {
        let { data } = this.props
        this.setState({ data: data[e] })
    }
}
