import React from 'react'
import EchartsViews from './EchartsViews'
import '../../index.scss'

const Daily = () => (
    <div className="cloud-box">
        <div className="pb-m">
          <h3><span className="line">|</span>日报</h3>
          <small>
              <span className="current">本月</span>|<span>上月</span>
          </small>
        </div>
        <div className="cloud-item">
            <div className="lef"><EchartsViews /></div>
            <div className="rgt">
                <div className="ctr-item"><span>已交</span><span>23篇</span></div>
                <div className="ctr-item"><span>未交</span><span>0人</span></div>
                <div className="ctr-item"><span>应交</span><span>23篇</span></div>
            </div>
        </div>
    </div>
)

export default Daily
