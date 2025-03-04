export interface Book {
  id: number;
  title: string;
  author: string;
  isbn: string;
  image_url: string;
  price: number;
  desc: string;
}

export interface BookContextInterface {
  books: Book[];
  isLoading: boolean;
  addBook: (newBook: Book) => Promise;
  removeBook: (id: number) => Promise;
  editBook: (buc: Book) => Promise;
}
