import { InsertDriveFile } from "@material-ui/icons";
import React from "react";
import File from "../File/File";
import SidebarItem from "../SidebarItem/SidebarItem";

import './Sidebar.css'

class Sidebar extends React.Component {
    render() {
        return <div className="sidebar">
            <File />
            <div className="sidebar_item_container">
                <SidebarItem arrow icon={<InsertDriveFile />} label='My Drive' />
                <SidebarItem icon={<InsertDriveFile />} label='Computers' />
                <SidebarItem icon={<InsertDriveFile />} label='Shared with me' />
                <SidebarItem icon={<InsertDriveFile />} label='Recent' />
                <SidebarItem icon={<InsertDriveFile />} label='Starred' />
                <SidebarItem icon={<InsertDriveFile />} label='Bin' />
                <hr />
                <SidebarItem icon={<InsertDriveFile />} label='Storage' />
            </div>
        </div>;
    }
}

export default Sidebar;