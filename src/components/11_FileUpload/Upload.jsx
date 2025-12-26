import React, { useEffect, useState } from "react";

const Upload = () => {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);

  const changeHandler = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  useEffect(() => {
    // create object URLs
    const objectUrls = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    /*
        *➡️ Takes a File / Blob object
        *➡️ Returns a temporary URL string
        *➡️ Browser uses that URL to display the file
    */

    setPreviews(objectUrls);

    // cleanup to avoid memory leaks
    return () => {
      objectUrls.forEach((obj) => URL.revokeObjectURL(obj.url));
    };
  }, [files]);

  return (
    <div>
      <input type="file" multiple accept="image/*" onChange={changeHandler} />

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        {previews.map(({ url }, index) => (
          <img
            key={index}
            src={url}
            alt="preview"
            width="150"
            height="150"
            style={{ objectFit: "cover" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Upload;


