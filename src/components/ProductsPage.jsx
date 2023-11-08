import { useState, useEffect } from "react";
import axios from "axios"; 
import OneProduct from "./OneProduct";

const ProductsPage = ({ token }) => {
  const [products, setProducts] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); 

  function compareByPrice(a, b) {
    return a.price - b.price;
  }

  function compareByPriceDesc(a, b) {
    return b.price - a.price;
  }

  function handleSort() {
    if (products) {
      const sorted = products.slice().sort(compareByPrice);
      setProducts(sorted);
    }
  }

  function handleSortDesc() {
    if (products) {
      const sorted = products.slice().sort(compareByPriceDesc);
      setProducts(sorted);
    }
  }

  useEffect(() => {
    if (!products) {
      axios.get("api/products").then((res) => {
        console.log(res.data.data);
        setProducts(res.data.data);
      });
    }
  }, [products]);


  function filterProducts() {
    if (!products) {
      return [];
    }
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <div>
      <nav className="navbar navbar-light justify-content-center mt-4">
        <form className="form-inline">
          <button
            type="button"
            className="btn btn-primary btn-lg mr-3"
            id="btnSortR"
            onClick={handleSort}
          >
            Sortiraj rastuce
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg mr-3 "
            id="btnSortO"
            onClick={handleSortDesc}
          >
            Sortiraj opadajuce
          </button>
          <input
            className="form-control form-control-lg mr-sm-2"
            type="search"
            placeholder="Pretrazi po nazivu proizvoda"
            aria-label="Search"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </form>
      </nav>

      <div className="product-container">
        {filterProducts().map((product) => (
          <OneProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
