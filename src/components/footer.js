import React from 'react'
import footerStyle from '../css/modules/footer.module.css'
export default class ComponentFooter extends React.Component {
    render() {
        return (
            <footer className={footerStyle.footer}>
                <h1>这里是页脚</h1>
            </footer>
        )
    }
}
