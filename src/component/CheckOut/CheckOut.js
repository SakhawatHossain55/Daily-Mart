import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import "./CheckOut.css";
import { Container } from "@material-ui/core";
import { UserContext } from "../../App";
import Header from "../Header/Header";

const CheckOut = () => {
  const { _id } = useParams();
  const [loggedInUser ] = useContext(UserContext);
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/product/${_id}`)
      .then((res) => res.json())
      .then((data) => {

        setProduct(data[0]);
      });
  }, []);
  const [selectedDate, setSelectedDate] = useState({
    deliveryTime:new Date()
  });

  const handleDatePicker = (date) => {
      const newDate = {...selectedDate};
      newDate.deliveryTime = date;
    setSelectedDate(selectedDate);
  };
  let history = useHistory()
  const handleCheckOut = () => {
    const newOrder = {...loggedInUser, ...selectedDate, orderTime: new Date(), ...product}
    console.log(newOrder);
     
    fetch('http://localhost:5000/addOrder', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newOrder)
    })
    .then(res => res.json())
    .then(data => {
      alert('Your order successfully')
      
      history.push("/orders");
    })
  };


  return (
    <Container>
        <Header />
      <div className="checkOut rounded p-5">
          <h3>Check Out</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Wight</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{product.name}</td>
              <td>1</td>
              <td>{product.wight}</td>

              <td>${product.amount}</td>
            </tr>
          </tbody>
        </Table>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Delivery Date"
              value={selectedDate.deliveryTime}
              onChange={handleDatePicker}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />

          </Grid>
          <button as={Link} to="/orders" className="btn btn-success ml-auto" onClick={handleCheckOut}>
          Check Out
        </button>
        </MuiPickersUtilsProvider>

        
      </div>
    </Container>
  );
};

export default CheckOut;
