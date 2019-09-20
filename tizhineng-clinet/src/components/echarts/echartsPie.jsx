import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react'
import 'echarts/lib/chart/pie'
export default class componentName extends Component {
  render() {
    return (
        <ReactEcharts option={this.Option()} theme="Imooc" style={{ height: '160px', width: '135px' }} /> 
    );
  }
  Option = () => {
    let { data } = this.props
    let option = {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        x: 'left',
         data: data.data
      },
      title: {
        text: data.texts,
        left: "center",
        top: "50%",
        fontWeight: 400,
        textStyle: {
          fontSize: 15,
          align: "center",
          fontWeight: "normal",
        }
      },
      graphic: {
        type: "text",
        left: "center",
        top: "40%",
        style: {
          text: data.text,
          textAlign: "center",
          fill: "#afafaf",
          fontSize: 12,
        }
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['63%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '15',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: data.already },
            { value: data.incomplete }
          ],
          itemStyle: {
            normal: {
              color: function (params) {
                let colorList = ["#66bdf2", "#ddd"];
                return colorList[params.dataIndex];
              }

            }
          },
          width: 5,
          hoverAnimation: false,
        }
      ]
    }
    return option
  }
}
