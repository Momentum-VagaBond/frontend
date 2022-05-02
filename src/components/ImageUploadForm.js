import * as React from 'react';
import { useState, useRef } from 'react';
import axios from 'axios';


export const ImageUploadForm = ({ token }) => {
    const imageFileInput = useRef(null)
    const [fileName, setFileName] = useState('No file selected')
  
    const handleClick = () => {
      const imageFile = imageFileInput.current.files[0]
      axios.post("https://momentum-vagabond.herokuapp.com/auth/users/", imageFile, {
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': imageFile.type,
          'Content-Disposition': `attachment; filename=${imageFile.name}`,
        },
      })
    }
  
    const handleFileName = (e) => {
      setFileName(e.target.files[0].name)
    }
  
    return (
      <div className="file is-normal has-name container m-5">
        <label className="file-label">
          <input
            className="file-input"
            type="file"
            name="resume"
            ref={imageFileInput}
            onChange={handleFileName}
          />
          <span className="file-cta">
            <span className="file-icon">
              <i className="fas fa-upload"></i>
            </span>
            <span className="file-label">Profile Photo</span>
          </span>
          <span className="file-name">{fileName}</span>
        </label>
        <button className="btn-input" onClick={handleClick}>
          Upload
        </button>
    </div>
    )
};