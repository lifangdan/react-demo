import React from 'react';
import MobileHeader from '../../components/mobile_header'
import MobileFooter from '../../components/mobile_footer'
import CommonComments from '../../components/common_comments'
import { Row, Col, BackTop } from 'antd';


export default class MobileNewsDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            newsItem: ''
        }
    }
    render() {
        return (
            <div>
                <MobileHeader />
                <Row>
                    <Col span={24} className="container">
                        <div>
                            <div className="articleContainer">这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页</div>
                            <div>这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页</div>
                            <div>这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页</div>
                            <div>这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页</div>
                            <div>这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页</div>
                            <div>这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页</div>
                            <div>这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页</div>
                            <div>这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页</div>
                            <div>这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页</div>
                            <div>这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页</div>
                            <div>这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页这里是新闻详情页</div>
                            <div>这里是详情页</div>
                            <div>这里是详情页</div>
                            <div>这里是详情页</div>
                            <div>这里是详情页</div>
                            <div>这里是详情页</div>
                            <div>这里是详情页</div>
                            <div>这里是详情页</div>
                            <div>这里是详情页</div>
                            <div>这里是详情页</div>
                            <div>这里是详情页</div>
                            <div>这里是详情页</div>
                            <div>这里是详情页</div>
                            <div>这里是详情页</div>
                            <div>这里是详情页</div>
                            <div>这里是详情页</div>
                            <div>这里是详情页</div>
                            <div>这里是详情页</div>
                            <div>这里是详情页</div>
                            <div>这里是详情页</div>
                            <div>这里是详情页</div>
                            <div>这里是详情页</div>
                            <div>这里是详情页</div>
                            <div>这里是详情页</div>
                            <div>这里是详情页</div>
                            <div>这里是详情页</div>
                            <div>这里是详情页</div>
                            <div>这里是详情页</div>
                            <div>这里是详情页</div>
                            <div>这里是详情页</div>
                        </div>
                        <CommonComments />
                    </Col>
                </Row>
                <MobileFooter />
                <BackTop />
            </div>
        )
    }
}