import React from "react";
import AddIcon from '@material-ui/icons/Add';
import "./File.css";

const File = () => {
    return (<div className="file">
        <div className="file_container">
            <AddIcon fontSize="large" />
            <p>New</p>
        </div>
    </div>);
}

export default File;