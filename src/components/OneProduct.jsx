import axios from "axios";
import { useNavigate } from "react-router-dom";
const OneProduct = ({ product }) => {
let nav = useNavigate();
function handleUpdateProduct(){

nav("/updateproduct/"+product.id);



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
        <li className="list-group-item">Cena: {product.price} RSD</li>
        <li className="list-group-item">Na stanju: {product.quantity}</li>
      </ul>
      {
        // eslint-disable-next-line
        window.sessionStorage.getItem("user_id") == 1 ? (
          <div className="list-group list-group-flush">
            <button className="list-group-item" onClick={handleUpdateProduct}>Izmeni proizvod</button>
            <button className="list-group-item" onClick={handleDeleteProduct}>Ukloni proizvod</button>
          </div>
        ) : (
          <></>
        )
      }
    </div>
  );
};
export default OneProduct;
