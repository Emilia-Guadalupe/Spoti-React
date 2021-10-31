import React from 'react';
import './playerStyles.css';

import Sidebar from '../Sidebar/Sidebar';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

function Player({ spotify }) {
    return(
        <div className="playerContainer">
            <div className="player__body">
                <Sidebar />
                <Body />
                <Footer />
            </div>
        </div>
    )
}

export default Player;