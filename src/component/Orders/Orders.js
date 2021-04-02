import React, { useContext, useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { UserContext } from '../../App';
import AllOrders from '../AllOrders/AllOrders';
import Header from '../Header/Header';

const Orders = () => {
    const [orderProduct, setOrderProduct] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
console.log(loggedInUser);
    useEffect(() => {
        fetch('https://rocky-brushlands-05849.herokuapp.com/orders?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            console.log("data",data);
            setOrderProduct(data)
        })
    }, [])
    console.log("orderProduct", orderProduct[0].userName);
    return (
        <Container>
            <Header />
            
            
            <div className="row">
            <div className="col-md-8">
            {
                orderProduct.map(order => <AllOrders orderProduct={order} key={order._id}></AllOrders>)
            }
            </div>
                    <div className="col-md-4">

 <Card border="danger" >
    <Card.Header>Order informations</Card.Header>
    <Card.Body>
      <Card.Title>Hello, {orderProduct[0].userName}  You bought {orderProduct.length} products</Card.Title>
      <Card.Text>
          <h5>Here is details of your order:</h5>
          <h4>Name: {orderProduct[0].userName}</h4>
          <p>Emai: {orderProduct[0].email}</p>
          <p>Address: 15/E lake circus kalabagan, Dhaka</p>
        <p>Order Date: {orderProduct[0].orderTime}</p>
            <p>Delivery Date: {orderProduct[0].deliveryTime}</p> 

            <p><b>Total amount: 2376</b></p>
      </Card.Text>
    </Card.Body>
  </Card>


                  
                    
            
            

            <div>

            </div>
        </div>
        </div>
        </Container>
    );
};

export default Orders;