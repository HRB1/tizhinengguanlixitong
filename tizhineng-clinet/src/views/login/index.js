import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import css from "./styles/login.module.scss"
import "./styles/login.scss"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as allAction from "@/store/user/user.actions"

class Login extends Component {
  state = {
    userName: window.localStorage.getItem("tzn_user_name") || "",
    userPwd: window.localStorage.getItem("tzn_user_pwd") || "",
    checked: !!window.localStorage.getItem("tzn_user_pwd")
  }
  render() {
    let { userName, userPwd, checked } = this.state
    let { getFieldDecorator } = this.props.form
    return (
      <div className={css.wrap}>
        <div className={css.content}>
          <Form className="login-form">
            <Form.Item>
              {getFieldDecorator('userName', {
                initialValue: userName,
                rules: [{
                  required: true,
                  message: '用户名不能为空'
                },
                {
                  min: 5, max: 10,
                  message: '长度不在范围内'
                },
                {
                  pattern: new RegExp('^\\w+$', 'g'),
                  message: '用户名必须为字母或者数字'
                }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="请输入用户名"
                  size="large"
                  onChange={this.changeValue.bind(this, 'userName')}
                />
              )}
            </Form.Item>
            <Form.Item>
              {
                getFieldDecorator('userPwd', {
                  initialValue: userPwd,
                  rules: [{
                    required: true,
                    message: '密码不能为空'
                  }]
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="请输入密码"
                    size="large"
                    onChange={this.changeValue.bind(this, 'userPwd')}
                  />
                )
              }
            </Form.Item>
            <Form.Item className={`${css.chooes} chooes`}>
              <Checkbox checked={checked} onChange={this.check}>记住密码</Checkbox>
              <a className="login-form-forgot" href="https://www.baidu.com">忘记密码</a>
            </Form.Item>
            <Button type="primary" htmlType="submit" className={css["login-form-button"]} onClick={this.login}>登录</Button>
          </Form>
        </div>
      </div>
    )
  }
  check = () => {
    let { checked } = this.state
    this.setState({
      checked: !checked
    })
  }
  changeValue(key, e) {
    let value = e.target.value.trim()
    this.setState({
      [key]: value
    })
  }
  login = async () => {
    let { userName, userPwd } = this.state
    if (userName.trim() === "" || userPwd.trim() === "") {
      message.error('用户名或密码不能为空');
    } else {
      this.props.setInfo(this.state, this.props.history)
    }
  }
}
export default connect(state => ({}), dispatch => bindActionCreators(allAction, dispatch))(Form.create()(Login))
