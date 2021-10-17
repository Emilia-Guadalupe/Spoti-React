import React from 'react';
import './loginStyles.css'

import { accessUrl } from '../../Helpers/spotifyAuth';

export default function Login() {
    return(
        <div className="login-container">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify logo" />
            <a href={accessUrl} className="login-container__button">LOGIN WITH SPOTIFY</a>
        </div>
    )
}