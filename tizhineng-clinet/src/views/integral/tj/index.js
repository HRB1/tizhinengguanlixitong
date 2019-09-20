import React, { Component } from 'react';
import Header from '@/components/jfHeader/index'
import { Checkbox } from 'antd';
import columns from "@/config/jf/columntj"
import curlistdata from "@/mock/table/tabletj"
import tj from '@/config/jf/tj'
import list from '@/config/jf/tjlist'
import Table from '@/components/table/index'
function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}
export default class componentName extends Component {
  state={
    columns,
    tj,
    list,
    curlistdata
  }
  render() {
    let { columns, tj, list, curlistdata:{data}} = this.state
    return (
      <div className="el-wrap">
        <Header flag={false} list={list} time open />
        <div className="el-head">
          <p>
              <span>详细显示项:</span>
          </p>
          {
            tj.map(item => <Checkbox onChange={onChange} key={item.id} >{item.title}</Checkbox>)
          }
        </div>
        <Table columns={columns} data={data}/>
      </div>
    );
  }
}
