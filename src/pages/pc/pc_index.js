import React from "react";
import PCHeader from '../../components/pc_header'
import PCFooter from '../../components/pc_footer'
import PCNewsContainer from './pc_newscontainer'
export default class PCIndex extends React.Component {
  render() {
    return (
      <div>
        <PCHeader />
        <PCNewsContainer/>
        <PCFooter />
      </div>
    )
  }
}