import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
const UpdateProduct = (props) => {
  const formStyle = {
    marginLeft: "300px",
    marginRight: "300px",
  };
  let nav = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const inputName = useRef(null);
  const inputPrice = useRef(null);
  const inputQuantity = useRef(null);
  const inputDescription = useRef(null);
  const inputPhoto = useRef(null);

  useEffect(() => {
    axios
      .get("api/products/" + productId)
      .then((res) => setProduct(res.data.Product))
      .catch((err) => console.log(err));
  }, [productId]);

  const [productData, SetProductData] = useState({
    name: "",
    photo: "",
    price: 0,
    quantity: 0,
    description: "",
  });


  function handleUpdateProductDef(e) {
    e.preventDefault();
let newProductData = productData;
newProductData.name = inputName.current.value;
newProductData.price = inputPrice.current.value;
newProductData.quantity = inputQuantity.current.value;
newProductData.description = inputDescription.current.value;
newProductData.photo = inputPhoto.current.value;
   
    SetProductData(newProductData);
    console.log(productData);

    let data = JSON.stringify({
      "name": productData.name,
      "description": productData.description,
      "price": productData.price,
      "quantity": productData.quantity,
      "photo": productData.photo
    });
    
    let config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: 'api/products/'+product.id,
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
nav('/products');

  }

  return (
    <div>
       { (
          // eslint-disable-next-line
        window.sessionStorage.getItem("user_id")==1)?(
      product === null ? (
        <></>
      ) : (
        <form
          className="row g-3 "
          style={formStyle}
          onSubmit={handleUpdateProductDef}
        >
          <div className="col-md-6">
            <label htmlFor="inputName" className="form-label">
              Naziv proizvoda
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              name="name"
              defaultValue={product.name}
              ref={inputName}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPhoto" className="form-label">
              Link slike
            </label>
            <input
              type="text"
              className="form-control"
              id="inputPhoto"
              name="photo"
              defaultValue={product.photo}
              ref={inputPhoto}
            />
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
              defaultValue={product.price}
              ref={inputPrice}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputQuantity" className="form-label">
              Dostupna kolicina
            </label>
            <input
              type="number"
              className="form-control"
              id="inputQuantity"
              name="quantity"
              defaultValue={product.quantity}
              ref={inputQuantity}
            />
          </div>

          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Opis proizvoda"
              id="description"
              name="description"
              defaultValue={product.description}
              ref={inputDescription}
            ></textarea>
            <label htmlFor="description">Specifikacije proizvoda</label>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Sacuvaj
            </button>
          </div>
        </form>
      )
        ):(<h2>Stranica namjenjena samo kao administratorski panel i nije dostupna nikome sem administratorima.</h2>)}
    </div>
  );
};

export default UpdateProduct;
