import React, { Component } from 'react';
import Helpitem from '@/components/helper/item.jsx'
import list from '@/config/helper/list.js'
import Header from '@/components/jfHeader/index'
import listNav from '@/config/jf/tjlist'
import columns from '@/config/helper/columnzg'
import curlistdata from '@/mock/table/tablezg'
import Table from '@/components/table/index'
export default class componentName extends Component {
  state = {
    list,
    listNav,
    columns,
    curlistdata
  }
  render() {
    let { list, listNav, columns, curlistdata: { data } } = this.state
    return (
      <div className="el-wrap">
        <div className="el-photo">
          <div className="title">
            <span></span><b>最闪耀主管</b>
          </div>
          <div className="context">
            {
              list.map(item => <Helpitem key={item.id} url={item.url}
                name={item.name}
                area={item.area}
                title={item.title}
              />)
            }

          </div>
        </div>
        <div className="el-title">
          <div className="title">
            <span></span><b>主管竞争力排名</b>
          </div>
          <Header list={listNav} open={false} time={true} text={"综合实力排名"} />
          <Table columns={columns} data={data} />
        </div>
      </div>
    );
  }
}
