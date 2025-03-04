import { Link } from "react-router-dom";
import "./Home.modules.scss";
import { BookContext } from "../../context/BookContextProvidor";
import { BookContextInterface } from "../../@types/book";
import React from "react";
import "../../styles.scss";
import LoadingSpinner from "../../Components/LoadingSpinner";

const Home = () => {
  const { books, isLoading } = React.useContext(
    BookContext
  ) as BookContextInterface;

  return (
    <>
      <div className="container">
        <div className="row  hero">
          <div className="col-md-6">
            <h1 className="fade-in">The Traveling Bookstore</h1>
            <p className="lead fade-in">Selling new and used books.</p>
            <Link to="/browse">
              <button className="btn btn-primary">Browse More</button>
            </Link>
          </div>
          <div className="col-md-6">
            <img
              src="https://dummyimage.com/500x400/738A99/738A99"
              className="rounded img img-fluid"
            />
            <small><br />Prof, This is going to be a photo when I get a photo of the trailer...</small>
          </div>
        </div>

        <h2 className="mt-5">New In</h2>
        <p className="lead">
          Our selection is curated and always changing.
          <br />
          Check out what we have in stock.
        </p>
        <hr />
        <div className="d-flex flex-wrap">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            books?.slice(0,4).map((book) => (
              <Link
                key={book.id}
                to={`/book/${book.id}`}
                className="text-decoration-none text-dark m-3 book-link"
              >
                <div className="h-100 p-1 book">
                  <img
                    className="img img-fluid border"
                    src={book.image_url}
                    alt={book.title}
                  />
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
      <div className="mt-5 bg-dblue">
        <div className="container pt-5 pb-5 text-white">
          <center>
            <h3>Contact List</h3>
            <p>Enter our contact list for a free book on your next visit.</p>
            <input type="text" />
          </center>
        </div>
      </div>
      <div className="container">
        <h2 className="mt-5">About Us</h2>
        <hr />
        <div className="col-md-7">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, a eum
            ex optio vero, labore nesciunt nostrum vel consequuntur nam quisquam
            fuga? Vel fugiat amet sint atque exercitationem quos neque. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Nemo, a eum ex
            optio vero, labore nesciunt nostrum vel consequuntur nam quisquam
            fuga? Vel fugiat amet sint atque exercitationem quos neque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, a eum
            ex optio vero, labore nesciunt nostrum vel consequuntur nam quisquam
            fuga? Vel fugiat amet sint atque exercitationem quos neque.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
