import './FileViewer.css';
import FileItem from "../FileItem/FileItem";

const FilesViewer = () => {

    const files = [
        { title: "Image1.jpeg", size: 200, updatedAt: Date() },
        { title: "Image2.jpeg", size: 100, updatedAt: Date() },
        { title: "Image3.jpeg", size: 500, updatedAt: Date() },
        { title: "Image4.jpeg", size: 1200, updatedAt: Date() },
        { title: "Image5.jpeg", size: 2500, updatedAt: Date() },
        { title: "Image6.jpeg", size: 8200, updatedAt: Date() },
        { title: "Image7.jpeg", size: 2700, updatedAt: Date() }
    ];

    return (<div className="fileViewer">
        <div className="fileViewerRow">

        </div>
        <div className="fileViewerTitle">
            <div className="fileViewerTitleLeft">
                Name
            </div>
            <div className="fileViewerTitleRight">
                Last modified
                File size
            </div>
        </div>
        {files.map((item, index) => {
            return <FileItem data={item} />
        })}
    </div>);
}

export default FilesViewer;