import React from "react";
import {
    Card,
    Row,
    Col,
    Form,
    Input,
    Button,
} from "antd"
const FormItem = Form.Item;
export default class CommonComments extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: ''
        }
    };
    handleSubmit(values) {
        let obj = {
            comments: values.comments,
            uniquekey: this.state.comments.length + 1,
            userName: localStorage.userNickName,
            datetime: new Date().toLocaleDateString().replace(/\//g, '-')
        }
        const data = this.state.comments;
        data.push(obj)
        this.setState({
            comments: data
        })
    };
    componentDidMount() {
        const data = [
            {
                uniquekey: 1,
                comments: '这是第一条评论',
                userName: 'admin',
                datetime: '2021-11-30'
            },
            {
                uniquekey: 2,
                comments: '这是第一条评论',
                userName: 'admin',
                datetime: '2021-11-30'
            },
            {
                uniquekey: 3,
                comments: '这是第一条评论',
                userName: 'admin',
                datetime: '2021-11-30'
            },
            {
                uniquekey: 4,
                comments: '这是第一条评论',
                userName: 'admin',
                datetime: '2021-11-30'
            },
            {
                uniquekey: 5,
                comments: '这是第一条评论',
                userName: 'admin',
                datetime: '2021-11-30'
            }
        ]
        this.setState({ comments: data })
    };
    render() {
        const comments = this.state.comments;
        const commentsList = comments.length
            ? comments.map((comment, index) => (
                <Card key={index} title={comment.userName} extra={<a href="#">发布于{comment.datetime}</a>}>
                    <p>{comment.comments}</p>
                </Card>
            ))
            : '没有加载到任何评论';
        return (
            <div>
                <Row>
                    <Col span={24}>
                        {commentsList}
                        <Form onFinish={this.handleSubmit.bind(this)}>
                            <br />
                            <FormItem label="您的评论" name="comments">
                                <Input.TextArea showCount maxLength={200} placeholder="随便写" />
                            </FormItem>
                            <Button type="primary" htmlType="submit">提交评论</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    };
}