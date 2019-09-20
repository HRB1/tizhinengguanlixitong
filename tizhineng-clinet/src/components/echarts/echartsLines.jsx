import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import 'echarts/lib/chart/line';
export default class componentName extends Component {
    state = {
        data: [10, 25, 31, 75, 51, 41, 38, 50, 25, 21, 35, 11, 19, 53, 20, 27, 16, 35, 18, 17, 53, 70, 52, 21, 15, 12, 19, 53, 54, 78, 39]
    }
    static defaultProps = {
        flag: true
    }
    render() {
        let { height } = this.props
        return (
            <div className="items">
                <div>
                    <div>
                        <ReactEcharts option={this.getOption()} theme="Imooc" style={height ? { height: height } : { height: '260px' }} />
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
                text: '考勤正常率统计',
                x: 'center',
                textStyle: {
                    fontWeight: "normal",
                    color: '#808080',
                    fontSize: 13
                },
            },
            tooltip: {
                trigger: 'axis',
            },
            grid: {
                left: '2%',
                right: '2%',
                bottom: '2%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: this.getDate(),
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
                    interval: 0,
                    rotate: 20
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
                    formatter: '{value} %',
                    interval: 'auto',
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
                max: 100,
            },
            series: [
                {
                    name: '新增人数',
                    type: 'line',   //这块要定义type类型，柱形图是bar,饼图是pie
                    data: data,
                    smooth: true,
                    symbol: "none", 
                    animationDelay: function (idx) {
                        return idx * 100;
                    }
                }
            ],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx * 5;
            }

            
        }
        return option
    }
    changeFn(e) {
        let { data } = this.props
        this.setState({ data: data[e] })
    }
    getDate() {
        var base = +new Date(2019, 8, 30);
        var oneDay = 24 * 3600 * 1000;
        var date = [];
        var data = [Math.random() * 300];


        for (let i = 1; i < 33; i++) {
            var now = new Date(base += oneDay);
            date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
            data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
        }
        var arr = []
        for (var i = 0; i < date.length - 1; i++) {
            date[i].slice(5)
            arr.push(date[i].slice(5).replace('/', '-'))
        }
        return arr;
    }
}
