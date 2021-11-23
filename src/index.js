import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import 'antd/dist/antd.css'
import './index.css';
import '../src/style/pc.scss'
import '../src/style/mobile.scss'

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

reportWebVitals();
