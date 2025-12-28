import React, { useEffect, useState } from 'react'
import { saveAs } from 'file-saver'

const MultipleFile = () => {
    const [files, setFiles] = useState([]);

    const changeHandler = (e) =>{
        const selectedFiles = [...e.target.files];

        if (selectedFiles.length === 0) return;

        const filesWithUrl = selectedFiles.map((file)=>({
            file,
            url:URL.createObjectURL(file)
        }))

        console.log(filesWithUrl)
        
        setFiles((prev)=>[...prev, ...filesWithUrl]);
    }

    const handleDownload = async(e,index) =>{
        try{
            saveAs(files[index].url, files[index].file.name);
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        return ()=>{
            files.forEach(item => URL.revokeObjectURL(item.url));
        }
    },[files])

  return (
    <div>
        <input type="file" multiple accept="image/*" onChange={changeHandler}/>
        {files && files.map((f, index)=>(
            <div key={index}>
                <p key={index}>Files Name: {f.file.name}</p>
                <img src={f.url} alt="image" />
                <button onClick={(e)=>handleDownload(e,index)}>Download File</button>
            </div>
        ))}
    </div>
  )
}

export default MultipleFile


// console.log("Without Spread: " + [selectedFiles])
// console.log("With Spread: " + [...selectedFiles])
// console.log(Array.isArray([selectedFiles]))
// console.log(Array.isArray([...selectedFiles]))
