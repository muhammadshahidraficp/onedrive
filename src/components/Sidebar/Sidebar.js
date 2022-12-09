import { InsertDriveFile, ImportantDevices, PeopleAlt, QueryBuilder, StarBorder, DeleteOutline, Storage } from "@material-ui/icons";
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
                <SidebarItem icon={<ImportantDevices />} label='Computers' />
                <SidebarItem icon={<PeopleAlt />} label='Shared with me' />
                <SidebarItem icon={<QueryBuilder />} label='Recent' />
                <SidebarItem icon={<StarBorder />} label='Starred' />
                <SidebarItem icon={<DeleteOutline />} label='Bin' />
                <hr />
                <SidebarItem icon={<Storage />} label='Storage' />
            </div>
        </div>;
    }
}

export default Sidebar;