import React from 'react';
import './sidebarOption.css';

function SidebarOption({ title, Icon }) {
    return(
        <div className="sidebarOption__container">
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ? <h4>{title}</h4> : <p className="sidebarOption__text">{title}</p>}
        </div>
    )
}

export default SidebarOption;