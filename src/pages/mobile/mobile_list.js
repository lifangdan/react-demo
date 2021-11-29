import React from 'react';
import { Row, Col } from 'antd';
import { Router, Route, Link, browserHistory } from 'react-router'
export default class MobileList extends React.Component {
    constructor() {
        super();
        this.state = {
            news: ''
        };
    }
    componentWillMount() {
        const data1 = [
            {
                uniquekey: 1,
                title: '头条新闻',
                src: '../images/carousel_2.jpg',
                name: '非洲猫',
                realtype: '头条',
                date: '2021-11-29'

            },
            {
                uniquekey: 2,
                title: '头条新闻',
                src: '../images/carousel_2.jpg',
                name: '非洲猫',
                realtype: '头条',
                date: '2021-11-29'
            },
            {
                uniquekey: 3,
                title: '头条新闻',
                src: '../images/carousel_2.jpg',
                name: '非洲猫',
                realtype: '头条',
                date: '2021-11-29'
            },
            {
                uniquekey: 4,
                title: '头条新闻',
                src: '../images/carousel_2.jpg',
                name: '非洲猫',
                realtype: '头条',
                date: '2021-11-29'
            },
            {
                uniquekey: 5,
                title: '头条新闻',
                src: '../images/carousel_2.jpg',
                name: '非洲猫',
                realtype: '头条',
                date: '2021-11-29'
            },
            {
                uniquekey: 6,
                title: '头条新闻',
                src: '../images/carousel_2.jpg',
                name: '非洲猫',
                realtype: '头条',
                date: '2021-11-29'
            },
            {
                uniquekey: 7,
                title: '头条新闻',
                src: '../images/carousel_2.jpg',
                name: '非洲猫',
                realtype: '头条',
                date: '2021-11-29'
            },
            {
                uniquekey: 8,
                title: '头条新闻',
                src: '../images/carousel_2.jpg',
                name: '非洲猫',
                realtype: '头条',
                date: '2021-11-29'
            },
            {
                uniquekey: 9,
                title: '头条新闻',
                src: '../images/carousel_2.jpg',
                name: '非洲猫',
                realtype: '头条',
                date: '2021-11-29'
            },
            {
                uniquekey: 10,
                title: '头条新闻',
                src: '../images/carousel_2.jpg',
                name: '非洲猫',
                realtype: '头条',
                date: '2021-11-29'
            },

        ]
        this.setState({ news: data1 })
    };
    render() {
        const news = this.state.news
        const newsList = news.length
            ? news.map((newsItem, index) => (
                <section key={index} className="m_article list-item special_section clearfix">
                    <div>
                        <div className="m_article_img">
                            <img src={newsItem.src} alt={newsItem.title} />
                        </div>
                        <div className="m_article_info">
                            <div className="m_article_title">
                                <span>{newsItem.title}</span>
                            </div>
                            <div className="m_article_desc clearfix">
                                <div className="m_article_desc_l">
                                    <span className="m_article_channel">{this.props.cartTitle}</span>
                                    <span className="m_article_time">{newsItem.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))
            : '没有加载到任何新闻';
        return (
            <div>
                <Row>
                    <Col span={24}>
                        {newsList}
                    </Col>
                </Row>
            </div>
        );
    };
}
