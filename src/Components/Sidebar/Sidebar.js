import React from 'react';
import './sidebarStyles.css'
import SidebarOption from '../SidebarOption.js/SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataValue } from '../../Context/DataProvider';


function Sidebar() {

    const [{playlists}, dispatch] = useDataValue();

    return(
        <div className="sidebar__body">
            <img  className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify logo" />
            <SidebarOption title="Home" Icon={HomeIcon} />
            <SidebarOption title="Search" Icon={SearchIcon} />
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />

            <div className="sidebar__title">
                <h4 className="sidebart__title--playlists">PLAYLISTS</h4>
                {playlists?.items?.map((playlist) => (
                    <SidebarOption title={playlist.name} />
              ))}
            </div>
        </div>
    )
}

export default Sidebar;