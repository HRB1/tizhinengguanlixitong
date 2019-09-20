import React from 'react'
import ReactEcharts from 'echarts-for-react'

 
const option = {
    // 标题组件，包含主标题和副标题
    title:{
        show:true,
        x:"center"
        
    },
    //  提示框组件
    tooltip: {
        //是否显示提示框组件，包括提示框浮层和 axisPointe
        show:true,
        // 触发类型: item:数据项触发，axis：坐标轴触发
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    // // 图例
    // legend: {
    //     orient: 'left',
    //     x: 'right',
    //     data:['已交','未交','应交'],
    //     color:'rgb(0,0,225)'
    // },
    
    // 系列列表。每个系列通过 type 决定自己的图表类型
    series: [
        {
            // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
            name:'任务进度',
            type:'pie',
            // 饼图的半径，数组的第一项是内半径，第二项是外半径
            radius: ['52%', '60%'],
            color:['rgb(97, 197, 97)','rgb(222,222,222)'],
            // 是否启用防止标签重叠策略，默认开启
            avoidLabelOverlap: false,          
               hoverAnimation: false,
            // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {   // 数据值
                    value:100, 
                    // 数据项名称
                    name:'已交',
                    //该数据项是否被选中
                    selected:false,
                    // 单个扇区的标签配置
                    label: {
                        normal: {
                            // 是显示标签
                            show: true, 
                            fontSize: '16',
                            position: 'center',
                            // 标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行
                            formatter:'{b}\n{d}%',
                            color: 'black'
                        }
               
                    },
                 
                }
              
            ]
        }
    ]
};

const EchartsViews = () => (
  <ReactEcharts
    option={option}
    style={{ height: '220px', width: '100%' }}
    className="react_for_echarts"
  />
)

export default EchartsViews
