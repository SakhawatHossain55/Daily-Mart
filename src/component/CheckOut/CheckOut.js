import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import './CheckOut.css'

const CheckOut = () => {
    const {_id} = useParams();
    // console.log(_id);
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/product/${_id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data[0]);
            setProduct(data[0])
        })
    }, [])
// console.log(product);
    return (
        <div className="checkOut rounded p-5 text-center">
                <img src={product.imageURL} alt=""/>
                <p>{product.name}</p>
                <h3>${product.amount}</h3>
        </div>
    );
};

export default CheckOut;