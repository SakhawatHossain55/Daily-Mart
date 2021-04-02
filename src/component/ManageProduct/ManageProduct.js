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

            <tr>
              <td>{name}</td>
              <td>{wight}</td>
              <td>{amount}</td>
              <td className="text-right"><button className="btn btn-danger" onClick={() => deleteProduct(_id)}>Delete</button> <button className="btn btn-primary" >Edit</button></td>
            </tr>


    </>
  );
};

export default ManageProduct;
