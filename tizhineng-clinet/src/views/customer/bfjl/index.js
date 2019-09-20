import React, { Component } from 'react'
import { Table, DatePicker, Pagination } from 'antd';
import Choose from "@/components/choose/index"
import axios from "axios"
import "./mock/bfjl"
import "./styles/bfjl.scss"

const { RangePicker } = DatePicker;

export default class index extends Component {
  columns = [
    {
      title: '拜访时间',
      dataIndex: 'time',
      render(text, record) {
        return new Date(record.time).toISOString().slice(0, 10)
      }
    }, {
      title: '拜访人部门',
      dataIndex: 'section'
    }, {
      title: '拜访人',
      dataIndex: 'execute'
    }, {
      title: '拜访客户',
      dataIndex: 'client'
    }, {
      title: '拜访位置',
      dataIndex: 'position'
    }, {
      title: '位置偏移（米）',
      dataIndex: 'skew'
    }, {
      title: '拜访内容',
      dataIndex: 'content'
    }, {
      title: '拜访总结',
      dataIndex: 'summary'
    }, {
      title: '照片查看',
      dataIndex: 'images',
      render(text, record) {
        function showImages(images) {
          console.log(images)
        }
        return <a href="javascrips:;" onClick={showImages.bind(null, record.images)}>点击查看</a>
      }
    },
  ]
  state = {
    page: 1,
    length: 1,
    list: []
  }
  render() {
    let { page, length, list } = this.state
    return (
      <div className="bfjl">
        <p className="choose">
          <span className="out">导出</span>
          <span className="title">拜访日期：</span>
          <Choose change={this.change} data="time" />
          <RangePicker allowClear="false" onChange={this.chooseTime} />
        </p>
        <div className="tableBox">
          <Table dataSource={list} bordered={true} columns={this.columns} pagination={false} />
          <div className="pagination">
            <Pagination total={length} onChange={this.changepage} current={page} />
          </div>
        </div>
      </div>
    )
  }
  change = (item) => {
    this.filterList(item.section)
  }
  chooseTime = (val) => {
    this.filterList(val.map(i => i["_d"] * 1))
  }
  async filterList(section) {
    let { page } = this.state
    let res = await axios.post("/api/bfjl/filter", {
      page,
      limit: 10,
      section
    })
    let { length, list } = res.data
    this.setState({
      length, list, page: 1
    })
  }
  changepage = (page, pageSize) => {
    this.setState({
      page
    }, () => {
      this.getList()
    })
  }
  componentDidMount() {
    this.getList()
  }
  async getList() {
    let { page } = this.state
    let res = await axios.post("/api/bfjl", {
      page,
      limit: 10
    })
    let { length, list } = res.data
    this.setState({
      length, list
    })
  }
}
