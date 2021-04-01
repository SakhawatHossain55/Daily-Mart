import React from "react";
import { Table } from "react-bootstrap";

const ManageProduct = (props) => {
  console.log(props);
  const { name, _id, amount, wight } = props.manageProduct;

  const deleteProduct = (id) => {
    console.log("click me", id);
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("deleted successfully");
      });
  };

  return (
    <>
      <div>
        <h3>{name}</h3>
        <h3>Wight : {wight}</h3>
        <h3>Amount : {amount}</h3>
        <button onClick={() => deleteProduct(_id)}>delete</button>
      </div>
      {/* <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Wight</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </> */}
    </>
  );
};

export default ManageProduct;
