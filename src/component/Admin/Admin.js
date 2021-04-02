import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  return (


        <div className="adminWrapper col-lg-3 col-md-4 p-5">
          <h2><Link to="/">Daily Mart</Link></h2>


          <ul className="list-group">
            <li className="list-group-item list-group-item-action">
              <Link to="/productList">Manage Product</Link>
            </li>
            <li className="list-group-item list-group-item-action">
              <Link to="/addProduct">Add Product</Link>
            </li>
          </ul>
        </div>

  );
};

export default Admin;
