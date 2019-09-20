import React, { Component } from "react";
import { Input, Button, Table, Pagination, message } from "antd";
import Opertion from "../component/operation"; //按钮操作
import { importXlsx, addDalist, deleteDalist } from "@/api/management.js";
import { bindActionCreators } from "redux";
import columns from "@/config/management/columns.js";//表头
import * as allAction from "@/store/management/management.action";
import { connect } from "react-redux";
class Archives extends Component {
  state = {
    pageid: 0,
    limit: 10,
    //编辑状态
    edit: false,
    //start添加的内容
    staffName: "",
    department: "",
    position: "",
    tel: "",
    address: "",
    serachVal: "",
    //end添加的内容
    //选中的每一项
    checkedarr: [],
  };
  render() {
    let {
      checkedarr,
      edit,
      staffName,
      department,
      position,
      tel,
      address
    } = this.state;
    let { alllist, allcount } = this.props;
    //表格复选框配置
    const rowSelection = {
      onChange: selectedRowKeys => {
        this.setStateCheckarr(selectedRowKeys);
      }
    };
    return (
      <div className="yggl_wrap">
        <h2>档案管理</h2>
        <div className="yggl_serch">
          <Input
            size="small"
            placeholder="请输入您查询内容 "
            onInput={e => {
              this.setState({
                serachVal: e.target.value
              });
            }}
          />
          <Button onClick={() => {}}>查询</Button>
        </div>
        {/* start 操作 */}
        <Opertion
          showDelbtn={this.showDelbtn.bind(this)}
          addfn={this.addfn.bind(this)}
          closes={this.closes.bind(this)}
          importXls={this.importFn.bind(this)}
          handleDelete={this.handleDelete.bind(this)}
          edit={edit}
          checkedarr={checkedarr}
          staffName={staffName}
          department={department}
          position={position}
          tel={tel}
          address={address}
        >
          {/* start 添加信息操作 */}
          <div>
            <span>姓名：</span>
            <Input
              value={staffName}
              onChange={e => this.setState({ staffName: e.target.value })}
              type="text"
              placeholder="请输入名字"
            />
            <span>职位：</span>
            <Input
              value={department}
              onChange={e => this.setState({ department: e.target.value })}
              type="text"
              placeholder="请输入职位名称"
            />
            <span>位置：</span>
            <Input
              value={position}
              onChange={e => this.setState({ position: e.target.value })}
              type="text"
              placeholder="请输入位置"
            />
            <span>电话：</span>
            <Input
              value={tel}
              onChange={e => this.setState({ tel: e.target.value })}
              type="text"
              placeholder="请输入手机号"
            />
            <span>地址：</span>
            <Input
              value={address}
              onChange={e => this.setState({ address: e.target.value })}
              type="text"
              placeholder="请输入现居住地址"
            />
          </div>
          {/* end 添加信息操作 */}
        </Opertion>
        {/* end 操作 */}
        <div className="yggl_list">
          <Table
            columns={columns}
            pagination={false}
            dataSource={alllist.length ? alllist : null}
            bordered
            size="middle"
            rowSelection={edit ? rowSelection : null}
          />
        </div>
        <Pagination
          defaultCurrent={1}
          total={allcount}
          onChange={this.pageChange}
        ></Pagination>
      </div>
    );
  }
  componentDidMount() {
    let { pageid, limit } = this.state;
    this.getall(pageid, limit);
  }
  //获取初始数据
  getall(pageid, limit) {
    this.props.getDatalist(pageid, limit);
  }
  //清空数据
  dellist() {
    this.setState({
      staffName: "",
      department: "",
      position: "",
      tel: "",
      address: ""
    });
  }
  //添加
  async addfn() {
    let {
      staffName,
      department,
      position,
      tel,
      address,
      pageid,
      limit
    } = this.state;
    let res = await addDalist({
      staffName,
      department,
      position,
      tel,
      address
    });
    if (res.code) {
      message.success("添加成功");
      await this.getall(pageid, limit);
      this.dellist();
    } else {
      message.error("添加失败");
    }
  }
  //关闭
  closes() {
    this.dellist();
  }
  //点击编辑按钮,显示多选框。
  showDelbtn() {
    this.setState({ edit: !this.state.edit });
    //取消编辑的时候清空选中的数据
    if (this.state.edit) {
      this.setState({ checkedarr: [] });
    }
  }
  //获取选中的id，checkbox每一项
  setStateCheckarr(arr) {
    this.setState({ checkedarr: arr });
  }
  //导入档案
  importFn(file) {
    let { pageid, limit } = this.state;
    importXlsx(file).then(res => {
      this.props.importList(res.data);
      this.getall(pageid, limit);
    });
  }
  //删除信息
  async handleDelete() {
    let {checkedarr, pageid, limit} = this.state;
    if (!checkedarr.length) {
      message.warning("请选择要删除的内容");
      return;
    }
    let res = await deleteDalist({ id: JSON.stringify(checkedarr) });
    if (res.code) {
      message.success("删除成功");
      //删除当前数据的列表,视图与后台数据是同步的
      await this.props.del(checkedarr);
      this.setState({ checkedarr: []});
      //保证每页都有10条
      if (this.props.alllist.length!==limit) {
          //当所有数据为空时在请求数据到上一页
        if (!this.props.alllist.length) {
          if(pageid === 0){
            this.setState({ pageid: pageid });
          }else{
            this.setState({ pageid: pageid-- });
          }
        }
        this.setState({ pageid: pageid });
        this.getall(pageid, limit);
      }
    }
  }
  //分页
  pageChange = page => {
    this.setState({ pageid: page - 1 }, () => {
      let { pageid, limit } = this.state;
      this.getall(pageid, limit);
    });
  };
}

export default connect(
  state => {
    return state.management;
  },
  dispatch => bindActionCreators(allAction, dispatch)
)(Archives);
