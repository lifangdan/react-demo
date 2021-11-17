import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import './css/style.css'

import ComponentHeader from './components/header'
import ComponentFooter from './components/footer'
import BodyIndex from './components/bodyIndex'

class Index extends React.Component {
    componentWillMount() {
        console.log("Index-componentWillMount")
    }
    componentDidMount() {
        console.log("Index-componentDidMount")
    }
    render() {
        return (
            <div>
                <ComponentHeader />
                <BodyIndex userId="123" userAge="20" />
                <ComponentFooter />
            </div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
)

reportWebVitals();
