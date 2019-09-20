import React, { Component } from 'react'
import list from '@/config/helper/navList'
import { Icon, Button, Select } from 'antd'
import charge from '@/config/helper/charge'
import Echartsline from '@/components/echarts/echartsLines'
import Echartspie from '@/components/echarts/echartsPie'
import line from '@/config/echarts/line'
const { Option } = Select;
function handleChange(value) {
    console.log(`selected ${value}`);
}
class All extends Component {
    state = {
        ind: 0,
        flag: false,
        data:{
            data: ['已出勤', '未出勤'],
            text: "出勤率",
            texts: "91%",
            already: 245,
            incomplete: 25,
        }
    }
    render() {
        let { ind, flag, data} = this.state
        return (
            <div className="el-wrap">
                <div className="type-heads">
                    <div className="btns">
                        {
                            list.map((item, index) => <span className={index === ind ? 'active' : ''} key={item.id} onClick={this.btn.bind(this, index)}>{item.title}</span>)
                        }
                    </div>
                    {!flag ? <Button onClick={this.hold.bind(this, flag)}>展开查询 <Icon type="down" /> </Button>
                        : <Button onClick={this.hold.bind(this, flag)}>关闭查询 <Icon type="up" /> </Button>}
                </div>
                {flag && <div className="show-text">
                    <div className="top">
                        <div className="item">
                            <label htmlFor="时间:">时间:</label>
                            <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                        </div>
                        <div className="item">
                            <label htmlFor="机构:">机构:</label>
                            <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                        </div>
                        <div className="item">
                            <label htmlFor="部门:">部门:</label>
                            <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                        </div>
                        <div className="item">
                            <label htmlFor="员工:">员工:</label>
                            <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="bottom">
                        <Button size="small" type="primary">查询</Button>
                        <Button size="small" className="clear">清除</Button>
                    </div>
                </div>}
                <div className="pie">
                    <div className="left">
                        <div className="title">
                            <p><span></span><b>考勤分析</b></p>
                        </div>
                        <div className="le-context">
                            <Echartspie data={data} />
                            <div className="el-detail">
                                <p className="already"><span></span> 已出勤 <em>{data.already}人</em></p>
                                <p className="incomplete"><span></span> 未出勤 <em>{data.incomplete}人</em></p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="right">
                        <div className="title">
                            <p><span></span><b>异常情况分析</b></p>
                            <em>今日数据</em>
                        </div>
                        <div className="le-context">
                            {
                                charge.map(item => <p key={item.id}><span></span> <b>{item.title}</b> <em>{item.num}人</em></p>)
                            }
                        </div>
                    </div>      
                </div>
                <div className="line">
                    <div className="title">
                        <p><span></span><b>考勤正常率统计</b></p>
                    </div>
                    <Echartsline color={"#f39033"} height={"340px"} data={line} />
                </div>
            </div>
        );
    }
    btn(index) {
        this.setState({ ind: index })
    }
    hold(flag) {
        this.setState({ flag: !flag })
    }
}
export default All