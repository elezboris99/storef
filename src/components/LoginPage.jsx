import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const LoginPage = ({addToken}) => {
const[UserData, SetUserData]=useState({
email:"",
password:"",

});
let navigate = useNavigate();

function handleInput(e){
let newUserData = UserData;
newUserData[e.target.name]=e.target.value;
SetUserData(newUserData);
console.log(UserData);

}
function handleLogin(e){
e.preventDefault();
axios.post("api/login", UserData).then((res)=>{
    console.log(res.data);
if(res.data.success===true){

window.sessionStorage.setItem("auth_token", res.data.access_token);
window.sessionStorage.setItem("user_id", res.data.user_id);
addToken(res.data.access_token);
navigate("/");
}
else{
  alert("Neispravno uneseni podaci!");
}

}).catch((e)=>{
console.log(e);
});

}

  return (
    <section className="background-radial-gradient overflow-hidden">
      <style>
        {`
          .background-radial-gradient {
            
            background-color: hsl(218, 41%, 15%);
            background-image: radial-gradient(650px circle at 0% 0%, hsl(218, 41%, 35%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100%),
              radial-gradient(1250px circle at 100% 100%, hsl(218, 41%, 45%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100%),
          
            }
          
          #radius-shape-1 {
            height: 220px;
            width: 220px;
            top: -60px;
            left: -130px;
            background: radial-gradient(#44006b, #ad1fff);
            overflow: hidden;
          }
          
          #radius-shape-2 {
            border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
            bottom: -60px;
            right: -110px;
            width: 300px;
            height: 300px;
            background: radial-gradient(#44006b, #ad1fff);
            overflow: hidden;
          }
          
          .bg-glass {
            background-color: hsla(0, 0%, 100%, 0.9) !important;
            backdrop-filter: saturate(200%) blur(25px);
            
          }
        `}
      </style>

      <div className="container px-6 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-5" style={{ zIndex: 10 }}>
            <h1
              className="my-5 display-5 fw-bold ls-tight"
              style={{ color: "hsl(218, 81%, 95%)" }}
            >
              Elez
              <br />
              <span style={{ color: "hsl(218, 81%, 75%)" }}>
                Prodavnica bele tehnike i kucnih aparata
              </span>
            </h1>
            <p
              className="mb-4 opacity-70"
              style={{ color: "hsl(218, 81%, 85%)" }}
            >
              Prodavnica bele tehnike i kucnih aparata Elez je otovrena prvi put
              2023. godine u mesecu oktobru. Kvalitetnom robom i povoljnim
              cenama se probija medju lidere na trzistu u svom poslu. Postanite
              i vi clan uspesnog tima.
            </p>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-5 position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong"
            ></div>

            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                <form   onSubmit={handleLogin}>
                  {/* Email input */}
                  <div className="form-outline mb-5">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control"
                      name="email"
                      onInput={handleInput}
                    />
                    <label className="form-label" htmlFor="form3Example3">
                      Email
                    </label>
                  </div>

                  {/* Password input */}
                  <div className="form-outline mb-5">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control"
                      name="password"
                      onInput={handleInput}
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                   
                  >
                    Prijavi se
                  </button>

                  <div>
                    <p className="mb-5">
                      Nemate nalog?{" "}
                      <a href="/register" className="text-black-50 fw-bold">
                        Registruj se
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </section>
  );
};

export default LoginPage;
