import React from "react";
import './AllOrders.css'

const AllOrders = (props) => {
  console.log(props.orderProduct);
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
    <div className="row">

        <div className="col-md-8">

                <div className=" row product-style">
                    <div className="col">
                     <img src={imageURL} alt="" />
                     </div>
					 <div className="col-md-6"><p>{name}</p></div>
					 <div className="col-md-4">
						<h6>Wight: {wight}</h6>
						<h6>Amount: {amount}</h6>
					</div>
				
                </div>


        </div>
        <div className="col-md-4">
            <div>
            <img src={photoURL} alt="" />
            <h4>{userName}</h4>
            <p>{email}</p>
            <p>Order Date:{orderTime}</p>
            <p>Delivery Date:{deliveryTime}</p>
            </div>
        </div>

    </div>
  );
};

export default AllOrders;
