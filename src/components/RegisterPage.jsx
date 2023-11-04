import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const RegisterPage = () => {





    const[UserData, SetUserData]=useState({
        email:"",
        password:"",
        first_name:"",
        last_name:"",
        address:""
        
        });
        let navigate = useNavigate();
        function handleInput(e){
        let newUserData = UserData;
        newUserData[e.target.name]=e.target.value;
        SetUserData(newUserData);
        console.log(UserData);
        
        }
        function handleRegister(e){
        e.preventDefault();
        axios.post("api/register", UserData).then((res)=>{
            console.log(res.data);
      navigate('/login')
        
        
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
            background-image: radial-gradient(650px circle at 0% 0%,
                hsl(218, 41%, 35%) 15%,
                hsl(218, 41%, 30%) 35%,
                hsl(218, 41%, 20%) 75%,
                hsl(218, 41%, 19%) 80%,
                transparent 100%),
              radial-gradient(1250px circle at 100% 100%,
                hsl(218, 41%, 45%) 15%,
                hsl(218, 41%, 30%) 35%,
                hsl(218, 41%, 20%) 75%,
                hsl(218, 41%, 19%) 80%,
                transparent 100%);
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

      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
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

          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
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
                <form onSubmit={handleRegister}>
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          name="first_name"
                          onInput={handleInput}
                        />
                        <label className="form-label" htmlFor="form3Example1">
                          Ime
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          name="last_name"
                          onInput={handleInput}
                        />
                        <label className="form-label" htmlFor="form3Example2">
                          Prezime
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Email input */}
                  <div className="form-outline mb-4">
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
                  <div className="form-outline mb-4">
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

                  {/* Address input */}
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example5"
                      className="form-control"
                      name="address"
                      onInput={handleInput}
                    />
                    <label className="form-label" htmlFor="form3Example5">
                      Adresa
                    </label>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Registruj se
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
