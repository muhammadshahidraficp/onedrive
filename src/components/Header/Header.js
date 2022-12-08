
import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import SettingsIcon from '@material-ui/icons/Settings'
import AppsIcon from '@material-ui/icons/Apps'
import { Avatar } from '@material-ui/core'
import './Header.css'
import logoIcon from "../../logo.svg";


const Header = () => {
    return (
        <div className="header">
            <div className="header_logo">
                <img src={logoIcon} style={{ height: 50 }} alt="logo" />
                <span>OneDrive</span>
            </div>
            <div className='header_search_container'>
                <div className='header_search_bar'>
                    <SearchIcon />
                    <input type="text" placeholder='Search' />
                </div>
            </div>
            <div className='header_icons'>
                <span>
                    <HelpOutlineIcon />
                    <SettingsIcon />
                </span>
                <AppsIcon />
                <Avatar className='header_icons_avatar' />
            </div>
        </div>
    )
}

export default Header;