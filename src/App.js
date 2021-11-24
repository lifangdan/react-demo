import React from 'react';
import PCIndex from './pages/pc/pc_index'
import MobileIndex from './pages/mobile/mobile_index'
import MediaQuery from 'react-responsive';
class App extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 1224px)'>
					<PCIndex/>
				</MediaQuery>
				<MediaQuery query='(max-device-width: 1224px)'>
					<MobileIndex/>
				</MediaQuery>
      </div>
    );
  }
}

export default App;