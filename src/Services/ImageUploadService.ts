// import { useState } from "react";


// // const url = import.meta.env.VITE_API_URL;
// const url = "http://api.voyaging-volumes.duckdns.org"

// if (!url) {
//   console.log("no url found!");
// } else {
//   console.log("Vite URL: ", url);
// }
  


// export const booksApiService: React.FC<{
//     onFileUpload: (filePath: string) => void; // Callback to handle file upload
//   }> = ({ onFileUpload }) => {

//     const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [filePath, setFilePath] = useState<string | null>(null);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (!event.target.files) {
//       console.error("Event target files is null");
//       return;
//     }

//     const file = event.target.files[0];

//     if (file) {
//       const validTypes = ["image/png", "image/jpeg"];
//       if (validTypes.includes(file.type)) {
//         setSelectedFile(file);
//         setError(null);

//         const localUrl = URL.createObjectURL(file);
//         setFilePath(localUrl);
//       } else {
//         setError("Please upload a PNG or JPG file.");
//         setSelectedFile(null);
//         setFilePath(null);
//       }
//     }
//   };


//   const handleUpload = async (): Promise<string> => {
//     if (!selectedFile) return "error";

//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     try {
//       const response = await fetch(
//         "http://api.voyaging-volumes.duckdns.org/upload",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to upload image");
//       }

//       const data = await response.json();
//       console.log("Image uploaded successfully: ", data);
//       onFileUpload(data.filePath); // Call the callback with the file path
//       return data.filePath;

//     } catch (error) {
//       console.error("Error uploading image:", error);
//       return "Error";
//     }
//   };

//   return (
//     <div className="image-upload-service">
//       <input
//         type="file"
//         accept="image/png, image/jpeg"
//         onChange={handleFileChange}
//       />
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {filePath && (
//         <img
//           src={filePath}
//           alt="Preview"
//           style={{ width: "200px", height: "auto" }}
//         />
//       )}
//       <button onClick={handleUpload} disabled={!selectedFile}>
//         Upload Image
//       </button>
//     </div>
//   );

// };