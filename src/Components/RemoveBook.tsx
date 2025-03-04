import React, { useState } from "react";
import { BookContext } from "../context/BookContextProvidor";
import { BookContextInterface } from "../@types/book";
import Select from "./Inputs/Select";

const RemoveBook = () => {
  const { books, removeBook } = React.useContext(
    BookContext
  ) as BookContextInterface;

  const [selectedBookId, setselectedBookId] = useState<number>();

  const getSelectedBook = (bookId: string) => {
    console.log("Book Selected: ", bookId);

    if (bookId) {
      setselectedBookId(Number(bookId));
    } else {
      console.error("Book not found");
    }
  };

  const deleteBook = () => {
    if (selectedBookId != undefined) {
      removeBook(selectedBookId);
    }
  };

  return (
    <>
      <h2>Remove a Book</h2>
      <Select
        DefaultOption="Select book to delete"
        errorMsg="Something went wrong"
        onChildChange={getSelectedBook}
        list={books.map(x => x.title)}
      />
      <button className="btn btn-danger" onClick={deleteBook}>
        Delete
      </button>
    </>
  );
};

export default RemoveBook;
