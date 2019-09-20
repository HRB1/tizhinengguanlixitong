import React from 'react';
import "./index.scss"

class Index extends React.Component{
  constructor(props){
		super(props);
		this.state={
      tabActiveIndex: 0,
      list: [
        {
          time:"09：00-11：00",
          kc:"体育课",
          yry:"蓝天幼儿园",
          bj:"大班-苗苗班"
        },
        {
          time:"09：00-11：00",
          kc:"体育课",
          yry:"蓝天幼儿园",
          bj:"大班-苗苗班"
        },
        {
          time:"09：00-11：00",
          kc:"体育课",
          yry:"蓝天幼儿园",
          bj:"大班-苗苗班"
        },
        {
          time:"09：00-11：00",
          kc:"体育课",
          yry:"蓝天幼儿园",
          bj:"大班-苗苗班"
        },
        {
          time:"09：00-11：00",
          kc:"体育课",
          yry:"蓝天幼儿园",
          bj:"大班-苗苗班"
        }
      ]
		}
	}

	render(){
		let {
      tabActiveIndex,
      list
    } = this.state;
		return(
            <div className="tab-wrap">
                <div className="header">
                    <div className={"h-item " + (tabActiveIndex === 0 ? 'active': '')} onClick={this.handleTabClick.bind(this, 0)}>											
                        <span className="tab-text">本日计划</span>
                    </div>
                    <div className={"h-item " + (tabActiveIndex === 1 ? 'active': '')} onClick={this.handleTabClick.bind(this, 1)}>								
                        <span className="tab-text">本周计划</span>
                    </div>
                    <div className={"h-item " + (tabActiveIndex === 2 ? 'active': '')} onClick={this.handleTabClick.bind(this, 2)}>								
                        <span className="tab-text">统计计划</span>
                    </div>
                </div>
                <div className="content">
                    <div className={"view " + (tabActiveIndex === 0 ? 'active': '')}>
                        <table className="mbox">
                        <thead>
                          <tr>
                            <th>时间</th>
                            <th>课程/活动</th>
                            <th>园所</th>
                            <th>班级</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            list.length > 0 && list.map((v,i) => {
                              return <tr key={i}>
                            <td>{v.time}</td>
                            <td>{v.kc}</td>
                            <td>{v.yry}</td>
                            <td>{v.bj}</td>
                          </tr>
                            })
                          }
                        </tbody>
                        </table>
                    </div>
                    <div className={"view " + (tabActiveIndex === 1 ? 'active': '')}>
                        <table className="mbox">
                        <thead>
                          <tr>
                            <th>时间</th>
                            <th>课程/活动</th>
                            <th>园所</th>
                            <th>班级</th>
                          </tr>
                        </thead>
                        <tbody>
                        {
                          list.length > 0 && list.map((v,i) => {
                            return <tr key={i}>
                          <td>{v.time}</td>
                          <td>{v.kc}</td>
                          <td>{v.yry}</td>
                          <td>{v.bj}</td>
                        </tr>
                          })
                        }
                        </tbody>
                        </table>
                    </div>
                    <div className={"view " + (tabActiveIndex === 2 ? 'active': '')}>
                        <table className="mbox">
                    <thead>
                      <tr>
                        <th>时间</th>
                        <th>课程/活动</th>
                        <th>园所</th>
                        <th>班级</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                      list.length > 0 && list.map((v,i) => {
                        return <tr key={i}>
                      <td>{v.time}</td>
                      <td>{v.kc}</td>
                      <td>{v.yry}</td>
                      <td>{v.bj}</td>
                    </tr>
                      })
                    }
                    </tbody>
                    </table>
                    </div>
                </div>
            </div>
		)
	}
}

Object.assign(Index.prototype, {
	handleTabClick(tabActiveIndex) {
		this.setState({
			tabActiveIndex
		})
	}
})


export default Index;