import React from 'react';
import { Tabs, Row, Col, Carousel } from 'antd';
import PCNewsBlock from './pc_news_block';

const TabPane = Tabs.TabPane;
export default class PCNewsContainer extends React.Component {
    render() {
        const settings = {
            dots: true,
            speed: 500,
            autoplay: true,
        }
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="container">
                        <div className="leftContainer">
                            <div className="carousel">
                                <Carousel {...settings}>
                                    <div><img src="../images/carousel_1.jpg" /></div>
                                    <div><img src="../images/carousel_2.jpg" /></div>
                                    <div><img src="../images/carousel_3.jpg" /></div>
                                    <div><img src="../images/carousel_4.jpg" /></div>
                                </Carousel>
                            </div>
                        </div>
                        <Tabs className="tabs_news">
                            <TabPane tab="头条新闻" key="1">
                                <PCNewsBlock count={5} type="top" width="100%" bordered="false" />
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <PCNewsBlock count={5} type="guoji" width="100%" bordered="false" />
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}