import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import ComponentHeader from './components/header'

class Index extends React.Component {
    render() {
        return (
            <div>
                <ComponentHeader/>
                <h2>页面主题内容</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
)

reportWebVitals();
