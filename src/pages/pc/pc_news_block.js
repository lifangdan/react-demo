import React from 'react';
import { Link} from 'react-router-dom';
import { Card } from 'antd';

export default class PCNewsBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            news: ''
        }
    };
    componentWillMount() {
        const data1 = [
            {
                uniquekey: 1,
                title: '我是头条新闻',
            },
            {
                uniquekey: 2,
                title: '我是头条新闻',
            },
            {
                uniquekey: 3,
                title: '我是头条新闻',
            },
            {
                uniquekey: 4,
                title: '我是头条新闻',
            },
            {
                uniquekey: 5,
                title: '我是新闻标题',
            }
        ]
        const data2 = [
            {
                uniquekey: 1,
                title: '这里是国际新闻',
            },
            {
                uniquekey: 2,
                title: '这里是国际新闻',
            },
            {
                uniquekey: 3,
                title: '这里是国际新闻',
            },
            {
                uniquekey: 4,
                title: '这里是国际新闻',
            },
            {
                uniquekey: 5,
                title: '这里是国际新闻',
            }
        ]
        if (this.props.type === 'top') {
            this.setState({ news: data1 })
        } else if (this.props.type === 'guoji') {
            this.setState({ news: data2 })
        }

    };
    render() {
        const news = this.state.news
        const newsList = news.length
            ? news.map((newsItem, index) => (
                <li key={index}>
                    <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                        {newsItem.title}
                    </Link>
                </li>
            ))
            : '没有加载到任何新闻';
        return (
            <div className="topNewsList">
                <Card>
                    <ul>
                        {newsList}
                    </ul>
                </Card>
            </div>
        )
    }
}