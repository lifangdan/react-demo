import React from "react";
import { Row, Col } from 'antd';
export default class pcHeader extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={2}>col-12</Col>
          <Col span={4}>
            <a href="/" class="logo">
              <img src="../assets/images/logo.png" />
              <span>ReactNews</span>
            </a>
          </Col>
          <Col span={2}>col-12</Col>
        </Row>
      </div>
    )
  }
}