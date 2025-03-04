import React, { useEffect, useState } from "react";
import { Book, BookContextInterface } from "../@types/book";
import { BookContext } from "../context/BookContextProvidor";

const EditBook = (book: Book) => {
  const { editBook } = React.useContext(BookContext) as BookContextInterface;
  const [formData, setFormData] = React.useState<Partial<Book>>({});

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [filePath, setFilePath] = useState<string | null>(book.image_url);

  const [fileChanged, setFileChanged] = useState(false);

  useEffect(() => {
    setFormData({
      author: book.author,
      title: book.title,
      image_url: book.image_url,
      isbn: book.isbn,
      price: book.price,
      desc: book.desc,
    });
  }, [book]);

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };
  const handleSaveBook = async(e: React.FormEvent) => {
    e.preventDefault();

    let filePath = book.image_url;

    if (fileChanged)
    {
      let rslt = await handleUpload();
      filePath = `http://api.voyaging-volumes.duckdns.org/${rslt}`;
    }


    if (
      formData.title &&
      formData.author &&
      formData.isbn &&
      formData.price !== undefined &&
      formData.image_url &&
      formData.desc
    ) {
      const newBook: Book = {
        id: book.id,
        title: formData.title,
        author: formData.author,
        isbn: formData.isbn,
        price: Number(formData.price),
        image_url: filePath,
        desc: formData.desc,
      };

      console.log("saving book inside EditBook.tsx", newBook);
      editBook(newBook);

      setFormData(newBook);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFileChanged(true);
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
      const response = await fetch("http://api.voyaging-volumes.duckdns.org/upload", {
        method: "POST",
        body: formData,
      });

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
      <h2>Edit Book</h2>
      <form className="form" onSubmit={handleSaveBook}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter book title"
            required
            value={formData.title || ""}
            onChange={handleForm}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            className="form-control"
            id="author"
            placeholder="Enter author's name"
            value={formData.author || ""}
            required
            onChange={handleForm}
          />
        </div>
        <div className="form-group">
          <label htmlFor="isbn">ISBN</label>
          <input
            type="text"
            className="form-control"
            id="isbn"
            placeholder="Enter ISBN number"
            required
            value={formData.isbn || ""}
            onChange={handleForm}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="Enter price"
            required
            value={formData.price || ""}
            onChange={handleForm}
          />
        </div>
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

        <div className="form-group">
          <label htmlFor="image_url">Book Description</label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Description ... "
            required
            value={formData.desc || ""}
            onChange={handleForm}
          />
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

export default EditBook;
