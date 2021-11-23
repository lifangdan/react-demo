import React from 'react'
export default class ComponentHeader extends React.Component {
    constructor() {
        super()
        this.state = {
            miniHeader: false
        }
    };
    changeHeader() {
        this.setState({
            miniHeader: !this.state.miniHeader
        })
    };
    render() {
        const styleComponent = {
            header: {
                backgroundColor: "#333",
                color: "#fff",
                padding: (this.state.miniHeader) ? "3px" : "15px"
            },
        };
        return (
            <header onClick={this.changeHeader.bind(this)} style={styleComponent.header} className="smallFontSize">
                <h1>这里是头部</h1>
            </header>
        )
    }
}
