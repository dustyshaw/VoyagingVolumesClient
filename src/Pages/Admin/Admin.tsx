import React from "react";
import BookTable from "../../Components/AdminBookTable/BookTable";
import { Link } from "react-router-dom";
import "../../styles.scss"


const Admin: React.FC = () => {
  return (
    <div className="container">
      <h1 className="mt-5">Admin</h1>
      <Link to="/admin/add-book"><button className="btn btn-primary my-3">Add Book</button></Link>
      <BookTable />
    </div>
  );
};

export default Admin;
