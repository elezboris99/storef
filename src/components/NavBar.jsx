import React from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = ({token}) => {
  let nav= useNavigate();
function handleLoginCheck(){
 if (window.sessionStorage.getItem("auth_token")==null) alert("Potrebno je da se ulogujete kako biste pristupili narudzbama.")



}

  function handleLogout(){
   console.log("proba");
    let config = {
      method: 'post',
      url: 'api/logout',
      headers: { 
        'Authorization': 'Bearer ' + window.sessionStorage.getItem("auth_token"),
      }
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      window.sessionStorage.removeItem("auth_token");
      window.sessionStorage.removeItem("user_id");
      
  nav("/");
window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
  }
  
  
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          Elez
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Pocetna stranica
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/products" >
                Proizvodi
              </a>
            </li>
            
{
// eslint-disable-next-line
(window.sessionStorage.getItem("user_id")==1)?
         (   <li className="nav-item">
              <a className="nav-link" href="/newproduct" >
                Dodaj proizvod
              </a>
            </li>
         ):(<></>)
}

            <li className="nav-item" onClick={handleLoginCheck}>
            <a className="nav-link" href={
              (window.sessionStorage.getItem("auth_token")==null)?
              "#"
              :(
                // eslint-disable-next-line
(window.sessionStorage.getItem("user_id")==1)? "/invoices": '/users/'+window.sessionStorage.getItem("user_id")+'/invoices'


              )
              }>
                Narudzbe
              </a>
            </li>
            {token == null ? (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
                </li>
            ) : (<div>
              <li className="nav-item">
                <button className="nav-link no-border" onClick={handleLogout} > 
                  Logout
                  </button>
                </li>
                </div>
            )}
       
          </ul>
        </div>
      </div>
    </nav>
    <Outlet/>
    </div>
  );
};

export default Navbar;
