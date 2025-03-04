import { Link } from "react-router-dom";
import { BookContextInterface } from "../@types/book";
import React from "react";
import { BookContext } from "../context/BookContextProvidor";
import LoadingSpinner from "../Components/LoadingSpinner";

const ViewItem: React.FC = ({}) => {
  const { books, isLoading } = React.useContext(
    BookContext
  ) as BookContextInterface;

  return (
    <>
      <div className="container">
        <h1>Browse</h1>
        <h3 className="mt-5">Used Novels</h3>
        <hr />
        <div className="d-flex flex-wrap">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            books.map((book) => (
              <Link
                key={book.id}
                to={`/book/${book.id}`}
                className="text-decoration-none text-dark m-3"
                style={{ maxWidth: "200px", width: "100%" }}
              >
                <div className="h-100 p-2">
                  <img
                    className="img img-fluid border"
                    src={book.image_url}
                    alt={book.title}
                  />
                  <h5>{book.title}</h5>
                  <p>{book.author}</p>
                </div>
              </Link>
            ))
          )}
        </div>

        <h3 className="mt-5">New Novels</h3>
        <hr />

        <div className="d-flex flex-wrap"></div>
      </div>
    </>
  );
};

export default ViewItem;
