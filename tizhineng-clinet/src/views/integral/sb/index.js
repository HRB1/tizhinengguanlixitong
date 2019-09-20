import React, { Component } from 'react';
import { Form, Select, Input, Button, Upload, Icon, message } from 'antd';
const { TextArea } = Input;
const { Option } = Select;
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}
class Index extends Component {
    state = {
        loading: false,
        selectData: null,
        text: '',
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };
    render() {
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">添加图片</div>
            </div>
        );
        const { imageUrl } = this.state;
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="el-wrap">
                <h2>积分上报</h2>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item className="el-boxs">
                        <div className="lab">
                            <label>上报说明:</label>
                            <em>*</em>
                        </div>
                        <div className="sele">
                            {getFieldDecorator('text',{
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入内容',
                                    },
                                ],
                            })(<TextArea className="text" rows={4} onChange={this.text.bind(this)} />)}
                            
                        </div>

                    </Form.Item>
                    <Form.Item className="el-boxss">
                        <div className="lab">
                            <label>添加照片:</label>
                            <em>&nbsp;</em>
                        </div>
                        <div className="sele">
                            {getFieldDecorator('photo', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请添加图片',
                                    },
                                ],
                            })(<Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                beforeUpload={beforeUpload}
                                onChange={this.handleChange}
                            >
                                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                            </Upload>)}
                           
                        </div>
                    </Form.Item>
                    <Form.Item className="label">
                        <div className="lab">
                            <label>积分分类:</label>
                            <em>*</em>
                        </div>
                        <div className="sele">
                            {getFieldDecorator('select', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请选择',
                                    },
                                ],
                            })(<Select
                                style={{ width: '32%' }}
                                placeholder="请选择"
                                onChange={this.onChange.bind(this)}
                            >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>)}    
                        </div>

                    </Form.Item>
                    <Form.Item className="btn">
                        <Button type="primary" htmlType="submit">确定</Button>
                        <Button type="button" className="cancle">
                            取消
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
    text(e) {
        this.setState({ text: e.target.value })
        // console.log(this.state.text)
    }
    onChange(value) {
        this.setState({ selectData: value })
        // console.log(this.state.selectData);
    }
}
export default Form.create()(Index)
