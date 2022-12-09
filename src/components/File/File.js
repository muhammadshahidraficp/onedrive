import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import "./File.css";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    return {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
    };
}
const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


const File = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [modalStyle] = useState(getModalStyle);

    const handleOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };

    const handleChange = (e) => { }

    const handleUpload = () => {
        setUploading(true)
    }

    return (<div className="file">
        <div className="file_container" onClick={handleOpen}>
            <AddIcon fontSize="large" />
            <p>New</p>
        </div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description">
            <div style={modalStyle} className={classes.paper}>
                <p>Select files you want to upload!</p>
                {
                    uploading ? (
                        <p>Uploading...</p>
                    ) : (
                        <>
                            <input type="file" onChange={handleChange} />
                            <button onClick=
                                {handleUpload}>Upload</button>
                        </>
                    )
                }
            </div>
        </Modal>        
    </div>);
}

export default File;