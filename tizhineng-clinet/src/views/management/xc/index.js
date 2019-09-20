import React, { Component } from 'react'
import { Input, Button, Table, Modal } from "antd";
import Opertion from "../component/operation"
const { confirm } = Modal;
export default class index extends Component {
   state={columns :[
    {
      title: '姓名',
      dataIndex: 'name',
      className:"listOne"
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ],
  datas: [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
      {
      key: '2',
      name: 'John Brown1',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
    key: '3',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
      {
      key: '4',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }
  ]};
  render() {
    let {columns,datas}=this.state;
    return (
      <div className="yggl_wrap">
        <h2>薪酬管理</h2> 
        <div className="yggl_serch">
            <Input className="" size="small" placeholder="small "/><Button>查询</Button>
        </div>
        <div className="operation">
        <Opertion 
          showConfirm={this.showConfirm.bind(this)}
          addfn={this.addfn.bind(this)}
          closes={this.closes.bind(this)}>
          添加的内容 
          </Opertion>
        </div>
        <div className="yggl_list">
            <Table columns={columns} dataSource={datas} bordered  size="middle" />
        </div>
      </div>
    )
  }
    //确认框
    showConfirm = () => {
      confirm({
        title: "删除信息",
        content: "确定删除本条信息吗?",
        okText:"确定",
        cancelText:"取消",
        onOk() {
          console.log("OK");
        },
        onCancel() {
          console.log("Cancel");
        }
      });
    };
    addfn(){
      console.log("点击添加")
    }
    closes(){
      console.log("点击关闭")
    }
}
