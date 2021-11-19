import React from 'react'
import footerStyle from '../style/modules/footer.module.scss'
export default class ComponentFooter extends React.Component {
    render() {
        return (
            <footer className={footerStyle.footer}>
                <h1>这里是页脚11</h1>
            </footer>
        )
    }
}
