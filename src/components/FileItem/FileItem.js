import { InsertDriveFile } from "@material-ui/icons";
import "./FileItem.css";

const unitText = ["kB"];

const fileSizeString = (size) => {

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
                    <p>20 Gb</p>
                </div>
            </a>
        </div>
    );
}

export default FileItem;