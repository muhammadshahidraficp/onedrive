import { ArrowRight } from "@material-ui/icons";
import React from "react";

const SidebarItem = ({ arrow, icon, label }) => {
    return (
        <div className="">
            <div>
                {arrow && <ArrowRight />}
            </div>
            <div>
                {icon}
                <p>{label}</p>
            </div>
        </div>)
}

export default SidebarItem;