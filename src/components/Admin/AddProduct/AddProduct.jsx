import React, { useState, useRef } from 'react';
import s from './AddProduct.module.css';
import axios from 'axios';

const AddProduct = () => {
  const hostUrl = 'http://localhost:3001/admin/upload' ;
  const formData = new FormData();
  const filePicker = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploaded, setUploaded] = useState(null);

  const handleChange = (event) => {
  setSelectedFile(event.target.files[0]);
  };
  const handleUpload = async () => {
  if (!selectedFile) {
  return alert('Please select a file');
  }
  console.log(selectedFile);
  formData.append('file', selectedFile);
  console.log(formData);
  await axios.post(hostUrl, { formData }, {
    headers:{
      Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Nywicm9sZUlkIjoxMCwiaWF0IjoxNzAzMTU5NTc4LCJleHAiOjE3MDM0MTg3Nzh9.ZYmH8PbbXhBiTe2duXKuSZtFiMGiDVCQPcHzsBtNdC8"
    }
  }, (err, result) => {
  if(err){
  console.log(err);
  }
  console.log(result);
  setUploaded(result);
  });
  };

  const handlePick = () => {
    filePicker.current.click();
  };

  return (
    <>
      <button onClick={handlePick}>Pick file</button>
      <input
        className={s.hidden}
        type="file"
        ref={filePicker}
        onChange={handleChange}
        // multiple
        accept="image/*,.png,.jpg,.gif,.web"
      />

      <button onClick={handleUpload}>Upload now!</button>

      {selectedFile && (
        <ul>
          <li>Name: {selectedFile.name}</li>
          <li>Type: {selectedFile.type}</li>
          <li>Size: {selectedFile.size}</li>
          <li>
            lastModifiedDate:{' '}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </li>
        </ul>
      )}
      {uploaded && (
        <div>
          <h2></h2>
          <img src={uploaded.filePath} width="200" />
        </div>
      )}
    </>
  );
};

export default AddProduct;
