import React from "react";

const Invoices = () => {
  return (
    <div>
      {window.sessionStorage.getItem("auth_token") == null ? (
        <h2>Potrebno je da se ulogujete kako biste pristupili narudzbama.</h2>
      ) : (
        // eslint-disable-next-line 
        window.sessionStorage.getItem("user_id") ==1?
        (<h1>Admin je ulogovan</h1>
        
        )
        
        :(<h1>Korisnik je ulogovan</h1>
        
        )
      )}
    </div>
  );
};

export default Invoices;
