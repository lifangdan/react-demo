import React from "react";
import {
    Button,
    Modal,
    Tabs,
    message,
    Form,
    Input,
} from 'antd';
import { UserAddOutlined, SettingOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;
const FormItem = Form.Item;
export default class MobileHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'top',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userid: 0
        }
    }
    setModalVisible(value) {
        this.setState({ modalVisible: value })
    };
    login() {
        this.setModalVisible(true)
    }

    handleClick(e) {
        if (e.key === "register") {
            this.setState({
                current: 'register'
            })
            this.setModalVisible(true)
        } else {
            this.setState({
                current: e.key
            })
        }
    };

    handleSubmit(values) {
        this.setState({ hasLogined: true })
        this.setState({ userNickName: values.r_userName })
        message.success("请求成功！");
        this.setModalVisible(false);
    };
    callBack(key) {
        if (key === 1) {
            this.setState({ action: 'login' })
        } else {
            this.setState({ action: 'register' });
        }
    };
    render() {
        const userShow = this.state.hasLogined
            ?
            <span className="userIcon"><UserAddOutlined /></span>
            :
            <span className="userIcon" onClick={this.login.bind(this)}><SettingOutlined /></span>;
        return (
            <div id="mobileheader">
                <header>
                    <img src="../images/logo.png" alt="logo" />
                    <span className="title">ReactNews</span>
                    {userShow}
                </header>
                <Modal title="用户中心" visible={this.state.modalVisible} onCancel={() => this.setModalVisible(false)} onOk={() => this.setModalVisible(false)}>
                    <Tabs type="card" onChange={this.callBack.bind(this)}>
                        <TabPane tab="登录" key="1">
                            <Form
                                layout="horizontal"
                                labelCol={{ span: 4 }}
                                wrapperCol={{ span: 14 }}
                                onFinish={this.handleSubmit.bind(this)}>
                                <FormItem label="账户" name="r_userName">
                                    <Input placeholder="请输入您的账户" />
                                </FormItem>
                                <FormItem label="密码" name="r_password">
                                    <Input type="password" placeholder="请输入您的密码" />
                                </FormItem>
                                <Button type="primary" htmlType="submit" >登录</Button>
                            </Form>
                        </TabPane>
                        <TabPane tab="注册" key="2">
                            <Form
                                layout="horizontal"
                                onFinish={this.handleSubmit.bind(this)}>
                                <FormItem label="账户" name="r_userName">
                                    <Input placeholder="请输入您的账户" />
                                </FormItem>
                                <FormItem label="密码" name="r_password">
                                    <Input type="password" placeholder="请输入您的密码" />
                                </FormItem>
                                <FormItem label="确认密码" name="r_confirmPassword">
                                    <Input type="password" placeholder="请再次输入您的密码" />
                                </FormItem>
                                <Button type="primary" htmlType="submit" >注册</Button>
                            </Form>
                        </TabPane>
                    </Tabs>
                </Modal>
            </div>
        )
    }
}