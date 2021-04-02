import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Table, Row } from "react-bootstrap";
import Admin from "../Admin/Admin";
import ManageProduct from "../ManageProduct/ManageProduct";

const ProductList = () => {
  const [manageProduct, setManageProduct] = useState([]);
  useEffect(() => {
    fetch("https://rocky-brushlands-05849.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setManageProduct(data);
      });
  }, []);

  return (
    <Container fluid>
      <Row className="vh-100 ">
        <Admin />
      <div className="col-lg-9 col-md-8 p-5">
        <h3 className="mb-5">Manage Product</h3>
        <Table striped bordered hover className="p-3 shadow">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Wight</th>
              <th>Amount</th>
              <th>Manage</th>
            </tr>
          </thead>
        
        {manageProduct.map((mp) => (
          <ManageProduct manageProduct={mp} key={mp._id}></ManageProduct>
        ))}
        </Table>
      </div>
      </Row>
    </Container>
  );
};

export default ProductList;
