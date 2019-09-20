import React, { Component } from 'react';
import Choose from "@/components/choose/index"
import ShowMore from "@/components/showMore/index"
import { DatePicker, Table, Pagination, Form, Input, Tag } from 'antd';
import Tab from "@/components/tab/index"
import config from "@/config/checkWork/tj"
import "./styles/ygtj.scss"
import axios from "axios"
import "./mock/kqtj"
import TableHead from "@/components/tableHead/index"
import echarts from "echarts"

const { RangePicker } = DatePicker;

export default class componentName extends Component {
  state = {
    columns: [],
    list: [],
    page: 1,
    length: 1,
    dataSrc: "",
    checks: [],
    myChart: null,
    line: [],
    searchTime: []
  }
  render() {
    let { columns, page, length, list, checks, searchTime } = this.state
    console.log()
    return (
      <div className="kqtj">
        <h2>考勤统计</h2>
        <Tab filter={config} changeFilterInd={this.changeFilterInd} />
        {
          columns.length ? <div>
            <ShowMore>
              <p className="choose">
                <span className="out">导出</span>
                <span className="title">拜访日期：</span>
                <Choose change={this.change} data="time" ref="choose" />
                <RangePicker allowClear="false" onChange={this.chooseTime} />
              </p>
              <div>
                1111
              </div>
            </ShowMore>
            <div className="tableBox">
              <TableHead title="详情显示项" checks={checks} change={this.moreColumns} />
              <Table dataSource={list} columns={columns} bordered={true} pagination={false} />
              <div className="pagination">
                <Pagination total={length} onChange={this.changepage} current={page} />
              </div>
            </div>
          </div> : <div className="lineBox">
              <div className="search">
                <Form layout="inline" onSubmit={this.handleSubmit}>
                  <Form.Item label="日期">
                    <Input value={searchTime.map(i => i['_d'].toISOString().slice(5, 10)).join(" ~ ")} />
                    <RangePicker allowClear="false" onChange={this.searchTime} value={searchTime} />
                  </Form.Item>
                  <Form.Item label="部门">
                    <Input />
                  </Form.Item>
                  <Form.Item label="员工">
                    <Input />
                  </Form.Item>
                  <Form.Item>
                    <Tag color="#f59131" onClick={this.search}>查询</Tag>
                  </Form.Item>
                </Form>
              </div>
              <div className="line" ref="line"></div>
            </div>
        }
      </div>
    );
  }
  search = async () => {
    let { dataSrc, myChart, searchTime } = this.state
    if (searchTime.length) {
      let res = await axios.post(dataSrc, { val: searchTime })
      this.setState({
        line: res.data.data
      }, () => {
        this.setOptions(myChart)
      })
    }
  }
  searchTime = (val) => {
    this.setState({
      searchTime: val
    })
  }
  componentDidMount() {
    this.changeFilterInd(0, config[0])
  }
  moreColumns = (checked) => {
    let { columns } = this.state
    let columnsArr = columns.filter(i => !i.isChecks)
    checked.forEach(i => {
      columnsArr.push(i)
    })
    this.setState({
      columns: columnsArr
    })
  }
  changeFilterInd = async (i, item) => {
    if (i === 0) {
      let newState = {
        columns: item.columns || [],
        dataSrc: item.dataSrc
      }
      if (!this.state.line.length) {
        let res = await axios.post(item.dataSrc)
        newState.line = res.data.data
      }
      this.setState(newState, () => {
        let myChart = echarts.init(this.refs.line)
        this.setOptions(myChart)
        this.setState({
          myChart
        })
      })
    } else {
      let { length, list } = await this.getList(1, item.dataSrc)
      this.state.myChart.dispose()
      this.setState({
        columns: item.columns || [],
        checks: item.checks || [],
        page: 1,
        dataSrc: item.dataSrc,
        list,
        length
      })
      if (this.refs.choose) {
        this.refs.choose.setState({
          index: 0
        })
      }
    }
  }
  setOptions(myChart) {
    let { line } = this.state
    myChart.setOption({
      xAxis: {
        type: 'category',
        data: line.map(i => new Date(i.date).toISOString().slice(5, 10)),
        axisTick: {
          show: false
        },
        boundaryGap: false,
        axisLine: {
          show: false
        },
        axisLabel: {
          interval: 0,
          rotate: 30,
          align: "center",
          verticalAlign: "top",
          margin: 16
        }
      },
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          let arr = params[0].axisValue.split("-")
          return `${arr[0]}月${arr[1]}日<br>出勤率：${params[0].value * 20}%`
        }
      },
      backgroundColor: "#fff",
      yAxis: {
        type: 'category',
        data: [0, '20%', '40%', '60%', '80%', '100%'],
        boundaryGap: false,
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            width: 2,
            color: '#f4f4f4'
          }
        }
      },
      series: [{
        data: line.map(i => i.normal / 20),
        type: 'line',
        smooth: true
      }],
      title: {
        text: "考勤正常率统计",
        textStyle: {
          fontWeight: "normal",
          lineHeight: 68
        },
        left: "center"
      },
      color: ["#f1932f"],
      grid: {
        left: '3%',
        right: '4%',
        bottom: 30,
        top: 68,
        containLabel: true
      }
    })
  }
  change = (item) => {
    this.filterList(item.section)
  }
  chooseTime = (val) => {
    this.filterList(val.map(i => i["_d"] * 1))
  }
  async filterList(section) {
    let { page, dataSrc } = this.state
    let res = await axios.post(dataSrc + "/filter", {
      page,
      limit: 10,
      section
    })
    let { length, list } = res.data
    this.setState({
      length, list, page: 1
    })
  }
  changepage = async (page, pageSize) => {
    let { length, list } = await this.getList(page)
    this.setState({
      page, length, list
    })
  }
  async getList(page, reqSrc) {
    let { dataSrc } = this.state
    let res = await axios.post(reqSrc ? reqSrc : dataSrc, {
      page,
      limit: 10
    })
    return res.data
  }
}