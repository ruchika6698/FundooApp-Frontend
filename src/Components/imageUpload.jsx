import React, { Component } from 'react';
import { Tooltip } from '@material-ui/core';
import image from "../Assets/image.svg";

class UploadImage extends Component {
    triggerInputFile() {
        try{
        this.fileInput.click();
        }catch(err){
            console.log("error in file triggger");
        }
    }

    uploadImage()
    {
       
    }
    render() {
        return (
            <span>
            <Tooltip title="Upload Image"> 
                <img src={image} label="Image"
                    className="uploadImage"
                    alt="upload pic icon"
                    onClick={() => { this.triggerInputFile() }} />
            </Tooltip>
                <input ref={fileInput => this.fileInput = fileInput}
                    type="file" style={{ 'display': 'none' }}
                    className="uploadImage"
                    onChange={()=>this.uploadImage()}
                />

            </span>
        )
    }
}
export default UploadImage;