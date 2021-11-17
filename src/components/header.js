import React from 'react'

export default class ComponentHeader extends React.Component {
    render() {
        const styleComponent = {
            header: {
                backgroundColor: "#333",
                color: "#fff",
                padding:"15px"
            },
        };
        return (
            <header style={styleComponent.header} className="smallFontSize">
                <h1>这里是头部</h1>
            </header>
        )
    }
}
