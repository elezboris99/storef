import React from "react";
import "../App.css";
import { useState } from "react";
import axios from "axios";

const NewProduct = () => {
  const formStyle = {
    marginLeft: "300px",
    marginRight: "300px",
  };
  const [productData, SetProductData] = useState({
    name: "",
    photo: "",
    price: 0,
    quantity: 0,
    description: "",
  });
  function handleInput(e) {
    let newProductData = productData;
    newProductData[e.target.name] = e.target.value;
    SetProductData(newProductData);
    console.log(productData);
  }

  function handleNewProduct() {


    let data = JSON.stringify({
        "name": productData.name,
        "description": productData.description,
        "price": productData.price,
        "quantity": productData.quantity,
        "photo": productData.photo
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'api/products',
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': 'Bearer '+window.sessionStorage.getItem("auth_token")
        },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    (
        // eslint-disable-next-line
        window.sessionStorage.getItem("user_id")==1)?(
    <form className="row g-3 " style={formStyle} onSubmit={handleNewProduct}>
      <div className="col-md-6">
        <label htmlFor="inputName" className="form-label">
          Naziv proizvoda
        </label>
        <input type="text" className="form-control" id="inputName" name="name" onInput={handleInput}/>
      </div>
      <div className="col-md-6">
        <label htmlFor="inputPhoto" className="form-label">
          Link slike
        </label>
        <input type="text" className="form-control" id="inputPhoto" name="photo" onInput={handleInput} />
      </div>

      <div className="col-md-6">
        <label htmlFor="inputPrice" className="form-label">
          Cena
        </label>
        <input
          type="number"
          step="0.01"
          className="form-control"
          id="inputPrice"
          name="price"
          onInput={handleInput}
        />
      </div>

      <div className="col-md-6">
        <label htmlFor="inputQuantity" className="form-label">
          Dostupna kolicina
        </label>
        <input type="number" className="form-control" id="inputQuantity" name="quantity" onInput={handleInput} />
      </div>

      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Opis proizvoda"
          id="description"
          name="description"
          onInput={handleInput}
        ></textarea>
        <label htmlFor="description">Specifikacije proizvoda</label>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Sacuvaj
        </button>
      </div>
    </form>):(
    
    <h2>Stranica namjenjena samo kao administratorski panel i nije dostupna nikome sem administratorima.</h2>)
  );
};

export default NewProduct;
