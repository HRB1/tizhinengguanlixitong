import React, { Component } from "react";
import { Upload, Button, message, Icon, Modal } from "antd";
import { downLoadXlsx } from "@/api/management.js";
export default class operation extends Component {
  state = {
    visible: false
  };
  render() {
    let { showDelbtn,handleDelete,edit} = this.props;
    return (
      <div className="operation">
        <Button className="newAdd" onClick={this.showModal}>
          <Icon type="form" />
          新增
        </Button>
        <Button className="newAdd" onClick={showDelbtn}>
          <Icon type="edit" />
          {edit?'取消编辑':'编辑'}
        </Button>
        <Button className="delete" onClick={handleDelete}>
          <Icon type="rest" />
          删除
        </Button>
        <Upload
          className="upload"
          beforeUpload={this.beforeUp.bind(this)}
          customRequest={this.getFileObj}
          showUploadList={false}
        >
          <Button className="in">
            <Icon type="cloud-upload" />
            导入
          </Button>
        </Upload>
        <Button className="out" onClick={() => this.exprotXlsx()}>
          <Icon type="cloud-download" />
          导出
        </Button>
        <Button className="download" onClick={() => this.downLoadXlsxs()}>
          <Icon type="download" />
          下载初始模板
        </Button>
        <Modal
          title="添加档案"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="添加"
          cancelText="取消"
        >
          {this.props.children}
        </Modal>
      </div>
    );
  }
  //添加框
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  //添加确认
  handleOk = () => {
    let {staffName="",
      department="",
      position="",
      tel="",
      address=""}=this.props;
    if(staffName&&department&&position&&tel&&address){
      this.props.addfn();
      this.setState({
        visible: false
      });
    }else{
      message.error(`请将信息填写完整`);
    }
  };
  //添加取消
  handleCancel = ()=> {
    this.props.closes();
    this.setState({
      visible: false,
    });
  };
  //上传之前
  beforeUp(file) {
    let type = ["xls", "xlsx"];
    let ind = file.name.lastIndexOf(".");
    let str = file.name.substr(ind + 1);
    if (!type.includes(str)) {
      message.error(`只能导入${[...type]}格式文件`);
      return false;
    }
    message.success(`文件导入成功`);
    return true;
  }
  //导入文件
  getFileObj = event => {
    let { file } = event;
    let formData = new FormData();
    formData.append("file", file);
    this.props.importXls(formData);
  };
  //下载
  downLoadFn(url, data) {
    let filename = "staffList";
    downLoadXlsx(url, {
      ...data
    }).then(res => {
      const a = document.createElement("a");
      //URL.createObjectURL用于创建 URL 的 File 对象、Blob 对象。​
      a.href = window.URL.createObjectURL(
        new Blob([res])
      );
      a.style.display = "none";
      a.setAttribute("download", filename + ".xlsx");
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  }
  //下载模板
  downLoadXlsxs() {
    let filename = "staffList";
    this.downLoadFn("/management/exportXlsx/original", { filename });
  }
  //导出模板
  exprotXlsx() {
    let { checkedarr } = this.props;
      if (checkedarr.length) {
        this.downLoadFn("/management/exportXlsx/data", {
          data: JSON.stringify(checkedarr)
        });
      } else {
        message.warning(`请选择导出的内容`);
      }
  }
}
