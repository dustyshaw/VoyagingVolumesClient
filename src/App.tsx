import "./styles.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About";
import NavBar from "./Components/NavBar";
import Browse from "./Pages/Browse";
import BookPage from "./Pages/View-Book/Book";
import "bootstrap/dist/css/bootstrap.min.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./Pages/ErrorPage";
import Admin from "./Pages/Admin/Admin";
import AddBookPg from "./Pages/Admin/AddBookPg";
import EditBookPg from "./Pages/Admin/EditBookPg";
import SchedulePg from "./Pages/Schedule/SchedulePg";
import Footer from "./Components/Footer";
import BottomNav from "./Components/BottomNav";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
        <Toaster />
      <div className="d-xl-block d-lg-block d-md-done d-sm-none d-xs-none d-none">
        <NavBar />
      </div> 
      <ErrorBoundary fallback={<ErrorPage />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/about" element={<About />} />
          <Route path="/book/:bookId" element={<BookPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/add-book" element={<AddBookPg />} />
          <Route path="/admin/edit-book/:bookId" element={<EditBookPg />} />
          <Route path="/schedule" element={<SchedulePg />} />
        </Routes>
      </ErrorBoundary>
      <Footer />
      <div className="d-xl-none d-lg-none position-sticky fixed-bottom">
        <BottomNav />
      </div>
    </div>
  );
}

export default App;
