import React from 'react'
import ReactEcharts from 'echarts-for-react'


const option = {
  tooltip: {
      show:true,
      trigger: 'item',
      formatter: "{b}: {c} ({d}%)"
  },
//   legend: {
//       orient: 'left',
//       x: 'right',
//       data:['出勤','出差','外出','请假','迟到','加班']
//   },
  series: [
      {
          name:'访问来源',
          type:'pie',
          radius: ['72%', '83%'],
          avoidLabelOverlap: false,          
          hoverAnimation: false,
          color:['rgb(222,222,252)'],
          label: {
              normal: {
                  show: true,
                  position: 'center',
                  fontSize: '16',
                  formatter: "{b}\n{d}%" ,
                  color: 'black'
              }
          },
          labelLine: {
              normal: {
                  show: false
              }
          },
          data:[
              {value:0, name:'出勤率'},
          ]
      }
  ]
};


const EchartsViews = () => (
  <ReactEcharts
    option={option}
    style={{ height: '220px', width: '200px',left:'20px'}}
    className="react_for_echarts"
  />
)

export default EchartsViews
