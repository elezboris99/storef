import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
const OneProduct = ({ product }) => {
  let nav = useNavigate();
  function handleUpdateProduct() {
    nav("/updateproduct/" + product.id);
  }
  const [korpa, setKorpa] = useState(0);
  function handleAddToCart() {
    if (korpa < product.quantity) setKorpa(korpa + 1);
  }
  function handleRemoveFromCart() {
    if (korpa > 0) setKorpa(korpa - 1);
  }
const[valuta,setValuta] =useState();
const[rates,setRates] =useState();
const[izabranaCena, setIzabranacena]=useState(product.price+" RSD");
const handleChange = (e) => {
  setValuta(e.target.value);
}; 
  useEffect(() => {
      fetch('https://open.er-api.com/v6/latest/rsd')
        .then(response => response.json())
        .then(data => {
          setRates(data); // Postavljamo podatke u stanje komponente
        })
        .catch(error => {
          console.error('Greška pri dohvatanju podataka:', error);
        });
    }, []);
  function handleRates(){
    setIzabranacena((rates.rates[valuta] * product.price).toFixed(2) + "  " +valuta);
    console.log((rates.rates[valuta] * product.price).toFixed(2) + "  " +valuta)
  }
  function handleNewInvoice() {
    if (korpa === 0) {
      return;
    }
    const confirmResponse = window.confirm(
      "Da li ste sigurno da zelite da porucite sledeci proizvod " +
        product.name +
        "?"
    );
    if (confirmResponse) {
      let data = JSON.stringify({
        product_id: product.id,
        quantity: korpa,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "api/invoices",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " + window.sessionStorage.getItem("auth_token"),
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      let data2 = JSON.stringify({
        name: product.name,
        description: product.description,
        photo: product.photo,
        price: product.price,
        quantity: product.quantity - korpa,
      });

      let config2 = {
        method: "put",
        maxBodyLength: Infinity,
        url: "api/products/" + product.id,
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer Wp25hMKXTwK8SHa0yK2sYUrWg3d9QAGbnd42LXl18c1759e1",
        },
        data: data2,
      };

      axios
        .request(config2)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      nav("/users/" + window.sessionStorage.getItem("user_id") + "/invoices");
    }
  }
  function handleDeleteProduct() {
    const confirmResponse = window.confirm(
      "Da li ste sigurno da zelite da obrisete sledeci proizvod " +
        product.name +
        "?"
    );
    if (confirmResponse) {
      let config = {
        method: "delete",
        maxBodyLength: Infinity,
        url: "api/products/" + product.id,
        headers: {
          Authorization:
            "Bearer " + window.sessionStorage.getItem("auth_token"),
        },
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          alert("Uspesno uklonjen sledeci proizvod:" + product.name);
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <div className="card" style={{ width: "22rem" }}>
      <img src={product.photo} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Cena: {izabranaCena}
          </li>
        <li className="list-group-item">
          <select className="form-select" aria-label="Default select example" onChange={handleChange}>
            <option value="RSD">RSD</option>
            <option value="BAM">BAM</option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
          </select>
          <button onClick={handleRates}>Prikazi u izabranoj valuti</button>
        </li>

        <li className="list-group-item">Na stanju: {product.quantity}</li>
      </ul>
      {
        // eslint-disable-next-line
        window.sessionStorage.getItem("user_id") == 1 ? (
          <div className="list-group list-group-flush">
            <button className="list-group-item" onClick={handleUpdateProduct}>
              Izmeni proizvod
            </button>
            <button className="list-group-item" onClick={handleDeleteProduct}>
              Ukloni proizvod
            </button>
          </div>
        ) : window.sessionStorage.getItem("auth_token") == null ? (
          <></>
        ) : (
          <div>
            <button className="col-md-6" onClick={handleAddToCart}>
              <AiFillPlusCircle />
            </button>
            <button className="col-md-6" onClick={handleRemoveFromCart}>
              <AiFillMinusCircle />
            </button>
            <p>U korpi: {korpa}</p>
            <button className="list-group-item" onClick={handleNewInvoice}>
              Naruci
            </button>
          </div>
        )
      }
    </div>
  );
};
export default OneProduct;
