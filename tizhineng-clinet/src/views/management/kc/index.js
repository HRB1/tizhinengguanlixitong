import React, { Component } from 'react'
import { Input, Button, Table, Modal } from "antd";
import Opertion from "../component/operation"
const { confirm } = Modal;
export default class index extends Component {
   state={columns :[
    {
      title: '序号',
      dataIndex: 'xh',
      className:"listOne"
    },
    {
      title: '幼儿园名称',
      dataIndex: 'yeymc',
    },
    {
      title: '班级',
      dataIndex: 'bj',
    },{
      title: '体能老师',
      dataIndex: 'tnls',
    },{
      title: '上课时间',
      dataIndex: 'sksj',
    },{
      title: '上课地点',
      dataIndex: 'skdd',
    },{
      title: '备注',
      dataIndex: 'bz',
    },
  ],
  datas: [
    {
      key: '1',
      xh: '001',
      yeymc: "阳光幼儿园",
      bj: '1701a',
      tnls:"吴磊",
      sksj:"2019.6.23",
      skdd:"大班",
      bz:""
    }
  ]};
  render() {
    let {columns,datas}=this.state;
    return (
      <div className="yggl_wrap">
        <h2>课程管理</h2> 
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
