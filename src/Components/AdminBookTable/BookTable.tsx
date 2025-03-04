import React from "react";
import { BookContext } from "../../context/BookContextProvidor";
import { BookContextInterface } from "../../@types/book";
import { Link } from "react-router-dom";
import PencilSquare from "../../assets/icons/pencilSquare";
import OpenUpRight from "../../assets/icons/OpenUpRight";
import Trash from "../../assets/icons/Trash";

const BookTable = () => {
  const { books, removeBook } = React.useContext(
    BookContext
  ) as BookContextInterface;

  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">ISBN</th>
              <th scope="col">img</th>
              <th scope="col">Price</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, key) => (
              <tr key={key}>
                <th scope="row">{book.id}</th>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td className="text-truncate">
                  <span
                    className="d-inline-block text-truncate"
                    style={{ maxWidth: "120px" }}
                  >
                    {book.image_url}
                  </span>
                </td>
                <td>${book.price.toFixed(2)}</td>
                <td>
                  <Link
                    to={`/admin/edit-book/${book.id}`}
                    className="react-link"
                  >
                    <span>
                      <PencilSquare />
                    </span>
                  </Link>
                </td>
                <td>
                  <Link to={`/book/${book.id}`} className="react-link">
                    <span>
                      <OpenUpRight />
                    </span>
                  </Link>
                </td>
                <td>
                  <span data-toggle="modal">
                    <span
                      className="dropdown-item text-danger"
                      role="button"
                      onClick={() => removeBook(book.id)}
                    >
                      <Trash />
                    </span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookTable;
