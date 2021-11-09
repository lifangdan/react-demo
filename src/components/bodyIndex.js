import React from 'react'

export default class BodyIndex extends React.Component {
    render() {
        var userName = 'lifangdan'
        var boolInput = true
        var html='测试标签'
        var html1='测试  空格显示1'
        var html2='测试\u0020\u0020空格显示2'
        return (
            <div>
                <h1>页面主体内容</h1>
                <p>{userName === '' ? '用户还没有登录' : '用户名：' + userName}</p>
                <p><input type="button" disabled={boolInput} value={userName} /></p>
                <p>{html}</p>
                {/**文本中有空格可以使用dangerouslySetInnerHTML，或者将空格转码展示 */}
                <p dangerouslySetInnerHTML={{__html:html1}}></p>
                <p>{html2}</p>
            </div>
        )
    }
}