import React from "react";
import './AllOrders.css'

const AllOrders = (props) => {

  const {
    imageURL,
    name,
    wight,
    amount,
    photoURL,
    email,
    deliveryTime,
    orderTime,
    userName,
  } = props.orderProduct;
  return (
        
            <div className="row shadow p-3 rounded m-3 align-items-center justify-content-center product-style">
                    <div className="col-3">
                    <img src={imageURL} alt="" />
                    </div>
                    <div className="col-md-5">
                        <p>{name}</p>
                    </div>
                    <div className="col-md-4">
                
                    <h6>Wight: {wight}</h6>
                    <h6>Amount: {amount}</h6>
                </div>
            </div>
      

  );
};

export default AllOrders;
