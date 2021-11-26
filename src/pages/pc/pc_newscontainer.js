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
                        <div className="leftContainer">
                            <div className="carousel">
                                <Carousel {...settings}>
                                    <div><img src="../images/carousel_1.jpg" /></div>
                                    <div><img src="../images/carousel_2.jpg" /></div>
                                    <div><img src="../images/carousel_3.jpg" /></div>
                                    <div><img src="../images/carousel_4.jpg" /></div>
                                </Carousel>
                            </div>
                            <PCNewsImageBlock cartTitle="国际新闻" width="400px" imageWidth="112px" />
                        </div>
                        <Tabs className="tabs_news">
                            <TabPane tab="头条新闻" key="1">
                                <PCNewsBlock count={5} type="top" width="100%" bordered="false" />
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <PCNewsBlock count={5} type="guoji" width="100%" bordered="false" />
                            </TabPane>
                        </Tabs>
                        <div>
							<PCNewsImageBlock count={8} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="132px"/>
							<PCNewsImageBlock count={16} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="132px"/>
						</div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}