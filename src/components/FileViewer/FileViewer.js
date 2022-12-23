import './FileViewer.css';
import FileItem from "../FileItem/FileItem";

const FilesViewer = () => {

    const files = [
        { title: "Image1.jpeg", size: 345200777, updatedAt: Date("20-11-2022") },
        { title: "Image2.jpeg", size: 1111123243300, updatedAt: Date() },
        { title: "Image3.jpeg", size: 5053245230, updatedAt: Date() },
        { title: "Image4.jpeg", size: 112700, updatedAt: Date() },
        { title: "Image5.jpeg", size: 9992500, updatedAt: Date() },
        { title: "Image6.jpeg", size: 8299900, updatedAt: Date() },
        { title: "Image7.jpeg", size: 279900, updatedAt: Date() }
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