import React from 'react';
import PCHeader from '../../components/pc_header'
import PCFooter from '../../components/pc_footer'
import CommonComments from '../../components/common_comments'
import PCNewsImageBlock from './pc_news_image_block'
import { Row, Col, BackTop } from 'antd';


export default class PCNewsDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            newsItem: ''
        }
    }
    render() {
        return (
            <div>
                <PCHeader />
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className="container">
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
                        </div>
                        <hr/>
                        <CommonComments />
                    </Col>
                    <Col span={6}>
                        <PCNewsImageBlock width='100%' cardTitle="相关新闻" imageWidth="135px" />
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PCFooter />
                <BackTop />
            </div>
        )
    }
}