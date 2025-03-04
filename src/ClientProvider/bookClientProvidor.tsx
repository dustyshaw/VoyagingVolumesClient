// import { useMutation, useQuery } from "@tanstack/react-query";
// import React from "react";
// import { booksApiService } from "../BooksApiService";
// import LoadingSpinner from "../Components/LoadingSpinner";
// import { BookContext } from "../context/BookContextProvidor";
// import { Book } from "../@types/book";

// const BookClientProvidor: React.FC = () => {
//   const { data, isLoading } = useQuery({
//     queryFn: () => booksApiService.getAll(),
//     queryKey: ["books"],
//   });

//   // Add stuff
//   const { mutateAsync: addBookMutation} = useMutation({
//     mutationFn: booksApiService.add,
//   })

//   const addBook = async (newBook: Book) => {
//     addBookMutation(newBook)
//   };

//   // Edit stuff
//   const { mutateAsync: editBookMutation } = useMutation({
//     mutationFn: booksApiService.update,
//   })

//   const updateBook = async (buc: Book) => {
//     editBookMutation(buc);
//   }

//   // Delete stuff
//   const deleteItemMutation = useMutation({
//     mutationFn: booksApiService.delete,
//   });

//   const removeBook = async (id: number) => {
//     deleteItemMutation.mutateAsync(id);
//   };


//   if (isLoading) {
//     return <LoadingSpinner />;
//   }

//   return (
//     <BookContext.Provider
//       value={{
//         books: data ? data : [],
//         isLoading,
//         addBook,
//         updateBook,
//         removeBook,
//       }}
//     >
//     </BookContext.Provider>
//   );
// };

// export default BookClientProvidor;
