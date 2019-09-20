import React, { Component } from 'react';
import { Button, DatePicker, Icon, Select } from 'antd';
import '@/components/jfHeader/css/index.scss'
const { RangePicker } = DatePicker;
const { Option } = Select;
function onChange(date, dateString) {
    console.log(date, dateString);
}
function handleChange(value) {
    console.log(`selected ${value}`);
}
export default class head extends Component {
    static defaultProps = {
        time: true
    }
    static defaultProps = {
        open: true
    }
    static defaultProps = {
        text: "积分综合排序"
    }
    state = {
        flags: false,
    }
    render() {
        let { flag, list, time,open,text } = this.props
        let { flags } = this.state
        return (
            <div className="search-box">
                <div className="search">
                    <div className="boxs">
                        <Button size="small">导出</Button>
                        <div className="shs">
                            {
                                list.map(item => <i key={item.id}>{item.title}</i>)
                            }
                        </div>
                    </div>
                    <div className="time">
                        { time && <RangePicker onChange={onChange} allowClear="false" /> }
                        {!flag && <Button>{text}</Button>}
                    </div>

                  { open ? <div className="sea" >
                        {!flags ? <Button onClick={this.hold.bind(this, flags)}>展开查询 <Icon type="down" /> </Button>
                            : <Button onClick={this.hold.bind(this, flags)}>关闭查询 <Icon type="up" /> </Button>}
                    </div> 
                    : <div className="sea" >
                        
                    </div>
                }
                </div>
                {flags && <div className="search-text">
                    <div className="left">
                        <div className="top">
                            <div className="item">
                                <label htmlFor="客户类型:">客户类型:</label>
                                <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            </div>
                            <div className="item">
                                <label htmlFor="营销区域:">营销区域:</label>
                                <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            </div>
                            <div className="item">
                                <label htmlFor="客户经理:">客户经理:</label>
                                <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="item">
                                <label htmlFor="是否标注:">是否标注:</label>
                                <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            </div>
                            <div className="item">
                                <label htmlFor="时间选择:">时间选择:</label>
                                <RangePicker onChange={onChange} allowClear="true" />
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Button size="small" type="primary">查询</Button> 
                        <Button size="small">清除</Button>  
                    </div>
                </div>}
            </div>

        );
    }
    hold(flags) {
        this.setState({ flags: !flags })
    }
}
