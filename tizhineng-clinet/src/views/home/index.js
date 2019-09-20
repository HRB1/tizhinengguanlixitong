import React, { Component } from 'react'
import Calendar from './components/calendar' //日历
import Tab from './components/tab'  //tab切换
import Attendance from './components/attendance' // 考勤分析
import Daily from './components/daily' // 日报
import Customer from './components/customer' //客户
import Activity from './components/activity' //活动数据
import { connect } from "react-redux"
import './index.scss'

class home extends Component {

    render() {
        let { user } = this.props;
        return (
            <div className="wrapper">
                <div className="left">
                    <img className="userImg" src={require('../../static/images/user.jpg')} alt=""/>
                    <div>
                        <p> Hi,{user.userName}</p>
                        <p>岗位：{user.identityName}</p>
                        <p>总积分：2000</p>
                        <p>积分排名：100/2500</p>
                    </div>
                </div>
                <div className="right-main">
                    {
                        user.identityName === "老师" ?
                            <div className="right" style={{ height: "820px" }}>
                                <div className="date">
                                    <div className="rgt-item calendar"><Calendar /></div>
                                    <div className="rgt-item tab"><Tab /></div>
                                </div>
                                <div className="rgt-item Attendance"><Attendance /></div>
                                <div className="rgt-item"><Daily /></div>
                                <div className="rgt-item"><Customer /></div>
                                <div className="rgt-item"><Activity /></div>
                            </div>
                            :
                            <div className="right">
                                <div className="rgt-item Attendance"><Attendance /></div>
                                <div className="rgt-item"><Daily /></div>
                                <div className="rgt-item"><Customer /></div>
                                <div className="rgt-item"><Activity /></div>
                            </div>
                    }
                </div>
            </div>
        )
    }
}
export default connect(state => {
    return {
        user: state.user
    }
})(home)
