import React from 'react';
import { Card } from 'antd';
export default class PCNewsImageBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            news: ''
        }
    }
    componentWillMount() {
        const data1 = [
            {
                uniquekey: 1,
                title: '头条新闻',
                src: '../images/carousel_1.jpg',
                name: '非洲猫'
            },
            {
                uniquekey: 2,
                title: '头条新闻',
                src: '../images/carousel_2.jpg',
                name: '非洲猫'
            },
            {
                uniquekey: 3,
                title: '头条新闻',
                src: '../images/carousel_3.jpg',
                name: '非洲猫'
            },
            {
                uniquekey: 4,
                title: '头条新闻',
                src: '../images/carousel_4.jpg',
                name: '非洲猫'
            },
            {
                uniquekey: 5,
                title: '头条新闻',
                src: '../images/carousel_1.jpg',
                name: '非洲猫'
            },
            {
                uniquekey: 1,
                title: '头条新闻',
                src: '../images/carousel_1.jpg',
                name: '非洲猫'
            }
        ]

        this.setState({ news: data1 })
    };
    render() {
        const styleImage = {
            display: "block",
            width: this.props.imageWidth,
            height: '90px'
        }
        const styeH3 = {
            width: this.props.imageWidth,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
        };
        const news = this.state.news
        const newsList = news.length
            ? news.map((newsItem, index) => (
                <div className="imageblock" key={index}>
                    <div className="custom-image">
                        <img style={styleImage} alt='' src={newsItem.src} />
                    </div>
                    <div className="custom-card">
                        <h4 style={styeH3}>{newsItem.title}</h4>
                        <p>{newsItem.name}</p>
                    </div>
                </div>
            ))
            : '没有加载到任何新闻';
        return (
            <div className="topNewsList">
                <Card title={this.props.cartTitle} bordered={true} style={{ width: this.props.width }}>
                    {newsList}
                </Card>

            </div>
        )
    }
}