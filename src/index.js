import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const name = '李芳丹';

function formatName(user) {
    return user.name + ',' + user.old;
}

function getGreeting(user) {
    if (user) {
        return <h1 className="bbb">Hello,{formatName(user)}</h1>
    } else {
        return <h1>Hello,Lili</h1>
    }
}

const user = {
    name: '李芳丹',
    old: 28
}
const element = (
    <div className="aaaaa">
        {getGreeting(user)}
        {getGreeting()}
    </div>
);

function tick() {
    const element2 = (
        <div>
            <h1>Hello,world!</h1>
            <h1>北京时间:{new Date().toLocaleTimeString()}</h1>
        </div>
    )
    ReactDOM.render(
        element2,
        document.getElementById('root')
    );
}

// setInterval(tick,1000)


function Welcom(props) {
    return <h1>我是组件1，{props.time}</h1>
}

// const element3=(
//     <div>
//         <Welcom name="lifangdan"/>
//         <Welcom name="Lili"/>
//     </div>
// )
// ReactDOM.render(
//     element3,
//     document.getElementById('root')
// )
function dianji() {
    alert('点击了')
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick()
        }, 100)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <Welcom time={this.state.date.toLocaleTimeString()}/>
                <h1>Hello,World!</h1>
                <h2>北京时间：{this.state.date.toLocaleTimeString()}</h2>
                <button onClick={dianji}>按钮</button>
            </div>
        )
    }
}

//事件处理
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick1 = this.handleClick2.bind(this)
    }

    handleClick2() {
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    handleClick = () => {
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    handleClick3() {
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick1}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON1' : 'OFF1'}
                </button>
                <button onClick={() => {
                    this.handleClick3()
                }}>
                    {this.state.isToggleOn ? 'ON2' : 'OFF2'}
                </button>
            </div>

        )
    }
}

//条件渲染
function WarningBanner(props) {
    if (!props.warn) {
        return null
    }

    return (
        <div>
            <h1>Warning!</h1>
        </div>
    )
}

class Page extends React.Component {
    constructor(props) {
        super(props)
        this.state = {showWarning: true}
        this.handleToggleClick = this.handleToggleClick.bind(this)
    }

    handleToggleClick() {
        this.setState((state) => ({
            showWarning: !state.showWarning
        }))
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}

//列表
const numbers = [1, 2, 3, 4, 5]
const ListItems = numbers.map((number) => {
    return <li>{number}</li>
})

function NumberList(props) {
    const numbers = props.numbers
    const listItems = numbers.map((number) => {
        return <li key={number}>{number}</li>
    })
    return (
        <ul>{listItems}</ul>
    )
}

//表单
class NameForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        this.input=React.createRef()
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event) {
        console.log('提交的名字：' + this.state.value)
        console.log(this.input.current.value)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>名字：
                    <input type="text"
                           value={this.state.value}
                           onChange={this.handleChange}/>
                </label>
                <label>
                    性别：
                    <input type="text" ref={this.input}/>
                </label>
                <input type="submit" value="提交" />
            </form>
        )
    }
}

//组合与继承
function FancyBorder(props){
    return(
        <div className={'FancyBorder FancyBorder-'+props.color}>
            {props.left}
            <h1>哈哈！</h1>
            {props.right}
            {props.children}

        </div>
    )
}
function Left(){
    return(
        <div>我是左边</div>
    )
}
function Right(){
    return(
        <div>我是右边</div>
    )
}
// ReactDOM.render(
//     <FancyBorder color="blue"
//     left={<Left/>}
//     right={<Right/>}>
//         <h1>Welcom</h1>
//
//     </FancyBorder>,
//     document.getElementById('root')
// )


class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img src="./logo.svg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
        );
    }
}

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

                {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
                {this.props.render(this.state)}
            </div>
        );
    }
}

class MouseTracker extends React.Component {
    render() {
        return (
            <div>
                <h1>移动鼠标!</h1>
                <Mouse render={mouse => (
                    <Cat mouse={mouse} />
                )}/>
            </div>
        );
    }
}

ReactDOM.render(
    <MouseTracker/>,
    document.getElementById('root')
)

reportWebVitals();
