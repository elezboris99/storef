import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import OneInvoice from "./OneInvoice";
const Invoices = () => {
  const { userId } = useParams();
  const [invoices, setInvoices] = useState();
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "users/" + userId + "/invoices",
    headers: {
      Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
    },
  };

  useEffect(
    () => {
      if (invoices == null) {
        axios.get("api/users/" + userId + "/invoices", config).then((res) => {
          console.log(res.data);
          setInvoices(res.data);
        });
      }
    },
    // eslint-disable-next-line
    [userId]
  );

  return (
    <div>
      {
        window.sessionStorage.getItem("auth_token") == null ? (
          <h2>Potrebno je da se ulogujete kako biste pristupili narudzbama.</h2>
        ) : //ako je ulogovan

        window.sessionStorage.getItem("user_id") === userId ? (
          <div>
            {invoices == null ? (
              <></>
            ) : (
              invoices.map((invoice) => (
                <OneInvoice invoice={invoice} key={invoice.id} />
              ))
            )}
          </div>
        ) : (
          <h2>Zabranjen pristup tudjim narudzbama</h2>
        ) //ako je ulogovan
      }
    </div>
  );
};

export default Invoices;
