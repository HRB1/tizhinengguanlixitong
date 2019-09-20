import React from 'react'
import EchartsViews from './EchartsViews'
import '../../index.scss'

const Attendance = () => (
    <div className="cloud-box">
        <div className="pb-m">
          <h3><span className="line">|</span>考勤分析</h3>
          <small><span className="current">本月</span>|<span>上月</span></small>
        </div>
      <div className="cloud-item">
      <div className="lef"><EchartsViews /></div>
      <div className="rgt">
          <div className="ctr-item"><span>出勤</span><span>0次</span></div>
          <div className="ctr-item"><span>出差</span><span>0次</span></div>
          <div className="ctr-item"><span>外出</span><span>0小时</span></div>
      </div>
      <div className="rgt">
          <div className="ctr-item"><span>请假</span><span>0次</span></div>
          <div className="ctr-item"><span>迟到</span><span>0次</span></div>
          <div className="ctr-item"><span>加班</span><span>0小时</span></div>
      </div>
</div>
    </div>
)

export default Attendance
