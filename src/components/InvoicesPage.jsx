import axios from "axios";
import { useState, useEffect } from "react";
import OneInvoiceAdmin from "./OneInvoiceAdmin";
const InvoicesPages = () => {
    const [invoices, setInvoices]= useState();
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'api/invoices',
        headers: { 
          'Authorization': 'Bearer '+window.sessionStorage.getItem("auth_token")
        }
      };
    useEffect(()=>{
        if(invoices==null){
               axios.get("api/invoices", config).then((res)=>{
        console.log(res.data);
        setInvoices(res.data.data);
    })
        }
    }, 
    // eslint-disable-next-line
    [invoices]);

return (
    <div>
     {
        // eslint-disable-next-line
        (window.sessionStorage.getItem("user_id")==1)?(
            <div>
            {invoices == null ? (
              <></>
            ) : (
              invoices.map((invoice) => (
                <OneInvoiceAdmin invoice={invoice} key={invoice.id} />
              ))
            )}
          </div>
        
        
        
        
        ):<h1>Zabranjen pristup</h1>
     }
    </div>
  );
};

export default InvoicesPages;
