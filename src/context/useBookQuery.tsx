import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { booksApiService } from "../Services/BooksApiService";
import { Book } from "../@types/book";
import toast from "react-hot-toast";

const bookKeys = {
  all: ["books"] as const,
};

const queryClient = new QueryClient();

export function useGetBooksQuery() {
  const allBooks = useQuery({
    queryKey: bookKeys.all,
    queryFn: booksApiService.getAll,
    throwOnError: true,
    refetchInterval: 30000,
  });

  return allBooks;
}

export function useAddBookQuery() {
  const addBook = useMutation({
    mutationFn: (newBook: Book) => booksApiService.add(newBook),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: bookKeys.all });
      toast.success(`Book Successfully Added`);
    },
    onError: (error) => {
      toast.error(`Error adding book: ${error.message}`);
    },
  });

  return addBook;
}

export function useEditBookQuery() {
  const editBook = useMutation({
    mutationFn: (buc: Book) => booksApiService.update(buc),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: bookKeys.all });
      toast.success("Book Successfully Edited");
    },
    onError: (error) => {
      toast.error(`Error adding book: ${error.message}`);
    },
  });

  return editBook;
}

export function useRemoveBookQuery() {
  const removeBook = useMutation({
    mutationFn: (id: number) => booksApiService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: bookKeys.all });
      toast.success("Book Successfully Removed");
    },
    onError: (error) => {
      toast.error(`Error removing book: ${error.message}`);
    },
  });

  return removeBook;
}
