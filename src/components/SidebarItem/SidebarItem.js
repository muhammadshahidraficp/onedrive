import { ArrowRight } from "@material-ui/icons";
import React from "react";
import "./SidebarItem.css"

const SidebarItem = ({ arrow, icon, label }) => {
    return (
        <div className="side_bar_item">
            <div className="side_bar_item_arrow">
                {arrow && <ArrowRight />}
            </div>
            <div className="side_bar_item_main">
                {icon}
                <p>{label}</p>
            </div>
        </div>)
}

export default SidebarItem;