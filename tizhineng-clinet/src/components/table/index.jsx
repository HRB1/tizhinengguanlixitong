import React, { Component } from 'react';
import { Table, Pagination} from 'antd';
import '@/components/table/css/index.scss'
export default class Tables extends Component {
    state={
        limit:10
    }
  render() {
      let { columns, data } = this.props
    return (
        <div className="el-table">   
            <Table
                columns={columns}
                dataSource={data}
                pagination={{
                    showTotal: a => `共${a}条`
                }}
                // pagination={false}
                rowKey={record => record.id}
            />
            {/* <Pagination showQuickJumper defaultCurrent={2} total={500}  /> */}
        </div>
        
    );
  }
}
