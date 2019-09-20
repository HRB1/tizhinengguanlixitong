import React, { Component } from 'react'
import { Pagination, Table, Tag, Modal, DatePicker, Input, Form, message } from 'antd';
import axios from "axios"
import moment from "moment"
import columns from "@/config/customer/bfgl"
import "./mock/bfgl"
import "./styles/bfgl.scss"

export default class index extends Component {
  state = {
    list: [],
    page: 1,
    length: 1,
    showDialog: false,
    form: {
      name: "",
      content: "",
      higherUp: "",
      createAt: Date.now() * 1
    },
    confirmLoading: false
  }
  formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  }
  render() {
    let { page, length, list, showDialog, form, confirmLoading } = this.state
    return (
      <div className="bfgl">
        <div className="handle">
          <Tag color="#f59131" onClick={this.changeShow}>新增拜访客户</Tag>
          <Tag color="#dcdcdc">取消拜访客户</Tag>
        </div>
        <div className="tableBox">
          <Table dataSource={list} columns={columns} bordered={true} pagination={false} />
          <div className="pagination">
            <Pagination total={length} onChange={this.changepage} current={page} />
          </div>
        </div>
        <Modal
          title="新建拜访客户"
          visible={showDialog}
          onOk={this.add}
          cancelText="取消"
          okText="确定"
          confirmLoading={confirmLoading}
          onCancel={this.changeShow}
        >
          <Form {...this.formItemLayout}>
            <Form.Item label="拜访客户名称">
              <Input placeholder="请输入拜访客户名称" value={form.name} onChange={this.input.bind(this, "name")} />
            </Form.Item>
            <Form.Item label="计划拜访内容">
              <Input placeholder="请输入计划拜访内容" value={form.content} onChange={this.input.bind(this, "content")} />
            </Form.Item>
            <Form.Item label="拜访人">
              <Input placeholder="请输入拜访人" value={form.higherUp} onChange={this.input.bind(this, "higherUp")} />
            </Form.Item>
            <Form.Item label="计划拜访日期">
              <DatePicker onChange={this.inputDate} value={moment(form.createAt)} />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
  changeShow = () => {
    this.setState({
      showDialog: !this.state.showDialog,
      form: {
        name: "",
        content: "",
        higherUp: "",
        createAt: Date.now() * 1
      },
      confirmLoading: false
    })
  }
  input(attr, e) {
    let { form } = this.state
    form[attr] = e.target.value
    this.setState({
      form
    })
  }
  inputDate = (e) => {
    let { form } = this.state
    form.createAt = new Date(e["_d"]) * 1
    this.setState({
      form
    })
  }
  add = async () => {
    this.setState({
      confirmLoading: true
    })
    let res = await axios.post("/api/add", this.state.form)
    let { length, list } = res.data
    this.setState({
      length, list, page: 1
    })
    message.success('添加成功');
    this.changeShow()
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
    let res = await axios.post("/api/bfgl", {
      page,
      limit: 10
    })
    let { length, list } = res.data
    this.setState({
      length, list
    })
  }
}