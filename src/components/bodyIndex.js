import React from 'react'
import ReactDom from 'react-dom'
import BodyChild from './bodyChild'
export default class BodyIndex extends React.Component {
    componentWillMount() {
        console.log("BodyIndex-componentWillMount")
    }
    componentDidMount() {
        console.log("BodyIndex-componentDidMount")
    }

    constructor() {
        super()//调用基类的所有初始化方法
        this.state = { //初始化赋值
            userName: 'lifangdan',
            age: 20
        }
    }
    changeValue = () => {
        this.setState({ age: 99 })
        //第一种方式
        // let mySubmitBtn = document.getElementById('submitBtn')
        // ReactDom.findDOMNode(mySubmitBtn).style.color = 'red'

        //第二种方式
        this.refs.submitBtn.style.color = 'red'

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
                <input id="submitBtn" ref="submitBtn" type="button" value="提交" onClick={this.changeValue} />
                <BodyChild handleChildValueChange={this.handleChange.bind(this)} />
            </div>
        )
    }
}
