import React, { Component } from 'react'
import { Input,Button,Table,Modal } from 'antd';
import Opertion from "../component/operation"
const {confirm} =Modal;
export default class index extends Component {
   state={ columns: [
    {
      title: "姓名",
      dataIndex: "name",
      className: "listOne"
    },
    {
      title: "序号",
      dataIndex: "xh"
    },
    {
      title: "部门",
      dataIndex: "bm"
    },
    {
      title: "职位",
      dataIndex: "zw",
    },
    {
      title: "负责班级",
      dataIndex: "fzbj"
    },
    {
      title: "幼儿园",
      dataIndex: "yry"
    },{
      title:"总课时(小时)",
      dataIndex:"zks"
    },{
      title:"课时费(元)",
      dataIndex:"ksf"
    },{
      title:"总课时费(元)",
      dataIndex:"zksf"
    }
  ],
  data: [
    {
      key: "1",
      name: "John Brown",
      xh: 32,
      bm: "技术部门",
      zw:"项目经理",
      fzbj:"1701a",
      yry:"八维幼儿园",
      zks:"152312131",
      ksf:"1000",
      zksf:"100000"
    }
  ],};
  render() {
    let {columns,data}=this.state;
    return (
      <div className="yggl_wrap">
        <h2>代课费管理</h2> 
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
          <Table columns={columns} dataSource={data} bordered  size="middle" />
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
