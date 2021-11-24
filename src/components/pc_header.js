import React from "react";
import { Row, Col, Menu } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
export default class PCHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 'toutiao'
    }
  }
  render() {
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
            <Menu mode="horizontal" selectedKeys={[this.state.current]}>
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
            </Menu>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}