import { Link, useParams } from "react-router-dom";
import EditBook from "../../Components/EditBook";
import { useEffect, useState } from "react";
import { Book, BookContextInterface } from "../../@types/book";
import React from "react";
import { BookContext } from "../../context/BookContextProvidor";

const EditBookPg = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const [currentbook, setBook] = useState<Book>();

  const { books } = React.useContext(BookContext) as BookContextInterface;


  useEffect(() => {
    const foundBook = books.find((x) => x.id === Number(bookId));
    setBook(foundBook);
    if (!foundBook) {
      throw new Error("Book was not found!");
    }
  }, [bookId]);

  return (
    <>
      <div className="container mt-5">
        <Link to="/admin">
          <p className="fs-4 react-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
</svg> Back</p>
        </Link>
        {currentbook && (
          <EditBook
            id={currentbook.id}
            title={currentbook.title}
            author={currentbook.author}
            isbn={currentbook.isbn}
            image_url={currentbook.image_url}
            price={currentbook.price}
            desc={currentbook.desc}
          />
        )}
      </div>
    </>
  );
};

export default EditBookPg;
