import React from 'react';
import { Tabs, Row, Col, Carousel } from 'antd';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block'
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
                        <Row gutter={10}>
                            <Col span={6}>
                                <div className="leftContainer">
                                    <div className="carousel">
                                        <Carousel {...settings}>
                                            <div><img src="../images/carousel_1.jpg" alt='' /></div>
                                            <div><img src="../images/carousel_2.jpg" alt='' /></div>
                                            <div><img src="../images/carousel_3.jpg" alt='' /></div>
                                            <div><img src="../images/carousel_4.jpg" alt='' /></div>
                                        </Carousel>
                                    </div>
                                    <PCNewsImageBlock cartTitle="国际新闻" width="100%" imageWidth="112px" />
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="midContainer">
                                    <Tabs className="tabs_news">
                                        <TabPane tab="头条新闻" key="1">
                                            <PCNewsBlock count={5} type="top" width="100%" bordered="false" />
                                        </TabPane>
                                        <TabPane tab="国际" key="2">
                                            <PCNewsBlock count={5} type="guoji" width="100%" bordered="false" />
                                        </TabPane>
                                    </Tabs>
                                    <PCNewsImageBlock style={{ marginLeft: '10px' }} count={8} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="125px" />
                                    <PCNewsImageBlock style={{ 'margin-left': '10px' }} count={16} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="125px" />
                                </div>
                            </Col>
                            <Col span={6}>
                                <div className="rightContainer">
                                    <PCNewsImageBlock cartTitle="国际新闻" width="100%" imageWidth="112px" />
                                    <PCNewsImageBlock cartTitle="国际新闻" width="100%" imageWidth="112px" />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}