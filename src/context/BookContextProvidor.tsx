import { FC, ReactNode } from "react";
import { BookContextInterface } from "../@types/book";
import React from "react";
import  {useAddBookQuery, useEditBookQuery, useRemoveBookQuery } from "./useBookQuery";

export const BookContext = React.createContext<BookContextInterface | null>(
  null
);

export const BookContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {

  // const data = useGetBooksQuery();
  const data:[] = [];

  const addBook = useAddBookQuery();

  const editBook = useEditBookQuery();

  const removeBook = useRemoveBookQuery();

  return (
    <BookContext.Provider
      value={{
        books: data ? data : [],
        isLoading: false,
        addBook: addBook.mutateAsync,
        removeBook: removeBook.mutateAsync,
        editBook: editBook.mutateAsync,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
