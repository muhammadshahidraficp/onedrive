import React, { useState,useEffect } from "react";
import AddIcon from '@material-ui/icons/Add';
import "./File.css";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from '@material-ui/core/styles';
import fire from '../../firebase';
import { ref as sRef, uploadBytes,getDownloadURL } from "firebase/storage";
import uuid from 'react-uuid';
import {getDatabase,set, ref as dRef} from "firebase/database";
import {setDoc,doc} from "firebase/firestore";

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
    const database = getDatabase();
    const handleOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };

    const handleChange = (e) => { 
        setFile(e.target.files[0])
    }

    const handleUpload = async() => {
        setUploading(true);
        const storageRef = sRef(fire.storage, `images/${uuid()}`);
        const uploadResult = await uploadBytes(storageRef, file);
        const link = await getDownloadURL(uploadResult.ref);
        await setDoc(doc(fire.firestore,"users",uuid()),{
            link
        });
        // console.log(link);
        // await set(dRef(database,"users"),{link})
        setUploading(false);
    }

    useEffect(() => {

    }, []);

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