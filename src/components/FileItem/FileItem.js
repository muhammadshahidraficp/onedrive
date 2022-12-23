import { InsertDriveFile } from "@material-ui/icons";
import "./FileItem.css";

const unitText = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

const fileSizeString = (size) => {
    console.log(size);
    let i = -1;
    do {
        size = size / 1024;
        i++;
    } while (size > 1024)
    return Math.max(size, 0.1).toFixed(1) + unitText[i];

}

const FileItem = (props) => {
    return (
        <div className="fileItem">
            <a href="hello.jpeg" download>
                <div className="fileItemLeft">
                    <InsertDriveFile />
                    <p>{props.data.title}</p>
                </div>
                <div className="fileItemRight">
                    <p>24 Dec 2022</p>
                    <p>{fileSizeString(props.data.size)}</p>
                </div>
            </a>
        </div>
    );
}

export default FileItem;