import React from 'react';

import ComponentHeader from './header'
import ComponentFooter from './footer'
import BodyIndex from './bodyIndex'

export default class Home extends React.Component {
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

