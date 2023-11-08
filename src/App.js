import "./App.css";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import { useState } from "react";
import ProductsPage from "./components/ProductsPage";
import NewProduct from "./components/NewProduct";
import UpdateProduct from "./components/UpdateProduct";
import Invoices from "./components/Invoices";
import Home from "./components/Home";
import InvoicesPages from "./components/InvoicesPage";

function App() {
  const[token, setToken] = useState(window.sessionStorage.getItem("auth_token"));
function addToken(auth_token){
setToken(auth_token);

}

  return (
    <BrowserRouter className="App">
      <Routes>
    

        <Route path="/" element={<Navbar token = {token} />} >
        <Route path="/" element={< Home/>} />
        <Route path="products" element={<ProductsPage/>}/>
        <Route path="newproduct" element={<NewProduct/>}/>
        <Route path="updateproduct/:productId" element={<UpdateProduct/>}/>
        <Route path="users/:userId/invoices" element={<Invoices/>}/>
        <Route path="invoices" element={<InvoicesPages/>}/>
        <Route path="login" element={<LoginPage addToken = {addToken}/>} />
        <Route path="register" element={<RegisterPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
