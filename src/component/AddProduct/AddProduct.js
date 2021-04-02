import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Admin from '../Admin/Admin';
import './AddProduct.css'

const AddProduct = () => {

    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        console.log(data);
        const eventData = {
            name: data.name,
            wight: data.wight,
            amount: data.amount,
            imageURL: imageURL
        }
        const url = `https://rocky-brushlands-05849.herokuapp.com/addProduct`
        console.log(eventData)
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side responce'))

    };
    const handleImageUpload = event => {
        console.log(event.target.files);
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '370f91189504233345b7baf2e0029a63')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
              console.log(response);
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    return (
        <Container fluid>
             <Row className="vh-100 ">
            <Admin />

                <div className="col-lg-9 col-md-8 p-5">
                    <h2>Add Products</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control" name="name" placeholder="Products Name" ref={register} />
                        <br/>
                        <input className="form-control" name="wight" placeholder="Wight" ref={register} />
                        <br/>
                        <input className="form-control" name="amount" placeholder="Product Amount" ref={register} />
                        <br/>
                        <input className="form-control" name="exampleRequired" type="file" onChange={handleImageUpload} />
                        <br/>
                        <input type="submit" className="save-style px-4 rounded form-control" />
                    </form>
                </div>
                </Row>
                </Container>
    );
};

export default AddProduct;

