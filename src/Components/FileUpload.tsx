import React, { useState } from "react";

const FileUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [filePath, setFilePath] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const validTypes = ["image/png", "image/jpeg"];
      if (validTypes.includes(file.type)) {
        setSelectedFile(file);
        setError(null);

        const localUrl = URL.createObjectURL(file);
        setFilePath(localUrl);
      } else {
        setError("Please upload a PNG or JPG file.");
        setSelectedFile(null);

        setFilePath(null);
      }
    }

    console.log(selectedFile);
  };

  // const handleSubmit = async (event: React.FormEvent) => {
  //   event.preventDefault();

  //   if (!selectedFile) return;

  //   const formData = new FormData();
  //   formData.append("file", selectedFile);

  //   try {
  //     const response = await fetch(
  //       "http://api.voyaging-volumes.duckdns.org/upload",
  //       {
  //         method: "POST",
  //         body: formData,
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Failed to upload image");
  //     }

  //     const data = await response.json();
  //     console.log("Image uploaded successfully:", data);
  //     // Handle success (e.g., store the returned file path, show a success message, etc.)
  //     //setFilePath()
  //   } catch (error) {
  //     console.error("Error uploading image:", error);
  //   }
  // };

  return (
    <>
      {filePath && (
        <img
          src={filePath}
          alt="Preview"
          style={{ width: "200px", height: "auto" }}
        />
      )}
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleFileChange}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default FileUpload;
