import { Book } from "../@types/book";

const url = import.meta.env.VITE_API_URL;

if (!url) {
  console.log("no url found!");
} else {
  console.log("Vite URL: ", url);
}
  
export const booksApiService = {
  getAll: async () => {
    const response = await fetch(url + "/all-books");
    if (!response.ok) {
      throw new Error("Network response not okay");
    }
    const data: Book[] = await response.json();

    return data;
  },

  add: async (newBook: Book) => {
    const response = await fetch(url+"/add-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    });

    if (!response) {
      console.error("No response from ", url);
    }

    const data: Book[] = await response.json();

    return data;
  },

  update: async (buc: Book) => {
    const response = await fetch(`${url}/update-book/${buc.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",  // Specify the content type
      },
      body: JSON.stringify(buc),
    });

    const data: Book = await response.json();
    return data;
  },

  delete: async (bookId: number) => {
    const response = await fetch(`${url}/delete-book?id=${bookId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Error deleting book: ", response.statusText);
      return false; // or throw an error, depending on your error handling strategy
    }

    console.log("Response after delete: ", response);
    return true;
  },
};
