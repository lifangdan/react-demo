import React from "react";
import MobileHeader from '../../components/mobile_header'
import MobileFooter from '../../components/mobile_footer'
import MobileList from './mobile_list';
import {
    Tabs,
    Carousel
} from 'antd';
const { TabPane } = Tabs;
export default class MobileIndex extends React.Component {
    render() {
        const settings = {
            dots: true,
            speed: 500,
            autoplay: true,
			infinite: true,
			slidesToShow: 1,
        }
        return (
            <div>
                <MobileHeader />
                <Tabs tabBarGutter={50}>
                    <TabPane tab="头条" key="1">
                        <div className="carousel">
                            <Carousel {...settings}>
                                <div><img src="../images/carousel_1.jpg" alt='' /></div>
                                <div><img src="../images/carousel_2.jpg" alt='' /></div>
                                <div><img src="../images/carousel_3.jpg" alt='' /></div>
                                <div><img src="../images/carousel_4.jpg" alt='' /></div>
                            </Carousel>
                        </div>
                        <MobileList type="top" cartTitle="头条" />
                    </TabPane>
                    <TabPane tab="社会" key="2">
                        <MobileList type="shehui" cartTitle="社会" />
                    </TabPane>
                    <TabPane tab="国内" key="3">
                        <MobileList type="guonei" cartTitle="国内" />
                    </TabPane>
                    <TabPane tab="国际" key="4">
                        <MobileList type="guoji" cartTitle="国际" />
                    </TabPane>
                    <TabPane tab="娱乐" key="5">
                        <MobileList type="yule" cartTitle="娱乐" />
                    </TabPane>
                </Tabs>
                <MobileFooter />
            </div>
        )
    }
}