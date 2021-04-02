import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../Header/Header";
import Products from "../Products/Products";
import "./Home.css";


const Home = () => {

  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('https://rocky-brushlands-05849.herokuapp.com/products')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setProducts(data)
    })
  }, [])
  
  return (
    <div className="home">
      <Header />
      <div className="container mb-5 mt-5">
        <div className="col-md-8 offset-md-2">
          <form action="/addWorks" method="post">
            <div className="row">
              <div className="col">
                <input
                  className="form-control addedWork"
                  type="text"
                  name="name"
                  id=""
                  placeholder="Search Area"
                />
              </div>
              <div className="col-auto">
                <button type="button" className="btn btn-success">Search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Container>
      
        <div className="row">
          {products.map( pd => <Products product={pd} key={pd._id}></Products>)}
        </div>
      </Container>
    </div>
  );
};

export default Home;
