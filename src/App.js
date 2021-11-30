import React from 'react';
import PCIndex from './pages/pc/pc_index'
import PCNewsDetails from './pages/pc/pc_news_detail';
import MobileIndex from './pages/mobile/mobile_index'
import MobileNewsDetails from './pages/mobile/mobile_news_detail'
import MediaQuery from 'react-responsive';
import {
    BrowserRouter as Router, Routes, Route,
} from "react-router-dom";
class App extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width: 1224px)'>
                    <Router>
                        <Routes>
                            <Route path="/" element={<PCIndex />}></Route>
                            <Route path="/details/:uniquekey" element={<PCNewsDetails />}></Route>
                        </Routes>
                    </Router>
                </MediaQuery>
                <MediaQuery query='(max-device-width: 1224px)'>
                    <Router>
                        <Routes>
                            <Route path="/" element={<MobileIndex />}></Route>
                            <Route path="/details/:uniquekey" element={<MobileNewsDetails />}></Route>
                        </Routes>
                    </Router>
                </MediaQuery>
            </div>
        );
    }
}

export default App;