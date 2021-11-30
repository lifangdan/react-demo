import React from "react";
import axios from 'axios'
import {
    Row,
    Col,
    Menu,
    Button,
    Modal,
    Tabs,
    message,
    Form,
    Input,
    CheckBox,
} from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;
const FormItem = Form.Item;
export default class PCHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'toutiao',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userid: 0
        };
    };

    componentWillMount() {
        if (localStorage.userNickName !== '') {
            this.setState({
                hasLogined: true,
                userNickName: localStorage.userNickName
            })
        }
    };
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
    setModalVisible(value) {
        this.setState({
            modalVisible: value
        })
    };
    handleSubmit(values) {
        // axios.get("http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_userName=" + values.r_userName + "&r_password=" + values.r_password + "&r_confirmPassword=" + values.r_confirmPassword)
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
        this.setState({ hasLogined: true })
        this.setState({ userNickName: values.r_userName })
        localStorage.userNickName = values.r_userName
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
    loginOut() {
        this.setState({ hasLogined: false })
        this.setState({ hasLogined: false })
    }
    render() {
        const userShow = this.state.hasLogined
            ? <Menu.Item key="logout" className="register">
                <Button type="primary" htmltype="button">{this.state.userNickName}</Button>
                <Button type="dashed" htmlType="button">个人中心</Button>
                <Button type="ghost" htmlType="button" onClick={this.loginOut.bind(this)}>退出</Button>
            </Menu.Item>
            : <Menu.Item key="register" className="register" icon={<AppstoreOutlined />}>
                注册/登录
            </Menu.Item>;
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" className="logo">
                            <img src="../images/logo.png" alt="logo" />
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
                            <Menu.Item key="toutiao" icon={<AppstoreOutlined />}>
                                头条
                            </Menu.Item>
                            <Menu.Item key="shehui" icon={<AppstoreOutlined />}>
                                社会
                            </Menu.Item>
                            <Menu.Item key="guonei" icon={<AppstoreOutlined />}>
                                国内
                            </Menu.Item>
                            <Menu.Item key="guoji" icon={<AppstoreOutlined />}>
                                国际
                            </Menu.Item>
                            <Menu.Item key="yule" icon={<AppstoreOutlined />}>
                                娱乐
                            </Menu.Item>
                            <Menu.Item key="tiyu" icon={<AppstoreOutlined />}>
                                体育
                            </Menu.Item>
                            <Menu.Item key="keji" icon={<AppstoreOutlined />}>
                                科技
                            </Menu.Item>
                            <Menu.Item key="shishang" icon={<AppstoreOutlined />}>
                                时尚
                            </Menu.Item>
                            {userShow}
                        </Menu>
                        <Modal title="用户中心" visible={this.state.modalVisible} onCancel={() => this.setModalVisible(false)} onOk={() => this.setModalVisible(false)}>
                            <Tabs type="card" onChange={this.callBack.bind(this)}>
                                <TabPane tab="登录" key="1">
                                    <Form
                                        layout="horizontal"
                                        wrapperCol={{ span: 16 }}
                                        labelCol={{ span: 5 }}
                                        onFinish={this.handleSubmit.bind(this)}>
                                        <FormItem label="账户" name="r_userName" rules={[{ required: true }]}>
                                            <Input placeholder="请输入您的账户" />
                                        </FormItem>
                                        <FormItem label="密码" name="r_password" rules={[{ required: true }]}>
                                            <Input type="password" placeholder="请输入您的密码" />
                                        </FormItem>
                                        <Button type="primary" htmlType="submit" >登录</Button>
                                    </Form>
                                </TabPane>
                                <TabPane tab="注册" key="2">
                                    <Form
                                        layout="horizontal"
                                        wrapperCol={{ span: 16 }}
                                        labelCol={{ span: 5 }}
                                        onFinish={this.handleSubmit.bind(this)}>
                                        <FormItem label="账户" name="r_userName" rules={[{ required: true }]}>
                                            <Input placeholder="请输入您的账户" />
                                        </FormItem>
                                        <FormItem label="密码" name="r_password" rules={[{ required: true }]}>
                                            <Input type="password" placeholder="请输入您的密码" />
                                        </FormItem>
                                        <FormItem label="确认密码" name="r_confirmPassword" rules={[{ required: true }]}>
                                            <Input type="password" placeholder="请再次输入您的密码" />
                                        </FormItem>
                                        <Button type="primary" htmlType="submit" >注册</Button>
                                    </Form>
                                </TabPane>
                            </Tabs>
                        </Modal>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}