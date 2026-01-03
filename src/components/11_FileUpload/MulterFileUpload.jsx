import axios from 'axios';
import React, { useState } from 'react'

const MulterFileUpload = () => {
    const [files, setFiles] = useState(null);
    const changeHandler = (e) =>{
        const selectedFilse = e.target.files[0];
        if(selectedFilse.length === 0) return;

        setFiles(selectedFilse);
    }

    const uploadHandler = async(e) =>{
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', files);

        try{
            const res = await axios.post('https://musical-pancake-qw5gr697qr6cwpp-4000.app.github.dev/api/upload',formData, {
                'Content-type': 'multipart/form-data'
            })
            console.log(res);
        }
        catch(err){
            console.log(err);
        }
    }
  return (
    <div>
      <input type="file" onChange={changeHandler}/>
      <button onClick={uploadHandler}>Upload</button>
    </div>
  )
}

export default MulterFileUpload
