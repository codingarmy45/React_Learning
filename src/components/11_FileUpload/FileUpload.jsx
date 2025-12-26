import React, { useState } from "react";
import axios from "axios";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ["image/jpeg", "image/png", "application/pdf"];

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);

  // Select files
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    const validatedFiles = selectedFiles.map((file) => ({
      file,
      progress: 0,
      status: "pending",
      controller: new AbortController(),
    }));

    setFiles(validatedFiles);
    setError("");
  };

  // Validation
  const validateFile = (file) => {
    if (!ALLOWED_TYPES.includes(file.type)) {
      return "Invalid file type";
    }
    if (file.size > MAX_FILE_SIZE) {
      return "File size exceeds 5MB";
    }
    return null;
  };

  // Upload files
  const uploadFiles = async () => {
    setUploading(true);

    const updatedFiles = [...files];

    for (let i = 0; i < updatedFiles.length; i++) {
      const { file, controller } = updatedFiles[i];

      const validationError = validateFile(file);
      if (validationError) {
        updatedFiles[i].status = "error";
        updatedFiles[i].error = validationError;
        continue;
      }

      const formData = new FormData();
      formData.append("file", file);

      try {
        await axios.post("http://localhost:5000/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            // Authorization: `Bearer YOUR_JWT_TOKEN`
          },
          signal: controller.signal,
          onUploadProgress: (progressEvent) => {
            const percent = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            updatedFiles[i].progress = percent;
            setFiles([...updatedFiles]);
          },
        });

        updatedFiles[i].status = "success";
      } catch (err) {
        if (axios.isCancel(err)) {
          updatedFiles[i].status = "cancelled";
        } else {
          updatedFiles[i].status = "error";
          updatedFiles[i].error = "Upload failed. Try again.";
        }
      }
    }

    setFiles([...updatedFiles]);
    setUploading(false);
  };

  // Cancel upload
  const cancelUpload = (index) => {
    files[index].controller.abort();
  };

  // Retry upload
  const retryUpload = (index) => {
    const newFiles = [...files];
    newFiles[index].progress = 0;
    newFiles[index].status = "pending";
    newFiles[index].controller = new AbortController();
    setFiles(newFiles);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto" }}>
      <h2>File Upload App</h2>

      <input type="file" multiple onChange={handleFileChange} />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button onClick={uploadFiles} disabled={uploading || !files.length}>
        Upload
      </button>

      <ul>
        {files.map((item, index) => (
          <li key={index} style={{ marginTop: "10px" }}>
            <strong>{item.file.name}</strong>

            <div>
              <progress value={item.progress} max="100" />
              <span> {item.progress}%</span>
            </div>

            {item.status === "uploading" && (
              <button onClick={() => cancelUpload(index)}>Cancel</button>
            )}

            {item.status === "error" && (
              <>
                <p style={{ color: "red" }}>{item.error}</p>
                <button onClick={() => retryUpload(index)}>Retry</button>
              </>
            )}

            {item.status === "success" && (
              <p style={{ color: "green" }}>Uploaded successfully</p>
            )}

            {item.status === "cancelled" && (
              <p style={{ color: "orange" }}>Upload cancelled</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileUpload;
