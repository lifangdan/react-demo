import React from 'react'
import BodyChild from './bodyChild'
export default class BodyIndex extends React.Component {
    componentWillMount() {
        console.log("BodyIndex-componentWillMount")
    }
    componentDidMount() {
        console.log("BodyIndex-componentDidMount")
    }

    constructor() {
        super()//调用基类的左右初始化方法
        this.state = { //初始化赋值
            userName: 'lifangdan',
            age: 20
        }
    }
    handleChange(event) {
        this.setState({ age: event.target.value })
    }

    render() {
        setTimeout(() => {
            //更改state
            this.setState({ userName: 'feizhoumao' })
        }, 3000)
        return (
            <div>
                <h2>页面主体内容</h2>
                <p>年龄：{this.state.age}</p>
                <BodyChild handleChildValueChange={this.handleChange.bind(this)} />
            </div>
        )
    }
}
