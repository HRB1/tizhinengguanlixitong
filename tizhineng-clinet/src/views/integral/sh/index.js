import React, { Component } from 'react';
import columns from '@/config/jf/columnsh'
import list from '@/config/jf/list'
import Header from '@/components/jfHeader/index'
import listData from '@/mock/table/tablesh'
import Typehead from '@/components/typeHead/index.jsx'
import navlist from '@/config/jf/shlist'
import Table from '@/components/table/index'
export default class componentName extends Component {
  state = {
    list,
    columns,
    listData: listData.data,
    navlist
  }
  render() {
    let { list, columns, listData,navlist} = this.state
    return (
      <div className="el-wrap">
        <Typehead list={list} />
        <Header flag={true} list={navlist} time open/>
        <Table columns={columns} data={listData} />
      </div>
      
    );
  }
  componentDidMount(){
  }
}
