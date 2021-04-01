import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import './Admin.css'

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        console.log(data);
        const eventData = {
            name: data.name,
            amount: data.amount,
            imageURL: imageURL
        }
        const url = `http://localhost:5000/addProduct`
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
        <div className="container">
            <div style={{marginTop: '150px'}}>
                <div className="col-md-8 offset-md-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control" name="name" defaultValue="New Products" ref={register} />
                        <br/>
                        <input className="form-control" name="amount" defaultValue="Product Amount" ref={register} />
                        <br/>
                        <input className="form-control" name="exampleRequired" type="file" onChange={handleImageUpload} />
                        <br/>
                        <input type="submit" className="save-style px-4 rounded form-control" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admin;