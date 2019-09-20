import React from 'react'
import '../../index.scss'

const Customer = () => (
    <div className="cloud-box">
    <div className="pb-m">
        <h3><span className="line">|</span>客户（包含下属客户）</h3>
        <small><span className="current">本月</span>|<span>上月</span></small>
    </div>
    <div className="cloud-item">
        <div className="lef">300</div>
        <div className="rgt">
            <div className="ctr-item"><span>客户总数</span><span>300家</span></div>
            <div className="ctr-item"><span>新增客户数</span><span>50家</span></div>
            <div className="ctr-item"><span>拜访客户数</span><span>30家</span></div>
        </div>
    </div>
    </div>
)

export default Customer
