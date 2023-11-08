const OneInvoiceAdmin = ({invoice}) => {
    const dateObject = new Date(invoice.created_at);
    const formattedDate = dateObject.toLocaleDateString(); 
const formattedTime = dateObject.toLocaleTimeString();

    return (
        <div className="container mt-3">
        <h2>Detalji narudzbe</h2>
        <div className="card">
          <div className="card-body">
            <p className="card-text">
              Proizvod: {invoice.product.name}
              <span className="text-primary"> Cena: {invoice.product.price} RSD</span>
            </p>
            <p className="card-text">Količina: {invoice.quantity}</p>
            <p className="card-text">
              Datum narudžbe: {formattedDate}
              <span className="text-muted"> {formattedTime}</span>
            </p>
            <p>Korisnik : {invoice.user.first_name} {invoice.user.last_name}</p>
            <p>Adresa za isporuku: {invoice.user.address}</p>
            
          </div>
        </div>
      </div>
      );
    };
    
    export default OneInvoiceAdmin;
    