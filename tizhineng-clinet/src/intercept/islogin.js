import React, { Component } from 'react'
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"

export default (Com) => {
    class isLogin extends Component {
        render() {
            let { user, location: { pathname }} = this.props
            if (user.userName === "") {
                return <Redirect to="/login" />
            } else if (pathname==="/noAuthority"||user.limitView.find(i => (pathname==="/"?"home":pathname).includes(i.routerId))) {
                return <Com {...this.props} />
            } else {
                return <Redirect to="/noAuthority" />
            }
        }
    }
    return connect(state => ({
        user: state.user
    }))(isLogin)
}
