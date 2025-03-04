import React, { useState } from "react";
import { Book, BookContextInterface } from "../@types/book";
import { BookContext } from "../context/BookContextProvidor";
import ReusableInput from "./Inputs/TxtInput";

const url = import.meta.env.VITE_API_URL;

const AddBook = () => {
  const { addBook } = React.useContext(BookContext) as BookContextInterface;
  const [formData, setFormData] = React.useState<Partial<Book>>({});

  const handleForm = (e: React.FormEvent<HTMLInputElement>, newVal:string): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: newVal,
    });
  };

  const handleFormPrice = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleSaveBook = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Adding new book: ", formData.title )
    const filePath = await handleUpload();

    if (
      formData.title &&
      formData.author &&
      formData.isbn &&
      formData.price !== undefined &&
      formData.desc
    ) {
      const randomId = Math.floor(Date.now() / 1000);
      const newBook: Book = {
        id: randomId,
        title: formData.title,
        author: formData.author,
        isbn: formData.isbn,
        price: Number(formData.price),
        image_url: `${url}/${filePath}`,
        desc: formData.desc,
      };

      addBook(newBook);
    }
  };

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [filePath, setFilePath] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      console.error("Event target files is null");
      return;
    }

    const file = event.target.files[0];

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
  };

  const handleUpload = async (): Promise<string> => {
    if (!selectedFile) return "error";

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch(
        `${url}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const data = await response.json();
      console.log("Image uploaded successfully: ", data);
      return data.filePath;

    } catch (error) {
      console.error("Error uploading image:", error);
      return "Error";
    }
  };

  return (
    <>
      <h2>Book Information Form</h2>
      <form
        className="form"
        encType="multipart/form-data"
        onSubmit={handleSaveBook}
      >
        <ReusableInput
          label="Title"
          placeholder="Enter book title"
          error="Title is required"
          type="text"
          id="title"
          required={true}
          onChange={handleForm}
        />
        <ReusableInput
          label="Author"
          id="author"
          placeholder="Enter author's full name"
          error="Author is required"
          type="text"
          required={true}
          onChange={handleForm}
        />
        <ReusableInput
          label="ISBN Number"
          placeholder="Enter ISBN"
          error="ISBN is required"
          type="text"
          required={true}
          id="isbn"
          onChange={handleForm}
        />
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="Enter price"
            step="0.01"
            required
            onChange={handleFormPrice}
          />
        </div>
        <ReusableInput
          label="Book Description"
          placeholder="Enter Book Description ..."
          error="Book Description is required"
          type="text"
          required={true}
          id="desc"
          onChange={handleForm}
        />

        
        <div className="my-5">
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
        </div>


        <button
          type="submit"
          className="btn btn-primary my-5"
          disabled={formData === undefined ? true : false}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddBook;
