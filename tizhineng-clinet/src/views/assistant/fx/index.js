import React, { Component } from 'react';
import Navlist from '@/config/kh/list'
import Header from '@/components/jfHeader/index'
import columns from '@/config/helper/index'
import listData from '@/mock/table/tablefx'
import Echartsline from '@/components/echarts/echartsLine'
import Echartsbar from '@/components/echarts/echartsBar'
import line from '@/config/echarts/line'
import lineData from '@/config/echarts/line1'
import bar from '@/config/echarts/bar'
import Table from '@/components/table/index'
export default class componentName extends Component {
    state = {
        list: [
            {
                title: '客户总统计',
                id: '1',
            },
            {
                title: '客户详细统计',
                id: '2',
            }
        ],
        Navlist,
        ind: 0,
        listData,
        line,
        bar,
        lineData
    }
    render() {
        let { list, ind, Navlist, listData: { data }, line, bar, lineData} = this.state
        return (
            <div className="el-wrap">
                <div className="type-head">
                    {
                        list.map((item, index) => <span className={index === ind ? 'active' : ''} key={item.id} onClick={this.btn.bind(this, index)}>{item.title}</span>)
                    }
                </div>
                {ind === 0 && <div className="helper-content">
                    <div className="helper-main">
                        <div className="items">
                            <div className="title">
                                <p><span></span><b>当前客户总数</b></p>
                                <span className="ts">今日数据</span>
                            </div>
                            <div className="he-content">
                                <p className="num"><b>98</b><span>个</span></p>
                                <p className="ts">注：包含我和我的下属所有客户</p>
                            </div>
                        </div>
                        <Echartsline color={"#f4b36f"} flag data={lineData} text={"新增客户数"} />
                        <Echartsline color={"#3797fd"} flag data={line} text={"丢失客户数"} />
                        <Echartsbar data={bar} text={"客户满意度"} />
                    </div>

                </div>}
                {ind === 1 && <div className="helper-content">
                    <Header list={Navlist} flag={true} time={false} open/>
                    <Table columns={columns} data={data} />
                </div>}
            </div>
        );
    }
    btn(index) {
        this.setState({ ind: index })
    }
}
