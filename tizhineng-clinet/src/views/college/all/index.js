import React, { Component } from 'react';
import list from '@/config/college/list';
import Typehead from '@/components/typeHead/index.jsx'
import { DatePicker, Form, Input, Pagination } from 'antd';
import Collegeitem from '@/components/collegeItem/index'
import '@/mock/allData/index'
import axios from 'axios'
const { RangePicker } = DatePicker;
function onChange(date, dateString) {
    console.log(date, dateString );
}
export default class componentName extends Component {
    state = {
        list,
        val: "",
        listData:[],
        limit:8,
        pageId:1,
        flag:false,
        url:'',
    }
    render() {
        let { list, val, listData, flag, url} = this.state
        return (
            <div className="el-wrap">
                {flag && <div className="shade" onClick={(e)=>{
                    if (e.target && e.target.matches('div')) {
                        this.setState({flag:!flag})
                    }
                }}>
                    <img src={url} alt=""/>
                </div>}
                <Typehead list={list} />
                <div className="search">
                    <div className="box">
                        <div className="sh">
                            <i>今日</i>
                            <i>本周</i>
                            <i>本月</i>
                        </div>
                    </div>
                    <div className="time">
                        <RangePicker onChange={onChange} allowClear="false" />
                    </div>

                    <Form.Item>
                        <Input placeholder="搜索" value={val} onChange={this.changeFn.bind(this)} />
                    </Form.Item>
                </div>
                <div className="el-content">
                    <div className="heads">
                        <p><b>综合业务</b><span>活动</span><span>招商</span><span>产品营销</span></p>
                    </div>
                    <div className="context">
                        <Collegeitem list={listData} handle={this.childFn.bind(this)} />
                        <Pagination showQuickJumper defaultCurrent={1} total={20} onChange={this.pagFn.bind(this)} defaultPageSize={8} />
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount(){
        this.getData()
    }   
    getData(){
        let { pageId, limit } = this.state
        axios.post('/allData', {
            pageId, limit
        }).then(res => {
            this.setState({ listData: res.data.data })
        })
    }
    changeFn(e) {
        this.setState({ val: e.target.value })
        console.log(this.state.val)
    }
    pagFn(pageNumber){
        this.setState({ pageId: pageNumber})
        this.getData()
    }
    childFn(value) {
        
        let{img,flag} = value
        this.setState({url:img,flag:flag})
    }
}
