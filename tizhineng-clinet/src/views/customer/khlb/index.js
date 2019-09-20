import React, { Component } from 'react'
import { Tag, Icon, Pagination, Table, Popconfirm } from 'antd';
import axios from "axios"
import columns from "@/config/customer/khlb"
import Tab from "@/components/tab/index"
import "./mock/khlb"
import "./styles/khlb.scss"

export default class index extends Component {
  state = {
    tags: [
      {
        back: "#7dba1f",
        iconType: "form",
        title: "新增",
        clickFn: () => { }
      }, {
        back: "#55aae0",
        iconType: "edit",
        title: "修改",
        clickFn: () => { }
      }, {
        back: "#fe9901",
        iconType: "delete",
        title: "删除",
        clickFn: this.delete.bind(this),
        Popconfirm: {
          title: "确定删除这些客户？"
        }
      }, {
        back: "#dd6360",
        iconType: "solution",
        title: "分配",
        clickFn: () => { }
      }, {
        back: "#61c774",
        iconType: "smile",
        title: "设置",
        clickFn: () => { }
      }
    ],
    filter: [
      {
        title: "全部客户",
        filter: "all",
        key: "all"
      }, {
        title: "合作客户",
        filter: "ifJoin",
        key: 1
      }, {
        title: "待扩展客户",
        filter: "ifJoin",
        key: -1
      }, {
        title: "停止合作客户",
        filter: "ifJoin",
        key: 0
      }
    ],
    list: [],
    filterIndex: 0,
    checked: [],
    page: 1,
    length: 1
  }
  rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      this.setState({
        checked: selectedRows
      })
    }
  }
  render() {
    let { tags, filter, page, length, list } = this.state
    return (
      <div className="khlb">
        <div className="handle">
          {
            tags.map((i, ind) => i.Popconfirm ? <Popconfirm
              key={ind}
              title={i.Popconfirm.title}
              okText="确定"
              cancelText="取消"
              onConfirm={i.clickFn}
              icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
            >
              <Tag color={i.back} key={ind}><Icon type={i.iconType} />{i.title}</Tag>
            </Popconfirm> : <Tag color={i.back} key={ind} onClick={i.clickFn}><Icon type={i.iconType} />{i.title}</Tag>)
          }
        </div>
        <Tab filter={filter} changeFilterInd={this.changeFilterInd} />
        <div className="tableBox">
          <Table rowSelection={this.rowSelection} dataSource={list} columns={columns} bordered={true} pagination={false} />
          <div className="pagination">
            <Pagination total={length} onChange={this.changepage} current={page} />
          </div>
        </div>
      </div>
    )
  }
  changepage = (page, pageSize) => {
    this.setState({
      page
    }, () => {
      this.getList()
    })
  }
  changeFilterInd = (ind) => {
    if (this.state.filterIndex !== ind) {
      this.setState({
        filterIndex: ind,
        page: 1
      }, () => {
        this.getList()
      })
    }
  }
  componentDidMount() {
    this.getList()
  }
  async delete() {
    let { page, checked, filter, filterIndex } = this.state
    if (checked.length) {
      let flag = Math.ceil((this.state.length - checked.length) / 10) < page
      if (flag) {
        page--
      }
      let res = await axios.post("/khlb/delete", {
        page,
        checked,
        limit: 10,
        filter: filter[filterIndex].filter,
        key: filter[filterIndex].key
      })
      let { length, list } = res.data
      this.setState({
        length, list, page
      })
    }
  }
  async getList() {
    let { page, filter, filterIndex } = this.state
    let res = await axios.post("/api/khlb", {
      page,
      limit: 10,
      filter: filter[filterIndex].filter,
      key: filter[filterIndex].key
    })
    let { length, list } = res.data
    this.setState({
      length, list
    })
  }
}