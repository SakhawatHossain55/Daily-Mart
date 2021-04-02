import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
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
            setOrderProduct(data)
        })
    }, [])
    return (
        <Container>
            <Header />
            <div>
            <h4> You bought {orderProduct.length} products</h4>
            {
                orderProduct.map(order => <AllOrders orderProduct={order} key={order._id}></AllOrders>)
            }
        </div>
        </Container>
    );
};

export default Orders;