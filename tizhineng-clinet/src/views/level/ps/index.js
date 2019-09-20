import React, { Component } from 'react';
import list from '@/config/jb/list'
import navlist from '@/config/jb/jblist'
import Header from '@/components/jfHeader/index'
import columns from '@/config/jb/columnps'
import listData from '@/mock/table/tablekh'
import Typehead from '@/components/typeHead/index.jsx'
import Table from '@/components/table/index'
export default class componentName extends Component {
  state = {
    list,
    columns,
    navlist,
    listData
  }
  render() {
    let { list, columns, navlist, listData:{data} } = this.state
    return (
      <div className="el-wrap">
        <Typehead list={list} /> 
        <Header flag={true}  list={navlist} time open/>
        <Table columns={columns} data={data} />
      </div>
    )
  }
}
