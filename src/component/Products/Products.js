import React from 'react';
import { useHistory } from "react-router-dom";
import './Products.css'

const Products = (props) => {
    const {name, _id, amount, imageURL} = props.product;
    const history = useHistory()

    const handleProductClick = () => {
        history.push(`/checkOut/${_id}`)
    }

    return (
        <div className="col-md-6 col-lg-4">
           
                <div className="cart-style mb-4">
                    <img className="home-image" src={imageURL} alt=""/>
                    <h4>{name}</h4>
                    <div className="row">
                        <h4 className="text-color">$ {amount}</h4>
                        <button type="button" onClick={handleProductClick} className="btn btn-success ml-auto button-style">Buy Now</button>
                    </div>
                </div>
            
        </div>
    );
};

export default Products;