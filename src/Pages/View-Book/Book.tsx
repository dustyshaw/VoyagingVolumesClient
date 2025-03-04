import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Book.modules.scss";
import { Book, BookContextInterface } from "../../@types/book";
import React from "react";
import { BookContext } from "../../context/BookContextProvidor";

const BookPage = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const [currentbook, setBook] = useState<Book | undefined>();

  const { books } = React.useContext(BookContext) as BookContextInterface;

  useEffect(() => {
    const foundBook = books.find((x) => x.id === Number(bookId));
    setBook(foundBook);
    if (!foundBook) {
      throw new Error("Book was not found!");
    }
  }, [bookId]);

  return (
    <div className="container" style={{ height: "70vh" }}>
      <div className="row mt-5">
        <div className="col-md-3">
          <img
            className="img img-fluid mb-3"
            width="200"
            src={currentbook?.image_url}
          />
        </div>
        <div className="col-md-6">
          <h1>{currentbook?.title}</h1>
          <div>{currentbook?.author}</div>
          <h3>${currentbook?.price}</h3>
          <p>{currentbook?.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
