import React, { useEffect, useState } from "react";

const SingleFile = () => {
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const [allowedTypes] = useState(["image/jpeg", "image/png", "image/webp"]);
  const [inRange, setInRange] = useState(null);

  const changeHandler = (e) => {
    const selectedFiles = e.target.files[0];
    if (!selectedFiles) return;

    setFile(selectedFiles);
    const url = URL.createObjectURL(selectedFiles);
    setInRange(selectedFiles.size / 1e6);
    setFileURL(url);
  };

  useEffect(() => {
    return () => {
      if (fileURL) URL.revokeObjectURL(fileURL);
    };
  }, [fileURL]);

  return (
    <div>
      <input type="file" onChange={changeHandler} />

      {file && inRange <= 10 && (
        <>
          <p>File: {file.name}</p>
          <p>Preview</p>
        </>
      )}

      {fileURL && inRange <= 10 && allowedTypes.includes(file.type) && (
        <>
          <img src={fileURL} alt="photo" />
        </>
      )}

      {fileURL && inRange <= 10 && !allowedTypes.includes(file.type) && (
        <>
          <iframe src={fileURL}></iframe>
        </>
      )}

      {inRange > 10 && <p>Limit exceeded</p>}
    </div>
  );
};

export default SingleFile;
