import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { BookContextProvider } from "./context/BookContextProvidor.tsx";
import "./styles.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <BookContextProvider>
        <App />
      </BookContextProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
